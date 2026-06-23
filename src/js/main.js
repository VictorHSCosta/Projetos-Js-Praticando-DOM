import "../styles/main.css";

const projects = [
  {
    title: "Draw",
    description: "Canvas para desenhar com o mouse.",
    url: "/draw",
    accentClass: "bg-amber-700",
  },
  {
    title: "Piano",
    description: "Toque notas pelo teclado ou clique.",
    url: "/piano",
    accentClass: "bg-orange-500",
  },
  {
    title: "Jogo da Velha",
    description: "Base para treinar regras e eventos.",
    url: "/jogoDaVelha",
    accentClass: "bg-emerald-600",
  },
  {
    title: "Question",
    description: "Perguntas criadas e respondidas via DOM.",
    url: "/question",
    accentClass: "bg-blue-600",
  },
];

const menu = document.getElementById("menu");

projects.forEach((project) => {
  const link = document.createElement("a");
  link.href = project.url;
  link.className =
    "group flex min-h-44 flex-col justify-between rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md";

  const icon = document.createElement("div");
  icon.className = `h-12 w-12 rounded-md ${project.accentClass}`;

  const content = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "text-xl font-semibold text-gray-900";
  title.textContent = project.title;

  const description = document.createElement("p");
  description.className = "mt-2 text-sm leading-6 text-gray-600";
  description.textContent = project.description;

  content.append(title, description);
  link.append(icon, content);
  menu.appendChild(link);
});
