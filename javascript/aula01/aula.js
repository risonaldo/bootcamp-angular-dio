const precoCombustivel = 4.29;
const KmPorLitro = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);