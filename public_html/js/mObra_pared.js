function calcularP(){
var viaticos=document.getElementById("viaticosT").innerHTML.toString();
if (viaticos==="Lo sentimos, no llegamos a su localidad"){
  var  viaticosInt=viaticos;
}else if(viaticos==="No abona viaticos"){
    var viaticosInt=0;
}else{
var viaticosInt=parseInt(viaticos);
}
var mtsAncho= document.getElementById("mtsAncho").value;
var mtsLargo= document.getElementById("mtsLargo").value;
var superficieP= mtsAncho*mtsLargo;
var costoP=400;
var pres_mObra=superficieP*costoP;
if(viaticosInt==="Lo sentimos, no llegamos a su localidad"){
 var total_pres=viaticosInt;   
}else{
var total_pres= viaticosInt+pres_mObra;
}
document.getElementById("superficie_p").innerHTML='Superficie: '+ superficieP +'mts2';
document.getElementById("r_pared").innerHTML='Mano de obra: $'+ pres_mObra;
document.getElementById("lblViaticos").innerHTML="Viaticos: $"+ viaticos;
document.getElementById("total_p").innerHTML='Presupuesto total: ' + total_pres;

}

