

window.cipher = {
 encode: (userText, positions) => {
    
    let asciiValue = []; // aca guardare los valores ascii de cada letra
    
    for (let i = 0; i < userText.length; i++) { // este es un ciclo que recorre el texto ingresado
      asciiValue.push(userText.charCodeAt(i)); // esto traduce la letra al codigo ascii y va añadiendo cada numero a asciiValue//
    }
    console.log(asciiValue); // muestra los codigos ascii de cada letra
    
    let asciiNewValue = []; // aca se guardaran las nuevas posiciones
    for ( let i = 0; i < asciiValue.length; i++) { // este ciclo recorre los codigos ascii normal
      if (asciiValue[i] >= 65 && asciiValue[i] <= 87) { //aca se valida que los numeros correspondan a letras mayusculas
      asciiNewValue.push(asciiValue[i] + positions); //si es asi se guardaran en ascii new value + el offset
      } else if (asciiValue[i] >= 87 && asciiValue[i] <= 90) { // si no es asi se guardaran en asciinewvalue - el offset
      asciiNewValue.push(asciiNewValue[i]-positions);
      } else {
        asciiNewValue.push(asciiNewValue[i]);// esto pasa directo los caracteres que no son letras mayusculas como espacios
      }

    }
    console.log(asciiNewValue); //aca vemos esos valores nuevos
    let resultChiper = [];//aca guardaremos las letras cifradas
    for ( let i = 0; i < asciiNewValue.length; i++) {//esto recorre los nuevos valores
      if (asciiNewValue[i] !== undefined){
        resultChiper.push(String.fromCharCode(asciiNewValue[i]));  
       } else if (asciiNewValue[i] === undefined) { 
         resultChiper.push(userText[i]);
       }
      }
  return resultChiper.join(""); //esto concatena las letras  
 }
}

 
/*
let asciiNewValue = [];
    let resultChiper = [];// aca guardare cada letra cifrada
    for (let i = 0; i ; i++) {
    function newPosition() { asciiNewValue.push(asciiValue - 65 + positions) % 26 + 65; }  // esto calcula la nueva posicion assi cifrada//
      alert(asciiNewValue); // esto nos muestra la nueva poscion 
      resultChiper += String.fromCharCode(asciiNewValue); // esto transforma esa nueva posicion a una letra del alfabeto normal y la guarda en resultcipher
      return(resultChiper); */

/* 

window.cipher = {
  encode: (userText, positions) => {
     
    } 
  }
    /* Acá va tu código 
  },
  decode: () => {
    /* Acá va tu código 
  }
} 
console.log((str.charCodeAt(i) - 65 + offset) % 26 +65); */
/* const str = "HOLA ESTE ES UN STRING"; 
let result = "";
for = (let i = 0; i <str.length; i++){
           i= indice o posicion dentro de la palabra           posicion dentro de la palabra contenida en la variable
  console.log('Esta es la iteracion numero: ' +i+ ', letra: ' +str[i]);
  result += str[i].toLowerCase();
  console.log('El nuevo string: '+result);
}

const asciiValue = userText.charCodeAt(i);
     console.log(asciiValue);
     const resultChiper = (asciiValue - 65 + positions) % 26 + 65; */