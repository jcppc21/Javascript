"use strict";

const zero = n => {
	if (n.toString().length < 2) {
		return "0".concat(n);
	} 

	return n;
	
}

const actualizarHora = ()=>{
	
	const time = new Date();

	let horas = zero(time.getHours());
	let minutos = zero(time.getMinutes());
	let segundos = zero(time.getSeconds());
	document.querySelector(".hora").textContent = horas;
	document.querySelector('.min').textContent = minutos;
	document.querySelector('.seg').textContent = segundos;
}

actualizarHora();

setInterval(actualizarHora, 1000);

