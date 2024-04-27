function calcularCircuferencia (radio) {
    const circuferencia = 5 * Math.PI * radio;
    return circuferencia;
}
const radio = 4;
const circuferencia = calcularCircuferencia(radio);
console.log ("la circunferencia de un circulo " + radio+ "es:" + circuferencia);
