var n_usuario = prompt('Ingresa tu nombre:');
var localidad = confirm ('¿Es usted de Córdoba Capital? \n Ok=SI, Cancel=NO');
if (localidad==false){
    var localidad= prompt('Ingrese su localidad(Escriba solo letras respetando mayúsculas y minúsculas, como en el listado de abajo): \n\nOpciones válidas:\n\n Saldan\n La Calera\n Alta Gracia \n Carlos Paz \n Unquillo \n Mendiolaza \n Rio Ceballos\n Malagueño\n Salsipuedes \n Agua de Oro \n La Granja \n Anisacate \n Pilar \n Rio Segundo \n Arroyito \n Santa Rosa de Calamuchita \n Villa General Belgrano\n Embalse\n Despeñaderos \n Otras localidades');
    var viaticos;
    switch(localidad){
        case '1':
        case '2':
        case '3':
        case 'Mendiolaza':
        case '4':
        case '5':
            viaticos=500;
            break;
        case '6':
        case 'Pilar':
            viaticos=700;
            break;
        case 'Alta Gracia':
        case 'Carlos Paz':
        case 'Despeñaderos':
        case 'Salsipuedes':
        case 'Agua de Oro':
        case 'La Granja':
        case 'Anisacate':
            viaticos=1000;
            break;
        case 'Santa Rosa de Calamuchita':
        case 'Villa General Belgrano':
        case 'Arroyito':
        case 'Embalse':
            viaticos= 1700;
            break;
        
        default:
            viaticos="Lo sentimos, no llegamos a su localidad";
        }
    
    
    alert('En la pestaña "Presupuesto", podrá consultar los costos en viáticos para trabajos en su localidad')
}else{
    viaticos="Usted es de Córdoba capital. No debe abonar viáticos.";
}
var pintura = confirm('¿Desea un trabajo en puntura metálica? \n Ok= SI, Cancel=NO');
var presupuesto;
if (pintura== true){
    var mts_alto = prompt('Ingrese los metros de alto (Números decimales, separado con "." y sin letras): ');
    var mts_ancho = prompt('Ingrese los metros de ancho (Números decimales, separado con "." y sin letras):');
    
    var costom2;
    var superficie;
    costom2=500;
    superficie=mts_ancho*mts_alto;
    presupuesto=superficie*costom2;
    alert('En la pestaña "Presupuesto", podrá consultar el costo en mano de obra estimado de su trabajo en pintura');
}else{
    presupuesto= 'Consulte un presupuesto para otros servicios via wathsapp o redes sociales, esperamos su consulta.';
}
alert('Bienvenidx '+ n_usuario + ' Navegue por nuestro sitio para consultar por nuestros servicios');

// Código para ejecutarlo en el HTML: <script type="text/javascript" src="js/variables.js"></script>