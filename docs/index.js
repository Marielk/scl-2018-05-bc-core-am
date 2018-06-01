window.onload = () => {
	const btn = document.getElementById("cipherButton");
	btn.addEventListener("click", () => {
		const userText = document.getElementById("textToCipher"). value;
		const userTextEncode = userText.toUpperCase();
		const positions = parseInt(document.getElementById("placeNumber"). value);
		let showResult = window.cipher.encode(userTextEncode, positions);
		document.getElementById("cipherText").innerHTML = showResult; 
	});
	const btn2 = document.getElementById("decode-button");
	btn2.addEventListener("click", () => {
		const userText2 = document.getElementById("textToDecode"). value;
		const userTextDecode = userText2.toUpperCase();
		const positions2 = parseInt(document.getElementById("placeNumber2"). value);
		let showResult2 = window.cipher.decode(userTextDecode, positions2);
		document.getElementById("decodeText").innerHTML = showResult2;
		});
};
/* Acá va tu código */ 

