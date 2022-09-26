/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("formulario").addEventListener('submit', validarIntereses); 
});

function validarIntereses(evento) {
    
  evento.preventDefault();
  var capital = document.getElementById('capital').value; 
  var taza = document.getElementById('taza').value; 
  var anos = document.getElementById('anos').value; 


/*Validar Capital*/  

if(isNaN(capital) ) {
  alert("debes ingresar valores numericos ej: $100000");
  return;
}
  
if(isNaN(taza) ) {
  alert("debes ingresar la taza de interes % ");
  return;
}
  

if(isNaN(anos) ) {
  alert("debes ingresar los años a calcular ");
  return;
}
 
  this.submit();
 }
 