const sumar=(num1,num2)=>{
    return num1+num2;
}

const restar=(num1,num2)=>num1-num2;


const multiplicar=(num1,num2)=>{
    return num1*num2;
}
const dividir=(num1,num2)=>{
    return num1/num2;
}



const operarNumeros=(operacion) =>{
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

const  convertir=(idCampo) =>{
    return parseInt(document.getElementById(idCampo).value);
}


const insertarElemento=()=>{
    document.getElementById('elemento').innerHTML = '<strong>Importante</strong>';
}

const eliminarElemento=()=> {
    document.getElementById('lbleliminar').remove();
}


const conceptos=()=>{


    var variable='jessi';
    var variable2=12;


    let variable3='fjsdkf';
    let variable4=1.5;


    const variable5= 'lore';
    const variable6= 45.8;


    console.log(variable5);

    //declaracion de arrev}glos

    const diasSemanas=['lunes', 'martes', 'mier', 'juev', 'vier'];
    console.log(diasSemanas);
    console.log(diasSemanas[2]);

    //agrego elementos

    diasSemanas.push('sabado')
    console.log(diasSemanas)

    diasSemanas.pop()
    console.log(diasSemanas)

    const finde=['dimanche']

   const s= diasSemanas.concat(finde)
    console.log(s)



    diasSemanas[2]='cambiooooooooo'
    console.log(diasSemanas)
    for(const dia of s){
        console.log(dia)
    }

    //Declarar objetos 

    const persona={
        'nombre':'jessicaly',
        'apellido':'ruiz'
    }

    console.log(persona)

    const persona2={
        nombre:'jessi',
        apellido:'ruiz',
        ciudad:'quito'
    }

    console.log(persona2)

    const persona3={
        nombre:'jessi',
        apellido:'ruiz',
        ciudad:'quito',
        apodos:['ds','al'],
        vehiculo:{
            marca:'bmw',
            modelo:'coupage',
            anio:'2023'
        }
    }


    console.log(persona3)
    //cambio de una const
   // const nombre='jessi'
   // nombre='ruiz'


    const vect=['ds','al']
    //vect=['aaaaa','bbb']
    vect[0]='zzzzzz'
    console.log(vect)


//desestructuracion

        //de arreglos
        const dias=['lunedi', 'marcredi'];


        const [d1,d2]=dias

        console.log(d2)


        const [a,b]=['lunedi', 'marcredi'];

        console.log(a)


        //DE objetos 

        const personal={
            nombre:'jessi',
            apellido:'ruiz',
            ciudad:'quito',
            apodos:['ds','al'],
            vehiculo:{
                marca:'bmw',
                modelo:'coupage',
                anio:'2023'
            }
        }


        const{vehiculo, apellido}=personal

        console.log(apellido)
        console.log(vehiculo.modelo)
        console.log(vehiculo)

        const {marca}=vehiculo

        console.log(marca)
}