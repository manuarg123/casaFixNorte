function optPintura(){
    var optPared1=document.getElementById("pPared");
    var optMetalica1= document.getElementById("pMetalica");
    var optPintura=document.getElementById('select').options[document.getElementById('select').selectedIndex].value;
    if(optPintura==="2" ){
        optPared1.style.display="none";
        optMetalica1.style.display="block";
    }else if(optPintura==="1"){
         optMetalica1.style.display="none";
        optPared1.style.display="block";
    }else {
        optMetalica1.style.display="none";
        optPared1.style.display="none";
    }
    }



