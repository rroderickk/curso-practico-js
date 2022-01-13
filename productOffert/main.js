let precioOriginal = 0.000399;

const porcentajeDescuentoQuince = 15;
const porcentajeDescuentoVeintiCinco = 25;
const porcentajeDescuentoTreintaiCinco = 35;
const porcentajeDescuentoCuarentaiCinco = 45;
const Juan = porcentaje(precioOriginal, porcentajeDescuentoQuince).toFixed(8);
const Dc = porcentaje(precioOriginal, porcentajeDescuentoVeintiCinco).toFixed(8);
const Es = porcentaje(precioOriginal, porcentajeDescuentoTreintaiCinco).toFixed(8);
const Batman = porcentaje( precioOriginal, porcentajeDescuentoCuarentaiCinco).toFixed(8);

const ethPrice = document.getElementById("ethPrice");
const discountId$ = document.getElementById("discountId");
const grams$ = document.getElementById("grams");

const arr = [
	`${Juan} ETH`,
	`${Dc} ETH`,
	`${Es} ETH`,
	`${Batman} ETH`
];

//! ██████╗ ███████╗███████╗ █████╗  ██████╗████████╗ ██████╗ ██████╗ ██╗███████╗ █████╗ ███╗   ██╗██████╗  ██████╗
//! ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║╚══███╔╝██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
//! ██████╔╝█████╗  █████╗  ███████║██║        ██║   ██║   ██║██████╔╝██║  ███╔╝ ███████║██╔██╗ ██║██║  ██║██║   ██║
//! ██╔══██╗██╔══╝  ██╔══╝  ██╔══██║██║        ██║   ██║   ██║██╔══██╗██║ ███╔╝  ██╔══██║██║╚██╗██║██║  ██║██║   ██║
//! ██║  ██║███████╗██║     ██║  ██║╚██████╗   ██║   ╚██████╔╝██║  ██║██║███████╗██║  ██║██║ ╚████║██████╔╝╚██████╔╝
//! ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝

// const colecciones = {
// 	descuento: `${discountId.innerHTML = `${porcentajeDescuentoQuince} %jaja`} ETH`,
// 	get fuck() {
// 		return `${discountId.innerHTML = `${porcentajeDescuentoCuarentaiCinco} %prueba1?`} =??`;
// 	},
// 	miltrecientos: function(gram0s, ethPr1ce) {
// 		// return `${grams.innerHTML = `${porcentajeDescuentoCuarentaiCinco} %p2`} =??`;
// 		grams =  grams$.innerHTML = `${gram0s} Gr`;
// 		probando =  discountId$.innerHTML = `Envio Gratis`;
// 		console.log(probando)
// 		ethPrice$ = ethPrice.innerHTML = `${ethPr1ce}`;
// 		gram1s = '$$$$$$$';
// 		return ethPrice$, probando, grams;
// 	},
// 	// `${discountId.innerHTML = `${porcentajeDescuentoVeintiCinco} %jaja`} ETH`
// 	set Loco(parameter) {
// 		result = discountId.innerHTML = `${parameter} Money`;
// 		return  result.Object.keys;
// 	},
// }

// let fn = function (a) {
// 	ethPrice$ = ethPrice.innerHTML = `${arr[0]} wtf`;
// 	colecciones.miltrecientos(a,'$$$');
// 	colecciones.Loco = 1/0;
// 	return ethPrice$, colecciones.fuck, colecciones.loco;
// }

// function quePedo(f,a) {
// 	f(a);
// }
// $$$$$$$$$= '$$$$$$$$$$$$$$$$$$$$$4$';
// quePedo(fn(`${$$$$$$$$$}`));
// // quePedo(colecciones.fuck());
// // colecciones.miltrecientos('$$$','$$$');
//! ██████╗ ███████╗███████╗ █████╗  ██████╗████████╗ ██████╗ ██████╗ ██╗███████╗ █████╗ ███╗   ██╗██████╗  ██████╗
//! ██╔══██╗██╔════╝██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║╚══███╔╝██╔══██╗████╗  ██║██╔══██╗██╔═══██╗
//! ██████╔╝█████╗  █████╗  ███████║██║        ██║   ██║   ██║██████╔╝██║  ███╔╝ ███████║██╔██╗ ██║██║  ██║██║   ██║
//! ██╔══██╗██╔══╝  ██╔══╝  ██╔══██║██║        ██║   ██║   ██║██╔══██╗██║ ███╔╝  ██╔══██║██║╚██╗██║██║  ██║██║   ██║
//! ██║  ██║███████╗██║     ██║  ██║╚██████╗   ██║   ╚██████╔╝██║  ██║██║███████╗██║  ██║██║ ╚████║██████╔╝╚██████╔╝
//! ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝


//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬ !//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬!//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬ 							
//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │ !//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │!//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │ 							
//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o !//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o!//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o 							

function porcentaje(precioOriginal, descuento) {
	//! El precio con descuento viene dado por la formula = (Precio * (100 - Descuento) )
	const precioFinal = precioOriginal * (100 - descuento);
	return precioFinal;
}

