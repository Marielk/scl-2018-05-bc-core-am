

window.cipher = {
 encode: (userText, positions) => {
    let asciiValue = ""; // aca guardare los valores ascii de cada letra
    let fullTextCipher = ""; // aca guardare el texto completo cifrado
    for (let i = 0; i < userText.length; i++) { // este es un ciclo que recorre el texto ingresado
      
      asciiValue += userText[i].charCodeAt(i); // esto va sumando cada letra al valor ascii
      const newPosition = (asciiValue - 65 + positions) % 26 + 65; // esto calcula la nueva posicion assi cifrada
      alert(newPosition); // esto nos muestra la nueva poscion 
      const resultChiper= String.fromCharCode(); // esto transforma esa nueva posicion a una letra del alfabeto normal
      console.log(resultChiper); // esto nos muestra la nueva letra 
  }
 }
}





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