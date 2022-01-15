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
// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

function onClickButtonPriceDiscount() {
	const inputPrice = document.getElementById("InputCoupon");
	const priceValue = inputPrice.value;
	
	const inputCoupon = document.getElementById("InputCoupon");
	const couponValue = inputCoupon.value;

	switch(couponValue) {
		case coupons[0]: // "JuanDC_es_Batman"
			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`${array[2]}`;
// 			return ethPrice$;
// 		break;
		case coupons[1]: // "pero_no_le_digas_a_nadie"
			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`Un Flamante Lamborghini UltimaGeneracion`;
			return ethPrice$;
		break;
		case coupons[2]: // "es_un_secreto"
			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`https://www.mdzol.com/u/fotografias/m/2020/9/25/f848x477-962473_1020276_5050.jpg`;
			return ethPrice$;
		break;
	}

}

//**╦═╗╔═╗╔╦╗╔═╗┌─┐┬ ┬┌┐┌┌─┐┬┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┌─┐┬┌┐┌┌┬┐┌─┐┬  ┬┌─┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
//**╠╦╝║╣  ║ ║ ║├┤ │ │││││  ││ ││││├┤ └─┐│││├─┤└─┐││││ │ ├┤ │  ││ ┬├┤ │││ │ ├┤ └─┐
//**╩╚═╚═╝ ╩ ╚═╝└  └─┘┘└┘└─┘┴└─┘┘└┘└─┘└─┘┴ ┴┴ ┴└─┘┴┘└┘ ┴ └─┘┴─┘┴└─┘└─┘┘└┘ ┴ └─┘└─┘
//!┌─┐┌─┐┬─┐┌┬┐╔╦╗╔═╗╔═╗
//!├─┘├─┤├┬┘ │  ║║║ ║╚═╗
//!┴  ┴ ┴┴└─ ┴ ═╩╝╚═╝╚═╝
/*
Legibilidad es la facilidad que ofrece nuestro código para entenderlo sin tropiezos cuando lo leemos. Mejorar la legibilidad es mucho más importante que reducir la cantidad de líneas de código.

Además, error-first es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).

Error first con array.includes
La función array.includes() nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array coupons):
*/

// function onClickButtonPriceDiscountPartDos() {
// 	const inputPrice = document.getElementById("InputCoupon");
// 	const priceValue = inputPrice.value;
	
// 	const inputCoupon = document.getElementById("InputCoupon");
// 	const couponValue = inputCoupon.value;

// 	if (!coupons.includes(couponValue)) {
// 		alert("El cupón " + couponValue + "no es válido");
// 	}

// // Ya que estamos usando un condicional if, podemos reescribir el resto del condicional switch, pero en este caso usaremos condicionales else if:

// 	if (!coupons.includes(couponValue)) {
// 			alert("El cupón " + couponValue + "no es válido");
// 		} else if (couponValue === "JuanDC_es_Batman") {
// 			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`${array[2]}`;
// 		} else if (couponValue === "pero_no_le_digas_a_nadie") {
// 			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`1000 Bitcoins`;
// 		} else if (couponValue === "es_un_secreto") {
// 			ethPrice$ = ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`https://www.redfin.com/CA/Los-Angeles/8201-Bellgave-Pl-90069/home/7119460`;
// 		// descuento = 25;
// 	}
// }

