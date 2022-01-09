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
/* console.group('Triangulo')
function CalculaPerimetroDelTriangulo(base,altura) {
    return PerimetroDelTriangulo;
}
CalculaPerimetroDelTriangulo();
console.groupEnd('Triangulo');

 */

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

//todo Codigo del Renderizado cuadrado.
function resultCuadrado(e) {
    result = CalculaPerimetroDelCuadrado(e)
    labelResult.innerHTML = `${result} cm`; 
    labelResult2.innerHTML = `${+e*+e} cm^2`; 
}

//todo Codigo del Renderizado triangulo.
function resultTriangulo(base,altura) {
    labelResultTA.innerHTML =`${(+base * +altura)/2} cm^2`; 
}

//todo Codigo del Renderizado circulo.
function resultCirculo(Radio) {
    const PI = Math.PI;
    const Area = PI*(Radio**2);
    const Perimetro = (2*PI*Radio);
    labelResultDC.innerHTML =`${Radio*2} cm`; 
    labelResultDA.innerHTML =`${Area.toFixed(2)} cm^2`; 
    labelResultP.innerHTML =`${Perimetro.toFixed(2)} cm`; 
}