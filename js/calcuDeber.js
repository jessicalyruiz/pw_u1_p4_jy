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
    let num1='',num2='';
    let op=false;
    for(let i=0; i<operacion.length;i++){
        console.log('for operar numeros : '+i)
        if(i!='+' && i!='-'&& i!='*'&&i!='/'&&!op){
            num1+=operacion[i]
            console.log('operar numeros if: '+num1)
        }else{
                console.log('operar numeros else')
        }
    }
    //let numero1=convertir('n1');
    //let numero2=convertir('n2');
    switch(operacion){
        case 'suma':
            document.getElementById('')

    }
}

const convertir=(idcampo)=>{
    return parseFloat(document.getElementById(idcampo).value);
}

const llenar=(dato)=>{
    console.log('llenar '+dato)
    let operacion=document.getElementById('pantalla')
    operacion.value+=dato;
    console.log(operacion.value)
    return operacion.value
}