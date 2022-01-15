console.log("HolaMundo");
const lista = ["100","200","300","400","500",];

try {
    let sumaLista1 = 0;
    
    
    let list = [];
    list = lista.map( (i) => +i);
    sumaLista1 = list.reduce( (ac, i) => ac+i);
    list$ = lista.map( (lista) => Number(lista.slice(0,3)) ); //!Forma2022
    console.log(list,"Sumatoria: ", sumaLista1,"\nForma2: ", list$);


} catch (e) {
    console.error(e.stack,"\n[*]"+e.name,"\n[*]"+e.message);
}

