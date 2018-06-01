window.cipher = {
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