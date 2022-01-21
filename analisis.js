// ((e) => console.log(e)) ('Empecemos!');
try{	
  /* Utils */
  const isPar = numero => {
    numero % 2 === 0;
  }
  /* Calculadora de medianas aritmeticas */
  function calcularMediaAritmetica(lista) {
    let sumaLista = 0;
    sumaLista = lista.reduce(  (ac=0, e)=> Number(ac) + Number(e)  );   //?acumulado,elemento
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  /* Ordena el array de datos de salarios */
  const salariosCol = colombia.map( (arrSalarios)=> arrSalarios.salary);
  // console.log(salariosCol);
  
  /* Data Ordenada*/
  const salariosColSorted = salariosCol.sort( (salaryA, salaryB)=> salaryA - salaryB );
  // console.log(salariosCol);
  
  /* Mediana General */
  const medianaSalarios = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if (isPar(lista.length)) {
      const personaEnLaMitad1 = lista[mitad -1];
      const personaEnLaMitad2 = lista[mitad];
      const mediana = calcularMediaAritmetica([personaEnLaMitad1, personaEnLaMitad2]);
      return mediana;
    }
    else {
      const personaEnLaMitad = lista[mitad];
      return personaEnLaMitad;
    }
  }

  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  console.log(`Mediana de salarios en Colombia ${medianaGeneralCol} Dolares`);
  
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  /* Mediana del Top 10% */
  const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);


  const medianaSalariosTop = medianaSalarios(salariosColTop10);
  console.log(`Mediana del Top10 ${medianaSalariosTop} Dolares`);
  console.log({ salariosColTop10, medianaGeneralCol });


} catch(error) {	
  console.error(error.stack,'\n[*] '+error.name,'\n[*] '+error.message);
};