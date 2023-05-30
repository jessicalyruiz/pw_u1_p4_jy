const sumar=(num1,num2)=>{
    return num1+num2;
}
const restar=(num1,num2)=>{
    return num1-num2;
}
const multiplicar =(num1,num2)=>{
    return num1*num2;
}
const dividir=(num1,num2)=>{
    return num1/num2;
}


const operarNumeros=()=>{
    console.log('operar numeros')
    let operacion=llenar('=');
    let num1='',num2='',simbolo='';
    let op=false;
    for(let i=0; i<operacion.length;i++){
        console.log('for operar numeros : '+i)
        if(operacion[i]!=='+' && operacion[i]!='-'&& operacion[i]!='*'&&operacion[i]!='/'&&!op){
            num1+=operacion[i]
            console.log('num1: '+num1)
        }else{
            if(op){
                if(operacion[i]=='=') break;
                num2+=operacion[i]
                console.log('num2 '+num2)
            }else{
                console.log('operar numeros else, operacion ')
                simbolo=operacion[i]
                console.log('operacion '+simbolo)
                op=true;
              }
        }
    }
    let numero1=parseFloat(num1);
    let numero2=parseFloat(num2);
    switch(simbolo){
        case '/':
            console.log('dividir')
           let r= dividir(numero1,numero2)
           console.log(r)
            document.getElementById('resultado').value=r
            break;
        case '*':
            document.getElementById('resultado').value=multiplicar(numero1,numero2)
            break;
        case '+':
            document.getElementById('resultado').value=sumar(numero1,numero2)
            break;
        case '-':
            document.getElementById('resultado').value=restar(numero1,numero2)
            break;
    }
}
/*
const convertir=(idcampo)=>{
    return parseFloat(document.getElementById(idcampo).value);
}*/

const llenar=(dato)=>{
    console.log('llenar '+dato)
    let operacion=document.getElementById('pantalla')
    operacion.value+=dato;
    console.log(operacion.value)
    return operacion.value
}




const vaciar=()=>{
    document.getElementById('pantalla').value='';
    document.getElementById('resultado').value=''
}