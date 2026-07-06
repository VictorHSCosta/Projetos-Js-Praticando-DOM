// Selecionando os elementos do DOM (Document Object Model)
const initialModal = document.getElementById("initial_modal");
const buttonToCloseModal = document.getElementById("close_modal");
const buttonToStartGame = document.getElementById("start_game");
const usernameInput = document.getElementById("username_input");
const gameStatus = document.getElementById("game_status");

// Função para fechar o modal com um efeito de transição suave
function closeInitialModal() {
  // Adiciona classes do Tailwind para sumir com suavidade (fade out)
  initialModal.classList.add("opacity-0", "pointer-events-none");

  // Aguarda 300ms (tempo da animação) para adicionar a classe 'hidden' que oculta o elemento
  setTimeout(() => {
    initialModal.classList.add("hidden");
  }, 300);
}

// Escuta o clique no botão "X" (Fechar) usando a referência direta da função
buttonToCloseModal.addEventListener("click", closeInitialModal);

// Escuta o clique no botão "Começar a Jogar"
buttonToStartGame.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  // Validação simples: se o usuário não digitar nada, exibe um alerta
  if (username === "") {
    window.alert("Por favor, digite um nome de usuário válido para jogar!");
    return;
  }

  // Atualiza o texto de status na tela usando DOM para saudar o jogador
  gameStatus.textContent = `Boa sorte, ${username}! Sua vez (Jogador X)`;

  // Fecha o modal chamando a função
  closeInitialModal();
});

// Fecha o modal caso o jogador clique fora da caixa do modal (no fundo escuro)
initialModal.addEventListener("click", (event) => {
  if (event.target === initialModal) {
    closeInitialModal();
  }
});

// Fecha o modal ao pressionar a tecla "Escape" no teclado
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !initialModal.classList.contains("hidden")) {
    closeInitialModal();
  }
});
