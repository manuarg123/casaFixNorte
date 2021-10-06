function calcularM(){
var viaticos=document.getElementById("viaticosT").innerHTML.toString();
if (viaticos==="Lo sentimos, no llegamos a su localidad"){
  var  viaticosInt=viaticos;
}else if(viaticos==="No abona viaticos"){
    var viaticosInt=0;
}else{
var viaticosInt=parseInt(viaticos);
}
var mtsAncho= document.getElementById("mtsAncho1").value;
var mtsLargo= document.getElementById("mtsLargo1").value;
var superficieP= mtsAncho*mtsLargo;
var costoP=500;
var pres_mObra=superficieP*costoP;
if(viaticosInt==="Lo sentimos, no llegamos a su localidad"){
 var total_pres=viaticosInt;   
}else{
var total_pres= viaticosInt+pres_mObra;
}
document.getElementById("superficie_p1").innerHTML='Superficie: '+ superficieP +'mts2';
document.getElementById("r_pared1").innerHTML='Mano de obra: $'+ pres_mObra;
document.getElementById("lblViaticos1").innerHTML="Viaticos: $"+ viaticos;
document.getElementById("total_p1").innerHTML='Presupuesto total: $' + total_pres;

}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


