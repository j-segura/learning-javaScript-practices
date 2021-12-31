/* Contexto: eres parte de un equipo de investigación que ha encontrado un nuevo organismo misterioso en el fondo del océano cerca de las fuentes hidrotermales. Su equipo nombra al organismo Pila aequor ( P. aequor ) y descubre que solo está compuesto por 15 bases de ADN. Las pequeñas muestras de ADN y la frecuencia con la que muta debido a los respiraderos hidrotermales hacen de P. aequor un espécimen interesante para estudiar. Sin embargo, P. aequor no puede sobrevivir sobre el nivel del mar y localizar P. aequor en las profundidades del mar es difícil y costoso. Su trabajo consiste en crear objetos que simulen el ADN de P. aequor para que los estudie su equipo de investigación. */


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, dna) =>{
    return {
      specimenNum: num,
      dna: dna,
  
      mutate(){
        let random = Math.floor(Math.random() * this.dna.length);
        let diferentBase = returnRandBase();
  
        while(this.dna[random] === diferentBase){
          diferentBase = returnRandBase();
        } 
  
        this.dna[random] = diferentBase;
        return this.dna;
      },
  
      compareDNA(obj){
        let contador = 0;
  
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === obj.dna[i]){
          contador++;
          }
        }
  
        const percentage = (contador/this.dna.length)*100;
  
        return `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percentage}% DNA in common: ${contador}`
        
      },
  
      willLikelySurvive(){
        let contador = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          contador++;
          }
        }
  
        const percentage = (contador/this.dna.length)*100;
  
        if(percentage >= 60){
          return true;
        }else{
          return false;
        }
        
      },
    }
  }
  
  const ex1 = pAequorFactory(1, mockUpStrand());
  const ex2 = pAequorFactory(2, mockUpStrand());

  console.log(ex1);
  console.log(ex2);

/*   
  console.log(ex1.dna);
  console.log(ex2.dna);
  
  console.log(ex1.compareDNA(ex2));
  
  console.log(ex1.willLikelySurvive());
  
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while(survivingSpecimen.length < 30){
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if(newOrg.willLikelySurvive()){
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen); */