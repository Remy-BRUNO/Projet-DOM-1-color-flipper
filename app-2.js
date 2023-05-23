// page hex.html
const hex = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];
const btn = document.querySelector("#btn-2");
const title = document.querySelector(".title-2");
document.body.style.backgroundColor = "#F1F5F8";
title.textContent = `Couleur de l'arrière plan : #F1F5F8`;

function randomColor() {
	let colorHex = "#";
	for (let i = 0; i < 6; i++) {
		randomHex = hex[Math.floor(Math.random() * hex.length)];
		colorHex = colorHex + randomHex;
	}
	document.body.style.backgroundColor = colorHex;
	title.textContent = `Couleur de l'arrière plan : ${colorHex}`;
}

btn.addEventListener("click", randomColor);
