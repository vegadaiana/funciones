
function siguiente(numero) {
    return numero + 1;
  }

  function elDoble(numero) {
    return numero * 2;
  }

  function imprimirElDobleDelSiguiente(numero) {
    const siguienteValor = siguiente(elDoble(numero));
    console.log("El valor siguiente al doble de" + numero + "es" +  siguienteValor);
  }
  
  const numeroEjemplo = 5; 
  imprimirElDobleDelSiguiente(numeroEjemplo);
  