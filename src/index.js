const userText = document.getElementById("textToCipher"). value;

const btn = document.getElementById("cipherButton");

const positions = document.getElementById("placeNumber"). value;

btn.addEventListener('click', cipher.encode);

const cipherResult = document.getElementById("cipherText"). value; 
document.getElementById("cipherText").innerHTML = cipherResult; 

/* Acá va tu código */