//!┌─┐┌─┐┬─┐┌┬┐╔╦╗╔═╗╔═╗
//!├─┘├─┤├┬┘ │  ║║║ ║╚═╗
//!┴  ┴ ┴┴└─ ┴ ═╩╝╚═╝╚═╝
//**╦═╗╔═╗╔╦╗╔═╗┌─┐┬ ┬┌┐┌┌─┐┬┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┌─┐┬┌┐┌┌┬┐┌─┐┬  ┬┌─┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
//**╠╦╝║╣  ║ ║ ║├┤ │ │││││  ││ ││││├┤ └─┐│││├─┤└─┐││││ │ ├┤ │  ││ ┬├┤ │││ │ ├┤ └─┐
//**╩╚═╚═╝ ╩ ╚═╝└  └─┘┘└┘└─┘┴└─┘┘└┘└─┘└─┘┴ ┴┴ ┴└─┘┴┘└┘ ┴ └─┘┴─┘┴└─┘└─┘┘└┘ ┴ └─┘└─┘
//todo╔═╗╔═╗╦═╗╔╦╗╔═╗╔╦╗╦═╗╔═╗╔═╗
//todo╠═╝╠═╣╠╦╝ ║ ║╣  ║ ╠╦╝║╣ ╚═╗
//todo╩  ╩ ╩╩╚═ ╩ ╚═╝ ╩ ╩╚═╚═╝╚═╝
/* //* Solución #3: arrays y condicionales mucho más inteligentes
Ya usamos uno de los muchos métodos de los arrays para aplicar error first. Pero podemos usar algunos más para simplificar aún más nuestro código.

//! Recuerda que mejorar la legibilidad no (necesariamente) significa reducir líneas de código.

Array de cupones 2.0: ahora también con los descuentos
Por ahora tenemos muy separada la lógica de nuestros cupones. Por un lado tenemos la lista de cupones, pero en otro lugar distinto definimos el descuento de cada cupón.

Vamos a cambiar eso convirtiendo nuestro array de strings en un array de objetos (con el nombre y descuento de cada cupón en el mismo lugar):
*/
const coupons = [
	{
		name: "JuanDC_es_Batman",
		ethPrice$: ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`1000 Bitcoins`,
	},
	{
		name: "pero_no_le_digas_a_nadie",
		ethPrice$: ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`100 Bitcoins`,
	},
	{
		name: "es_un_secreto",
		ethPrice$: ethPrice.innerHTML = `Felicidades Haz Ganado `+'<br/>'+`10 Bitcoins`,
	},
];
/*
Ahora la función array.includes dejó de funcionar, pero podemos reemplazarla por la función array.find() para validar si el cupón que escribió el usuario está guardado en la propiedad name de alguno de los objetos en la lista de cupones.

Vamos a crear una variable isUserCouponValueValid con una función que valide si su parámetro coupon es igual a nuestra variable userCouponValue. Y esta variable la vamos a enviar como parámetro a nuestra función array.find().

*/
// const inputPrice = document.getElementById("change").id;

// const priceValue = document.getElementById("InputCoupon").value;

const inputCoupon = document.getElementById("InputCoupon");
const couponValue = inputCoupon.value;

const userCouponValue = inputCoupon.value;


/*
¡Muy bien!

Pero fíjate que ya tenemos nuestro cupón (con nombre y descuento) disponible en la nueva variable userCoupon.
ZZZZ
Podemos aprovechar esta variable para eliminar todos nuestros condicionales else if y cambiarlos por un condicional else que nos proporcione el porcentaje de descuento automáticamente, sin importar el cupón (válido) que estén usando nuestros usuarios.
*/
function control(){
	const isCouponValueValid = function (coupons) {
		return coupons.name === couponValue;
	};

	if (!userCouponValue) {
		alert("El cupón " + couponValue + " no es válido");
	} else {
		const userCouponValue = coupons.find(couponValue);
	}
	return isCouponValueValid();
}
	
/*
De esta forma, no solo logramos reducir las líneas de código de nuestro programa, sino también mejorar su legibilidad.
¡Te espero en la siguiente clase para que iniciemos nuestro tercer taller práctico del curso! 
*/
//todo╔═╗╔═╗╦═╗╔╦╗╔═╗╔╦╗╦═╗╔═╗╔═╗
//todo╠═╝╠═╣╠╦╝ ║ ║╣  ║ ╠╦╝║╣ ╚═╗
//todo╩  ╩ ╩╩╚═ ╩ ╚═╝ ╩ ╩╚═╚═╝╚═╝
//**╦═╗╔═╗╔╦╗╔═╗┌─┐┬ ┬┌┐┌┌─┐┬┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┌─┐┬┌┐┌┌┬┐┌─┐┬  ┬┌─┐┌─┐┌┐┌┌┬┐┌─┐┌─┐
//**╠╦╝║╣  ║ ║ ║├┤ │ │││││  ││ ││││├┤ └─┐│││├─┤└─┐││││ │ ├┤ │  ││ ┬├┤ │││ │ ├┤ └─┐
//**╩╚═╚═╝ ╩ ╚═╝└  └─┘┘└┘└─┘┴└─┘┘└┘└─┘└─┘┴ ┴┴ ┴└─┘┴┘└┘ ┴ └─┘┴─┘┴└─┘└─┘┘└┘ ┴ └─┘└─┘