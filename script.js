/* ==========================================================
   SCRIPT DO SITE
   1) Abre/fecha o menu no celular
   2) Aplica o efeito de hover com scale() nos botões e ícones
      (usando JavaScript para adicionar a classe que tem o :hover
      no CSS). O botão "Fale Comigo" do cabeçalho é ignorado.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) MENU MOBILE ---------- */
  var botaoMenu = document.getElementById('menuToggle');
  var menu = document.getElementById('nav');

  botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('nav--aberto');
  });

  /* Fecha o menu ao clicar em um link (melhora a experiência no celular) */
  var linksMenu = menu.querySelectorAll('a');
  linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('nav--aberto');
    });
  });

  /* ---------- 2) HOVER + SCALE VIA JAVASCRIPT ---------- */
  /* Todo elemento com a classe "nav-hover" recebe o efeito de
     escala ao passar o mouse. O botão "Fale Comigo" (.btn--nav)
     NÃO tem a classe "nav-hover", então fica sempre normal. */
  var elementosComHover = document.querySelectorAll('.nav-hover');

  elementosComHover.forEach(function (elemento) {
    // Adiciona a classe que ativa o :hover { transform: scale() } do CSS
    elemento.classList.add('hover-scale');
  });

});
