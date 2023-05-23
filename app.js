// page index.html
const colors = ["GREEN", "RED", "RGBA(133,122,200)", "#F15025"];

const btn = document.querySelector("#btn-1");
const title = document.querySelector(".title-1");
document.body.style.backgroundColor = colors[0];
title.textContent = `Couleur de l'arrière plan : ${colors[0]}`;

// couleur aleatoir a partir du tableau
function colorChange() {
	const index = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[index];
	title.textContent = `Couleur de l'arrière plan : ${colors[index]}`;
}
btn.addEventListener("click", colorChange);
