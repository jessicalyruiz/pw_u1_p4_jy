function sumar(num1, num2) {
    return num1 + num2;
}



function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}


function dividir(num1, num2) {
    return num1 / num2;
}

function operarNumeros(operacion) {
    var numero1 = convertir('n1');
    var numero2 = convertir('n2');
    switch (operacion) {
        case 'suma':

            document.getElementById('lblresult').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
            break;
        case 'restar':

            document.getElementById('lblresult').innerHTML = 'Resultado: ' + restar(numero1, numero2);
            break;
        case 'multiplicar':

            document.getElementById('lblresult').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
            break;
        case 'dividir':
            if(numero2!=0){
            document.getElementById('lblresult').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
            }else  document.getElementById('lblresult').innerHTML = 'Resultado: infinito'
            break;
    }
}

function convertir(idCampo) {
    return parseInt(document.getElementById(idCampo).value);
}


function eliminarElemento() {
    document.getElementById('lbleliminar').remove();
}

function insertarElemento() {
    console.log('insertando');
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';
}