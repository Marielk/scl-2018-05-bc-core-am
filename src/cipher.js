

window.cipher = {
 encode: (userText, positions) => {
    let asciiValue = []; // aca guardare los valores ascii de cada letra
    
    for (let i = 0; i < userText.length; i++) { // este es un ciclo que recorre el texto ingresado
      asciiValue.push(userText.charCodeAt(i)); // esto traduce la letra al codigo ascii y va añadiendo cada numero a asciiValue//
    }
    console.log(asciiValue);
    
    let asciiNewValue = [];
    for ( let i = 0; i < asciiValue.length; i++) {
      if (asciiValue[i] >= 65 && asciiValue[i] <= 87) {
      asciiNewValue.push(asciiValue[i] + positions);
      } else if (asciiValue[i] >= 87 && asciiValue[i] <= 90) {
      asciiNewValue.push(asciiNewValue[i]-positions);
      }

    }
    console.log(asciiNewValue);
    let resultChiper = [];
    for ( let i = 0; i < asciiNewValue.length; i++) {
    resultChiper.push(String.fromCharCode(asciiNewValue[i]));
    }
    console.log(resultChiper.join(""));    
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