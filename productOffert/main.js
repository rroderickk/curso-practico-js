let precioOriginal = 0.000399000;
const porcentajeDescuentoQuince = 15;
const porcentajeDescuentoVeintiCinco = 25;
const porcentajeDescuentoTreintaiCinco = 35;
const porcentajeDescuentoCuarentaiCinco = 45;
const Juan = porcentaje(precioOriginal, porcentajeDescuentoQuince).toFixed(8);
const Dc = porcentaje(precioOriginal, porcentajeDescuentoVeintiCinco).toFixed(8);
const Es = porcentaje(precioOriginal, porcentajeDescuentoTreintaiCinco).toFixed(8);
const Batman = porcentaje(precioOriginal, porcentajeDescuentoCuarentaiCinco).toFixed(8);

const ethPrice = document.getElementById("ethPrice");
const arr = [
	`${Juan} ETH`,
	`${Dc} ETH`,
	`${Es} ETH`,
	`${Batman} ETH`,
];

function porcentaje(precioOriginal, descuento) {
	//! El precio con descuento viene dado por la formula = (Precio * (100 - Descuento) )
	const precioFinal = precioOriginal * (100 - descuento);
	return precioFinal;
}

function resultPriceFinal0() {
	return (ethPrice.innerHTML = `${arr[0]}`);
}

function resultPriceFinal1() {
	return (ethPrice.innerHTML = `${arr[1]}`);
}

function resultPriceFinal2() {
	return (ethPrice.innerHTML = `${arr[2]}`);
}

function resultPriceFinal3() {
	return (ethPrice.innerHTML = `${arr[3]}`);
}