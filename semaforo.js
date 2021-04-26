const img = document.getElementById( 'img' );
const botão = document.getElementById ( 'botao');
let corIndex = 0;  
let intervalo = null;

const luzSemaforo = ( event ) => {
    acender[event.target.id]()
};

const luzes = ['vermelho','amarelo','verde'];

/*const proximoIndex */

const trocaCor = () => {
    const cor = luzes [corIndex];
    acender[cor]();
    proximoIndex();
}

const proximoIndex = () => {
    if (corIndex < 2) {
        corIndex++
    } else {
        corIndex = 0
    }
}

const parar = () =>
    clearInterval ()

const acender = {
    'vermelho':     () => img.src= './img/vermelho.png',
    'amarelo':      () => img.src= './img/amarelo.png',
    'verde':        () => img.src= './img/verde.png',
    'automatico':   () => intervalo = setInterval (trocaCor, 3000)
}

botão.addEventListener ('click', luzSemaforo)