function detectar() {
  var texto = document.getElementById('textoInput').value;
  var resultado = document.getElementById('resultado');

  if (texto === texto.toUpperCase()) {
    resultado.textContent = 'La cadena ingresada contiene únicamente mayúsculas.';
  } else if (texto === texto.toLowerCase()) {
    resultado.textContent = 'La cadena ingresada contiene únicamente minúsculas.';
  } else {
    resultado.textContent = 'La cadena ingresada contiene tanto mayúsculas como minúsculas.';
  }
}
