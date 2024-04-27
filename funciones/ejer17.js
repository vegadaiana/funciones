function diaAnterior(dia, mes, año) {
    if (mes < 1 || mes > 12) {
      return "Número de mes inválido. Debe estar entre 1 y 12.";
    }
const fecha = new Date(año, mes - 1, dia);
fecha.setDate(fecha.getDate() - 1);

    const diaAnterior = fecha.getDate();
    const mesAnterior = fecha.getMonth() + 1;
    const anioAnterior = fecha.getFullYear();
  
    return "El día anterior a " + dia + mes + anio + "es " + diaAnterior + mesAnterior + anioAnterior;
  }
  const diaEjemplo = 15; 
  const mesEjemplo = 10;
  const anioEjemplo = 2022; 
  console.log(diaAnterior(diaEjemplo, mesEjemplo, añoEjemplo));
  