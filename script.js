let seuVotoPara = document.querySelector('.seu-voto span');

console.log(seuVotoPara);

let cargo = document.querySelector('.cargo span');
let descricao = document.querySelector('.outras-informacoes');
let aviso = document.querySelector('.parte-baixo');
let lateral = document.querySelector('.dentro-direita');
let numeros = document.querySelector('.numero');

let etapaAtual = 0;

function clicou(n) {
  alert('clicou em' + n);
}
function branco() {
  alert('clicou em BRANCO!');
}
function corrige() {
  alert('clicou em CORRIGE!');
}
function confirma() {
  alert('clicou em CONFIRMA!');
}