//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬ !//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬!//!┬╔═╗╔═╗╦═╗╔═╗┬┬╔═╗╔═╗╦═╗╔═╗┬ 							
//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │ !//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │!//!│║  ║ ║╠╦╝║╣ ││║  ║ ║╠╦╝║╣ │ 							
//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o !//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o!//!o╚═╝╚═╝╩╚═╚═╝oo╚═╝╚═╝╩╚═╚═╝o 							

//todo██╗  ██╗████████╗███╗   ███╗██╗
//todo██║  ██║╚══██╔══╝████╗ ████║██║
//todo███████║   ██║   ██╔████╔██║██║
//todo██╔══██║   ██║   ██║╚██╔╝██║██║
//todo██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
//todo╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝

function resultPriceFinal0() {
	normal =  discountId$.innerHTML = `'15% Off'`;
	ethPrice$ = ethPrice.innerHTML = `${arr[0]}`;
	grams =  grams$.innerHTML = `10 Gr`;
	return ethPrice$, normal, grams;
}

function resultPriceFinal1() {
	normal =  discountId$.innerHTML = `'25% Off'`;
	ethPrice$ = ethPrice.innerHTML = `${arr[1]}`;
	grams =  grams$.innerHTML = `10 Gr`;
	return ethPrice$, normal, grams;
}

function resultPriceFinal2() {
	normal =  discountId$.innerHTML = `'35% Off'`;
	ethPrice$ = ethPrice.innerHTML = `${arr[2]}`;
	grams =  grams$.innerHTML = `10 Gr`;
	return ethPrice$, normal, grams;
}

function resultPriceFinal3() {
	normal =  discountId$.innerHTML = `'40% Off'`;
	ethPrice$ = ethPrice.innerHTML = `${arr[3]}`;
	grams =  grams$.innerHTML = `10 Gr`;
	return ethPrice$, normal, grams;
}

//! const resultF = porcentaje(newPrice, porcentajeDescuento?);
const array = [
	`${Dc*100} ETH`,
	`${Es*1000} ETH`,
	`${Batman*1000000000000} ETH`
];

function resultPriceFinalDiez() {
	normal =  discountId$.innerHTML = `'15% Off'`;
	resultPriceFinal0(), normal;
}

function resultPriceFinal30() {
	probando =  discountId$.innerHTML = `Envio Gratis`;
	grams =  grams$.innerHTML = `30 Gr`;
	ethPrice$ = ethPrice.innerHTML = `${array[0]}`;
	return ethPrice, probando, grams;
}

function resultPriceFinal400() {
	grams =  grams$.innerHTML = `400 Gr`;
	probando =  discountId$.innerHTML = `Envio Gratis`;
	ethPrice$ = ethPrice.innerHTML = `${array[1]}`;
	return ethPrice$, probando, grams;
}

function resultPriceFinalMax() {
	grams =  grams$.innerHTML = `1300 Gr`;
	probando =  discountId$.innerHTML = `Envio Gratis`;
	ethPrice$ = ethPrice.innerHTML = `${array[2]}`;
	return ethPrice$, probando, grams;
}
//todo██╗  ██╗████████╗███╗   ███╗██╗
//todo██║  ██║╚══██╔══╝████╗ ████║██║
//todo███████║   ██║   ██╔████╔██║██║
//todo██╔══██║   ██║   ██║╚██╔╝██║██║
//todo██║  ██║   ██║   ██║ ╚═╝ ██║███████╗
//todo╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝╚══════╝

//**╦═╗╔═╗╔╦╗╔═╗┌─┐┬ ┬┌┐┌┌─┐┬┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┌─┐┬┌┐┌┌┬┐┌─┐┬  ┬┌─┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
//**╠╦╝║╣  ║ ║ ║├┤ │ │││││  ││ ││││├┤ └─┐│││├─┤└─┐││││ │ ├┤ │  ││ ┬├┤ │││ │ ├┤ └─┐
//**╩╚═╚═╝ ╩ ╚═╝└  └─┘┘└┘└─┘┴└─┘┘└┘└─┘└─┘┴ ┴┴ ┴└─┘┴┘└┘ ┴ └─┘┴─┘┴└─┘└─┘┘└┘ ┴ └─┘└─┘
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById("InputCoupon");
	const priceValue = inputPrice.value;
	
	const inputCoupon = document.getElementById("InputCoupon");
	const couponValue = inputCoupon.value;

	switch(couponValue) {
		case coupons[0]: // "JuanDC_es_Batman"
		ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`${array[2]}`;
		return ethPrice$;
		break;
		case coupons[1]: // "pero_no_le_digas_a_nadie"
		descuento = 30;
		break;
		case coupons[2]: // "es_un_secreto"
		descuento = 25;
		break;
	}

}

//**╦═╗╔═╗╔╦╗╔═╗┌─┐┬ ┬┌┐┌┌─┐┬┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┌─┐┬┌┐┌┌┬┐┌─┐┬  ┬┌─┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
//**╠╦╝║╣  ║ ║ ║├┤ │ │││││  ││ ││││├┤ └─┐│││├─┤└─┐││││ │ ├┤ │  ││ ┬├┤ │││ │ ├┤ └─┐
//**╩╚═╚═╝ ╩ ╚═╝└  └─┘┘└┘└─┘┴└─┘┘└┘└─┘└─┘┴ ┴┴ ┴└─┘┴┘└┘ ┴ └─┘┴─┘┴└─┘└─┘┘└┘ ┴ └─┘└─┘