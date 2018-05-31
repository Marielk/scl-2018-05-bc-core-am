window.onload = () => {
    const btn2 = document.getElementById("decode-button");
	btn2.addEventListener("click", () => {
		const userText2 = document.getElementById("textToDecode"). value;
		const userTextDecode = userText2.toUpperCase();
		const positions2 = parseInt(document.getElementById("placeNumber2"). value);
		let showResult2 = window.cipher.decode(userTextDecode, positions2);
		document.getElementById("decodeText").innerHTML = showResult2;
		});
}