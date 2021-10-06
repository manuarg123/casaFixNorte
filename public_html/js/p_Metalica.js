function pMetalica(){
    var optLocalidad=document.getElementById('selectLoc').options[document.getElementById('selectLoc').selectedIndex].value;
    var viaticos;
    
    switch(optLocalidad){
        case '1':
        case '2':
        case '3':
        case '20':
        case '4':
        case '5':
            viaticos=500;
             document.getElementById("viaticosT").innerHTML = viaticos;
            break;
        case '6':
        case '7':
            viaticos=700;
            break;
        case '8':
        case '9':
        case '10':
        case '11':
        case '12':
        case '13':
        case '14':
            viaticos=1000;
            document.getElementById("viaticosT").innerHTML = viaticos;
            break;
        case '15':
        case '16':
        case '17':
        case '18':
            viaticos= 1700;
            document.getElementById("viaticosT").innerHTML = viaticos;
            break;
        case '19':
            viaticos=0;
            document.getElementById("viaticosT").innerHTML = "No abona viaticos";
            break;
        case '21':
            viaticos=0;
            document.getElementById("viaticosT").innerHTML = "Lo sentimos, no llegamos a su localidad";
        }
       
}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


