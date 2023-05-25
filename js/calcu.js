function sumar(num1,num2){
    return num1+num2;
}



function restar(num1,num2){
    return num1-num2;
}

function multiplicar(num1,num2){
    return num1+num2;
}


function dividir(num1,num2){
    return num1-num2;
}

function operarNumeros(operacion){
var numero1=convertir('n1');
var numero2=convertir('n2');
switch(operacion){
    case 'suma':

            document.getElementById('lblresult').innerHTML='Resultado: ' +sumar(numero1,numero2);
            break;
}
}

function convertir(idCampo){
    return parseInt(document.getElementById(idCampo).value);
   }


   function eliminarElemento(){
    document.getElementById('lbleliminar').remove();
   }

   function insertarElemento(){
    document.getElementById('element').innerHTML="<strong>Importante</strong>";
   }