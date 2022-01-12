/*
//? Codigo del Cuadrado.
console.group('Cuadrado');
function CalculaPerimetroDelCuadrado(l) {
    const AreaCuadrado = l*l;
    const PerimetroDelCuadrado = l*4;
    console.log(`Lado ${l} cm`+'\n'+`El perimetro es ${PerimetroDelCuadrado} cm`,"\nArea = "+`${AreaCuadrado} cm^2`);
    return PerimetroDelCuadrado;
}
CalculaPerimetroDelCuadrado(10);
console.groupEnd('Cuadrado');

//? Codigo del Triangulo Lite.
console.group('Triangulo')
function CalculaPerimetroDelTriangulo(base,altura) {
    return PerimetroDelTriangulo;
}
CalculaPerimetroDelTriangulo();
console.groupEnd('Triangulo');

//? Codigo del Circulo.
console.group('Circulo')
function CalculaPerimetroDelCirculo(Radio) {
    const PI = Math.PI;
    const DiametroDelCirculo = Radio*2;
    const AreaDelCirculo = PI*(Radio**2);
    const PerimetroDelCirculo = (2*PI*Radio);
    console.log("Diametro = "+DiametroDelCirculo+" cm\n"+"Radio = "+Radio+" cm"+'\n'+`El perimetro es ${PerimetroDelCirculo.toFixed(2)} cm`,"\nArea = "+`${AreaDelCirculo.toFixed(2)} cm^2`);
    return PerimetroDelCirculo;
}
CalculaPerimetroDelCirculo(10);
console.groupEnd('Circulo');
*/

//todo Codigo del Renderizado cuadrado.
function resultCuadrado(e) {
    labelResult.innerHTML = `${+e*4} cm`; 
    labelResult2.innerHTML = `${+e*+e} cm^2`; 
};

//todo Codigo del Renderizado triangulo lite.
function resultTriangulo(base,altura) {
    labelResultTA.innerHTML =`${(+base * +altura)/2} cm^2`; 
};
//! DEPRECATED
/* 
//todo Codigo del Renderizado triangulo isosceles.
function isosceles(l1, l2, l3) {
    if ((l1 === l2 && l1 != l3) || (l1 == l3 && l1 != l2) || (l2 == l3 && l1 != l3)){
        l1 === l2 
        ? labelResultAT.innerHTML =`${altura(l3,l1)} cm` 
        : l1 === l3 
        ? labelResultAT.innerHTML =`${altura(l2, l1)}` 
        : labelResultAT.innerHTML =`${altura(l1, l3)}`

        function resultTrianguloIsosceles(l1,l2,l3) {
            let ab = l1-l2;
            let ac = l1-l3;
            let $Isosceles = ab === ac ? true : false;
            labelResultI.innerHTML =`${$Isosceles}`; 
        }
        

        function altura(base, lado) {
            console.log({base, lado});
            let altura = Math.sqrt(Math.pow(base/2,2) + Math.pow(lado,2));
            console.log(altura.toFixed(2));
            return altura.toFixed(2);
        }
        return resultTrianguloIsosceles(l1,l2,l3);
    };
};
 */
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        labelResultI.innerHTML =`${false}`; 
        console.error("Los lados a y b no son iguales");
    } else {
        labelResultI.innerHTML =`${true}`; 
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return labelResultAT.innerHTML =`${(trianguloGrandeAltura).toFixed(2)} cm` 
    }
}

//todo Codigo del Renderizado circulo.
function resultCirculo(Radio) {
    const PI = Math.PI;
    const Area = PI*(Radio**2);
    const Perimetro = (2*PI*Radio);
    labelResultDC.innerHTML =`${Radio*2} cm`; 
    labelResultDA.innerHTML =`${Area.toFixed(2)} cm^2`; 
    labelResultP.innerHTML =`${Perimetro.toFixed(2)} cm`; 
};

//! ┌─┐┌─┐┬─┐┌─┐┌─┐┌┐┌┌┬┐
//! ├─┘├┤ ├┬┘│  ├┤ │││ │
//! ┴  └─┘┴└─└─┘└─┘┘└┘ ┴
//! Codigo del Renderizado del precio final.
function resultPriceOffert(precioOriginal, descuentoPorciento) {
    //? El precio con descuento viene dado por la formula = (Precio * (100 - Descuento) )
    const oferta = 100 - descuentoPorciento;
    const precioConDescuento = (precioOriginal * oferta) / 100;

    return labelResultPriceFinal.innerHTML =`${precioConDescuento} $$$$`; 
    // labelResultX.innerHTML =`${.toFixed(2)} cm^2`; 
    // labelResultX.innerHTML =`${.toFixed(2)} cm`; 
};

//?╔═╗ ┬┌─┐┌┬┐┌─┐┬  ┌─┐  ┌┬┐┌─┐┌─┐┌─┐┬ ┬┌─┐┌┐┌┌┬┐┌─┐
//?║╣  │├┤ │││├─┘│  │ │   ││├┤ └─┐│  │ │├┤ │││ │ │ │
//?╚═╝└┘└─┘┴ ┴┴  ┴─┘└─┘  ─┴┘└─┘└─┘└─┘└─┘└─┘┘└┘ ┴ └─┘
//? const precioOriginal = 120;
//? const descuentoPorciento = 18;
//? //* El precio con descuento viene dado por la formula = (Precio * (100 - Descuento) )
//? const oferta = 100 - descuentoPorciento;
//? const precioConDescuento = (precioOriginal * oferta) / 100;

//! ╦  ╔═╗╔═╗  ┌─┐┌┐  ┬┌─┐┌─┐┌┬┐
//! ║  ║ ║║ ╦  │ │├┴┐ │├┤ │   │
//! ╩═╝╚═╝╚═╝  └─┘└─┘└┘└─┘└─┘ ┴
//! console.log({
//!     precioOriginal,
//!     descuentoPorciento,
//!     oferta,
//!     porcentaje,
//! });