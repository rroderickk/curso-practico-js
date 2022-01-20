console.log('Boom! media.js');
const listaMediana = ["400","400","400","400","243523","100","300","400","500", "20000000"];
let mitadLista = parseInt(listaMediana.length / 2); //todo Parsear data to int parseInt()

try{
	function isParPipe(num) {
		if (num % 2 === 0) {
			const elemento1 = listaMediana[mitadLista];
			const elemento2 = listaMediana[mitadLista + 1];

			function calcularMediaAritmetica(lista) {
				let sumaLista = 0;
				sumaLista = lista.reduce(function (ac = 0, e) {
					//?acumulado,elemento
					return Number(ac) + Number(e);
				});
				const promedioLista = sumaLista / lista.length;
				return promedioLista;
			}

			const promedioEntreElemento1y2 = calcularMediaAritmetica([
				elemento1,
				elemento2,
			]);
			return promedioEntreElemento1y2;
		} else {
			let medianaValue = listaMediana[mitadLista];
			return medianaValue;
		}
	}

    //! Parte2 moda
    const lista1Count = {};
    listaMediana.map (
        function(el) {
            if (lista1Count[el]) {
                lista1Count[el] += 1;
            }
            else{
                lista1Count[el] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
            (a,b) => a[1] - b[1]
    );
    const prueb = lista1Array[lista1Array.length - 1];
    // console.log(prueb)

    // function calcularModa(valores) {
    //     const [repeticiones, moda] = valores.reduce(
    //         (acc, val) => {
    //         const nn = contar(valores, val);
    //         if (nn === acc[0] && acc[1].every((item) => item !== val)) {
    //             acc[1].push(val);
    //         } else if (nn > acc[0]) {
    //             acc = [nn, [val]];
    //         }
    //         return acc;
    //         },
    //         [0, []]
    //     );

    // return { repeticiones, moda };
    // }

    // function contar(arrayElmentos, valorAContar) {
    // return arrayElmentos.filter((elemento) => elemento === valorAContar).length;
    // }




//!╔═╗╔═╗╦═╗╔═╗
//!║  ║ ║╠╦╝║╣
//!╚═╝╚═╝╩╚═╚═╝
    function media(lista) {
        let sumaLista = 0;
        sumaLista = lista.reduce( (ac, i) => Number(ac)+Number(i) );
        const promedioLista = sumaLista / lista.length;
        console.log('La media es:',promedioLista.toFixed(2));
        return promedioLista;
    }

	function mediana(list) {
		//?todo OrdernarData
		const listaOrdenada = list.sort((a, b) => a - b);
		//!Autoejecutar function
		((e) => console.log("La mediana es:", isParPipe(e)))(listaOrdenada);
	}

    //!Callback
    const hola = (data,f) => { data.sort((a, b) => a - b); f(data) };

    function moda(arr){
        console.log("La que mas se repite", 
            [...arr].sort((a,b) =>
                arr.filter(v => v===a).length
                - arr.filter(v => v===b).length
            ).pop()
        );
    }


//!╔═╗╔═╗╦═╗╔═╗
//!║  ║ ║╠╦╝║╣
//!╚═╝╚═╝╩╚═╚═╝
    hola(listaMediana, media);
    hola(listaMediana, mediana);
    hola(listaMediana, moda);
    


//*               |    media,mediana|                  /\
//*     /\        |_________________+                 /$$\         
//*    /$$\       _                 +     /\          /||\            
    ( (list) => ((e) => hola(e, media)) (list) ) (listaMediana);
//*    \$$/       __________________^     \/          \||/                             
//*     \/        |            moda |                 \$$/                                 
//*                                                    \/




	// Ejemplo autoejecutar function
	// ( (list) => ((e) => console.log('La mediana es:',isParPipe(e))) (listaOrdenada) ) (listaOrdenada);
} catch(e) {	
    console.error(e.stack,'\n[*] '+e.name,'\n[*] '+e.message)	
};


    //    /$$\       |   
    //    /||\       _              
	// ( (list) => ((e) => hola(listaMediana, moda) ) (listaMediana) ) (listaMediana);
    //    \||/       _ 
    //    \$$/       | 
