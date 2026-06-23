import { defineConfig } from "vite";
import { existsSync, readdirSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const srcRoot = resolve(projectRoot, "src");
const pagesRoot = resolve(srcRoot, "pages");

function getHtmlInputs() {
  const inputs = {
    main: resolve(srcRoot, "index.html"),
  };

  const pageFolders = readdirSync(pagesRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory());

  pageFolders.forEach((folder) => {
    const pageHtml = resolve(pagesRoot, folder.name, "index.html");

    if (existsSync(pageHtml)) {
      inputs[folder.name] = pageHtml;
    }
  });

  return inputs;
}

function pagesRoutePlugin() {
  return {
    name: "pages-route-plugin",
    configureServer(server) {
      server.middlewares.use((request, response, next) => {
        const url = request.url?.split("?")[0];

        if (!url || url === "/" || url.includes(".")) {
          next();
          return;
        }

        const pageName = url.replace(/^\/|\/$/g, "");
        const pageHtml = resolve(pagesRoot, pageName, "index.html");

        if (existsSync(pageHtml)) {
          request.url = `/pages/${pageName}/index.html`;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  root: "src",
  publicDir: "../public",
  plugins: [pagesRoutePlugin()],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(),
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
