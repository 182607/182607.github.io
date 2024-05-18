/**
 * Función para verificar si una cadena es un palíndromo.
 * @param {string} cadena - La cadena a evaluar.
 * @returns {string} - El resultado de la evaluación.
 */
function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";
    
    // Eliminar espacios de la cadena
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
    var iguales = true;
    
    // Comparar la cadena original con su reverso
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += "es un palíndromo.";
    } else {
        resultado += "no es un palíndromo.";
    }
    return resultado;
}

/**
 * Función que se ejecuta al pulsar el botón para evaluar la frase.
 */
function evaluarPalindromo(event) {
    event.preventDefault();
    var input = document.getElementById("frase").value;
    var resultado = palindromo(input);
    document.getElementById("resultado").innerText = resultado;
}

// Agregar un event listener al formulario
document.getElementById('palindromoForm').addEventListener('submit', evaluarPalindromo);
