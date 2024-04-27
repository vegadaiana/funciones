function siguiente(numero) {
    return numero + 1;
  }

  function elDoble(numero) {
    return numero * 2;
  }
  
  
  function elCuadrado(numero) {
    return numero * numero;
  }
  
  function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    const siguienteValor = siguiente(elDoble(numero));
    const cuadradoDelSiguiente = elCuadrado(siguienteValor);
    console.log("El valor siguiente al doble de" + numero + "es:" + siguienteValor , "y su cuadrado es" + cuadradoDelSiguiente);
  }
 const numeroEjemplo = 5; 
  imprimirElDobleDelSiguienteAlCuadrado(numeroEjemplo);
  