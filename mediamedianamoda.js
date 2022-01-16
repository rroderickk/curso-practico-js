console.log("$$,$$");
const lista = ["100","200","300","400","500"];

var sueldos = document.createElement('h4');
sueldos.textContent += lista;
usable.appendChild(sueldos);

try {
//! ┌┐ ┌─┐┌┬┐┌┬┐┌─┐┌┐┌
//? ├┴┐├─┤ │ │││├─┤│││
//! └─┘┴ ┴ ┴ ┴ ┴┴ ┴┘└┘
    let sumaLista1 = 0;
    
    for(let i = 0; i < lista.length; i++) {
        sumaLista1 = sumaLista1 + Number(lista[i]);
    }
    const promedioLista1 = sumaLista1/lista.length;
    
//**Chapter2  */
    usable2.innerHTML += `${promedioLista1}, Llega Bill Gates con`;

    var newUsable = document.createElement('h3')
    newUsable.innerHTML = `${20000000} de dolares en el bolsillo`;
    usable2.appendChild(newUsable);

//**Chapter3  */
    //!historia de billgates
    let listaCompleta = [...new Set(lista)];
    listaCompleta.push('20000000');

    usable4.innerHTML += `${calcularMediaAritmetica(listaCompleta)}`;

    function batman(lista) {
    let sumaLista1 = 0;
    
    for(let i = 0; i < lista.length; i++) {
        sumaLista1 = sumaLista1 + Number(lista[i]);
    }
    const promedioLista1 = sumaLista1 / lista.length;
    console.log(promedioLista1)
    return promedioLista1;
 
    } 



    
    let list = [];
    list = lista.map( (i) => +i );
    sumaLista1 = list.reduce( (ac,i) => ac+i );//!no convierte a numero usar Number()
    list$ = lista.map( (lista)=>Number(lista.slice(0,3)) ).reduce( (ac,i)=>ac+i ); //!Forma2022
    console.log(list,"Sumatoria: ", sumaLista1,"\nForma2: ", list$, "\n\n Promedio = ", list$/lista.length);


    function MediaAritmetica(lista) {
        let sumaLista = 0;
        sumaLista = lista.reduce( (ac, i) => Number(ac)+Number(i) );
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    } 

    function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
        sumaLista = lista.reduce(
            function (ac = 0, e) {                      //?acumulado,elemento
                return Number(ac) + Number(e);
            }
        );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }



} catch (e) {
    console.error(e.stack,"\n[*] "+e.name,"\n[*] "+e.message);
}