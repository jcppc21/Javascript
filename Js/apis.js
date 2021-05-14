'use strict';

/*Date

const fecha =  new Date(100000);

console.log(fecha.getYear()+1900);
console.log(fecha.getMonth());
console.log(fecha.getSeconds());	

*/

// LocalStorage y SessionStorage


//Drag & Drop


const circulos = document.querySelector('.circulo');
const rectagunlo = document.querySelector(".cuadrado");

circulos.addEventListener("dragstart",() =>{
	console.log(1)
});

circulos.addEventListener("drag",()=> {
	console.log(2)
});

circulos.addEventListener("dragend",()=> {
	console.log(3)
});



/*
rectagunlo.addEventListener("dragenter",()=>{
	console.log(1)
});

rectagunlo.addEventListener("dragover",()=> {
	console.log(2)
});

rectagunlo.addEventListener("drop",()=> {
	console.log(3)
});

rectagunlo.addEventListener("dragleave",()=> {
	console.log(4)
});	*/