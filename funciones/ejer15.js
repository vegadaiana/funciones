function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const añoEjemplo = 2024; 
  if (esBisiesto(añoEjemplo)) {
    console.log(añoEjemplo + " es un año bisiesto");
  } else {
    console.log(añoEjemplo + "no es un año bisiesto");
  }
  