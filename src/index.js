window.onload = () => {
	const btn = document.getElementById("cipherButton");
	btn.addEventListener("click", () => {
		const userText = document.getElementById("textToCipher"). value;
		const userTextEncode = userText.toUpperCase();
		const positions = parseInt(document.getElementById("placeNumber"). value);
		let showResult = window.cipher.encode(userTextEncode, positions);
		document.getElementById("cipherText").innerHTML = showResult; 
  });
};
/* Acá va tu código */ 

