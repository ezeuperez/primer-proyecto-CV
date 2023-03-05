
const verMasBtn= document.getElementById("verMasBtn");
const info= document.getElementById("info");
verMasBtn.addEventListener("click", function(){
   info.classList.toggle("hidden") 
})
/*estoy intentando que al ckliquear "ver mas" me despliegue texto function mostrarElemento() {
   var elemento = document.getElementById("mi-elemento");
   if (elemento.style.display === "none") {
     elemento.style.display = "block";
   } else {
     elemento.style.display = "none";
   }
 }
 function mostrarElemento1() {
   var elemento = document.getElementById("mi-elemento1");
   if (elemento.style.display === "none") {
     elemento.style.display = "block";
   } else {
     elemento.style.display = "none";
   }
 }

