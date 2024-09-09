const slide = document.querySelector('.slide');
const anterior = document.querySelector('.anterior');
const proximo = document.querySelector('.proximo');

let indiceAtual = 0;

function renderizarRapper(indice) {
  const dado = dados[indice];
  slide.innerHTML = `
    <img src="${dado.url}" alt="${dado.titulo}">
    <h2>${dado.titulo}</h2>
    <p class="descricao">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Mais informações</a>
  `;
}

// Renderiza o primeiro rapper
renderizarRapper(indiceAtual);

anterior.addEventListener('click', () => {
  indiceAtual--;
  if (indiceAtual < 0) {
    indiceAtual = dados.length - 1;
  }
  renderizarRapper(indiceAtual);
});

proximo.addEventListener('click', () => {
  indiceAtual++;
  if (indiceAtual >= dados.length) {
    indiceAtual = 0;
  }
  renderizarRapper(indiceAtual);
});