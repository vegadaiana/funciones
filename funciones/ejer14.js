function diasEnMes(mes) {
    if (mes < 1 || mes > 12) {
      return "Número de mes inválido. Debe estar entre 1 y 12.";
    }
 const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 return diasPorMes[mes - 1];
  }
  
 
  const numeroDeMes = 3; 
  const cantidadDias = diasEnMes(numeroDeMes);
  console.log("El mes" + numeroDeMes + "tiene " + cantidadDias + "días");
  