function openForm2(){
    let optForm1=document.getElementById("form1");
    let optForm2=document.getElementById("form2");
   let selPress=document.getElementById("sel_pres");
    let imputNombreF1=document.getElementById("imputNombre").value;
    let selectLocalidad=document.getElementById("selectLoc").options[document.getElementById('selectLoc').selectedIndex].value;;
    let optRegresar=document.getElementById("boton2");
    optForm1.style.display="none";
    optForm2.style.display="block";
    selPress.style.display="block";
    optRegresar.style.display="block";
    
    if(selectLocalidad==21){
        document.getElementById("lblForm2").innerHTML ="Estimadx "+ imputNombreF1+", porfavor, seleccione una localidad de la lista o la más cercana en un radio de 30km. En caso de que no haya ninguna, lamentamos informarle que no llegamos a su localidad.";
        selPress.style.display="none";
      
    }else{
    document.getElementById("lblForm2").innerHTML = "Estimadx "+ imputNombreF1+", seleccione el servicio a presupuestar:";
    optRegresar.style.display="none";
    }
    
    
}