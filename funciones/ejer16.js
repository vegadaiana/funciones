function diasEnMes(mes, año) {
    if (mes < 1 || mes > 12) {
      return "Número de mes inválido. Debe estar entre 1 y 12.";
    }

    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (mes === 2 && esBisiesto(año)) {
      return 29;
    }
  
    return diasPorMes[mes - 1];
  }
  
  function esBisiesto(año) {
    return (anio % 4 === 0 && anio % 100 !== 0) || año % 400 === 0;
  }
  
  const diaEjemplo = 15; 
  const mesEjemplo = 10; 
  const añoEjemplo = 2018; 
  const cantidadDias = diasEnMes(mesEjemplo, añoEjemplo);
  console.log("El mes" + mesEjemplo + "del año" + añoEjemplo + "tiene" + cantidadDias + "días");
  
  