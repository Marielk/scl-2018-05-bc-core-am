

window.cipher = {
 
  encode: (userText, positions) => {
    
    let asciiValue = []; // aca guardare los valores ascii de cada letra
    
    for (let i = 0; i < userText.length; i++) { // este es un ciclo que recorre el texto ingresado
      asciiValue.push(userText.charCodeAt(i)); // esto traduce la letra al codigo ascii y va añadiendo cada numero a asciiValue//
    }
    console.log(asciiValue); // muestra los codigos ascii de cada letra
    
    let asciiNewValue = []; // aca se guardaran las nuevas posiciones
    for ( let i = 0; i < asciiValue.length; i++) { // este ciclo recorre los codigos ascii normal
      if (asciiValue[i] >= 65 && asciiValue[i] <= 90) { //aca se valida que los numeros correspondan a letras mayusculas
        asciiNewValue.push((asciiValue[i] - 65 + positions) % 26 + 65); //si es asi se guardaran en ascii new value + el offset
      } else if (asciiValue[i] >= 91 && asciiValue[i] <= 64) { // si no es asi se guardaran en asciinewvalue - el offset
        asciiNewValue.push((asciiValue[i] - 65 - positions) % 26 + 65);
      } else {
        asciiNewValue.push(asciiNewValue[i]);// esto pasa directo los caracteres que no son letras mayusculas como espacios
      }

    }
    console.log(asciiNewValue); //aca vemos esos valores nuevos
    let resultChiper = [];//aca guardaremos las letras cifradas
    for ( let i = 0; i < asciiNewValue.length; i++) {//esto recorre los nuevos valores
      if (asciiNewValue[i] !== undefined){ // esto revisa si el valor es undefined
        resultChiper.push(String.fromCharCode(asciiNewValue[i]));  // esto lo guarda transformado a letra
       } else if (asciiNewValue[i] === undefined) { // si es undefined no le hara nada y lo pasara tal cual
         resultChiper.push(userText[i]);
       }
      }
  return resultChiper.join(""); //esto concatena las letras  
  },

  decode: (userText2, positions2) => {
    let asciiValueDecode = [];
    for (let i = 0; i < userText2.length; i++) { // este es un ciclo que recorre el texto ingresado
      asciiValueDecode.push(userText2.charCodeAt(i)); // esto traduce la letra al codigo ascii y va añadiendo cada numero a asciiValue//
    }
    console.log(asciiValueDecode); // muestra los codigos ascii de cada letra
    
    let asciiNewValueDecode = []; // aca se guardaran las nuevas posiciones
    for ( let i = 0; i < asciiValueDecode.length; i++) { // este ciclo recorre los codigos ascii normal
      if (asciiValueDecode[i] >= 65 && asciiValueDecode[i] <= 90) { //aca se valida que los numeros correspondan a letras mayusculas
        asciiNewValueDecode.push((asciiValueDecode[i] + 65 - positions2) % 26 + 65); //si es asi se guardaran en ascii new value + el offset
      } else if (asciiValueDecode[i] >= 90 && asciiValueDecode[i] <= 64) { // si no es asi se guardaran en asciinewvalue - el offset
        asciiNewValueDecode.push((asciiValueDecode[i] + 65 + positions2) % 26 + 65);
      } else {
        asciiNewValueDecode.push(asciiNewValueDecode[i]);// esto pasa directo los caracteres que no son letras mayusculas como espacios
      }

    }
    console.log(asciiNewValueDecode); //aca vemos esos valores nuevos
    let resultDecode = [];//aca guardaremos las letras cifradas
    for ( let i = 0; i < asciiNewValueDecode.length; i++) {//esto recorre los nuevos valores
      if (asciiNewValueDecode[i] !== undefined){ // esto revisa si el valor es undefined
        resultDecode.push(String.fromCharCode(asciiNewValueDecode[i]));  // esto lo guarda transformado a letra
      } else if (asciiNewValueDecode[i] === undefined) { // si es undefined no le hara nada y lo pasara tal cual
        resultDecode.push(userText2[i]);
        }
    }
    return resultDecode.join(""); //esto concatena las letras  
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