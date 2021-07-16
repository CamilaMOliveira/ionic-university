const buttonAdicionar = document.querySelector('#adicionar');
const buttonLimpar = document.querySelector('#limpar');
const despesaDigitada = document.querySelector('#despesa');
const valorDigitado = document.querySelector('#valor');
const lista = document.querySelector('#lista');
const totalP = document.querySelector('#total');

let totalSoma = 0;

buttonAdicionar.addEventListener('click', () => {
  console.log('Button adicionar');
  console.log(despesaDigitada.value);
  console.log(valorDigitado.value);

  // Chocolate R$: 10.90
  const newItem = document.createElement('ion-item');
  newItem.textContent = despesaDigitada.value + ' R$: ' + valorDigitado.value;
  lista.appendChild(newItem);

  totalSoma = totalSoma + parseFloat(valorDigitado.value);
  totalP.textContent = totalSoma;
});

buttonLimpar.addEventListener('click', () => {
  despesaDigitada.value = '';
  valorDigitado.value = '';
});