import { IfcAPI } from "web-ifc/web-ifc-api";
console.log( IfcAPI );
console.log("ya estamos watcheando, no?)");
console.log("que sí, coño!");
console.log("No digas tacos");
console.log("Salvo que sea necesario, piltrafillasssss");
const button=document.getElementById("Boton1");
const SelectorFichero=document.getElementById("input-element");
 button.onclick=()=>{
     SelectorFichero.click();
 }
 SelectorFichero.onchange=(changed)=>{
     console.log(changed);
 }
console.log(button);


