function ultimoDiaDelMes(día, mes, anio) {
    if (mes < 1 || mes > 12) {
      return "Número de mes inválido. Debe estar entre 1 y 12.";
    }
    const primerDiaDelSiguienteMes = new Date(anio, mes, 1);
    primerDiaDelSiguienteMes.setDate(primerDiaDelSiguienteMes.getDate() - 1);
    const ultimoDia = primerDiaDelSiguienteMes.getDate();
    const mesUltimoDia = primerDiaDelSiguienteMes.getMonth() + 1;
    const anioUltimoDia = primerDiaDelSiguienteMes.getFullYear();
  
    return "El último día del mes" + mes + año +  "es" + ultimoDia + mesUltimoDia + anioUltimoDia;
  }
  const diaEjemplo = 9; 
  const mesEjemplo = 12; 
  const anioEjemplo = 2022; 
  console.log(ultimoDiaDelMes(diaEjemplo, mesEjemplo, añoEjemplo));
  