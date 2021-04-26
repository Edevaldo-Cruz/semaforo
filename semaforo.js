const img = document.getElementById( 'img' );
const botão = document.getElementById ( 'botao');

const luzSemaforo = ( event ) => {
    acender[event.target.id]()
}

const acender = {
    'vermelho': () => img.src= './img/vermelho.png',
    'amarelo': () => img.src= './img/amarelo.png',
    'verde': () => img.src= './img/verde.png'
}

botão.addEventListener ('click', luzSemaforo)