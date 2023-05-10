const display = document.getElementsByTagName('INPUT')[0];

let operador1 = 0;
let operador = null;


const operar = () => {
    if(operador1 == 0){ alert('ingrese el primer valor para operar'); return; }
    switch(operador){
        case '+':
            display.value = `${operador1 + Number(display.value)}`;
        break;
        case '*':
            display.value = `${operador1 * Number(display.value)}`;
        break;
        case '/':
            display.value = `${operador1 / Number(display.value)}`;
        break;
        case '-':
            display.value = `${operador1 - Number(display.value)}`;
        break;
    }
};

const definirOperacion =() => {
    document.getElementById('btnsuma').addEventListener('click',()=> {
        asignarOperacion('+');
    });
    document.getElementById('btnresta').addEventListener('click',()=> {
        asignarOperacion('-');
    });
    document.getElementById('btnmultiplicacion').addEventListener('click',()=> {
        asignarOperacion('*');
    });
    document.getElementById('btndividir').addEventListener('click',()=> {
        asignarOperacion('/');
    });

    document.getElementById('btnigual').addEventListener('click', operar);
};

const asignarOperacion = (valor) => {
    if(display.value.trim().length === 0) {
        alert('No hay valores a operar'); return;
    }
    operador = valor;
    operador1 = Number(display.value);
    display.value = '';
};



addEvents();
definirOperacion();






function addEvents() {
    document.getElementById('btn1').addEventListener('click',()=> {
        display.value = `${display.value}${1}`;
    });

    document.getElementById('btn2').addEventListener('click',()=> {
        display.value = `${display.value}${2}`;
    });

    document.getElementById('btn3').addEventListener('click',()=> {
        display.value = `${display.value}${3}`;
    });

    document.getElementById('btn4').addEventListener('click',()=> {
        display.value = `${display.value}${4}`;
    });

    document.getElementById('btn5').addEventListener('click',()=> {
        display.value = `${display.value}${5}`;
    });
    document.getElementById('btn6').addEventListener('click',()=> {
        display.value = `${display.value}${6}`;
    });
    document.getElementById('btn7').addEventListener('click',()=> {
        display.value = `${display.value}${7}`;
    });
    document.getElementById('btn8').addEventListener('click',()=> {
        display.value = `${display.value}${8}`;
    });    
    document.getElementById('btn9').addEventListener('click',()=> {
        display.value = `${display.value}${9}`;
    });
    document.getElementById('btn0').addEventListener('click',()=> {
        display.value = `${display.value}${0}`;
    });
    document.getElementById('btnpunto').addEventListener('click',()=> {
        display.value= `${display.value}.`        
    });

    document.getElementById('btnlimpiar').addEventListener('click',()=> {
        display.value= '';
        operador1 = 0;        
        operador = null;
    });
    
}

