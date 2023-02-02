let numeroAleatorio = Math.floor(Math.random() * 200) + 1;
const tentativas = document.querySelector('.tentativas');
const ultimoResultado = document.querySelector('.ultimoResultado');
const altoOuBaixo = document.querySelector('.altoOuBaixo');
const botaoEnviarPalpite = document.querySelector('.botaoEnviarPalpite');
const campoPalpite = document.querySelector('.campoPalpite');
let contagemTentativas = 1;
let botaoReiniciar;

function checarTentativa() {
    const palpiteUsuario = Number(campoPalpite.value);
    if(contagemTentativas === 1) {
        tentativas.textContent = 'Tentativas anteriores: ';
    }

    tentativas.textContent += palpiteUsuario + ',  ';

    if(palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style = 'green';
        altoOuBaixo.textContent = '';
        acabouJogo();
    } else if (contagemTentativas === 10) {
        ultimoResultado.textContent = '!!!VOCÊ PERDEU!!!';
        altoOuBaixo.textContent = '';
        acabouJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgoundColor = 'red';

        if(palpiteUsuario < numeroAleatorio) {  
            altoOuBaixo.textContent = 'O número secreto é maior!';
        } else if (palpiteUsuario > numeroAleatorio) {
            altoOuBaixo.textContent = 'O número secreto é menor!';
        }
    }

    contagemTentativas++;
    campoPalpite.value = '';
    campoPalpite.focus();
}

botaoEnviarPalpite.addEventListener('click', checarTentativa);

function acabouJogo() {
    campoPalpite.disabled = true;
    botaoEnviarPalpite.disabled = true;
    botaoReiniciar = document.createElement('buttton');
    botaoReiniciar.textContent = 'Reinicie o jogo';
    botaoReiniciar.style.color = 'blue';
    document.body.appendChild(botaoReiniciar);
    botaoReiniciar.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemTentativas = 1;
    const reiniciarParagrafos = document.querySelectorAll('.paragrafos p');
    for(const reiniciarParagrafo of reiniciarParagrafos) {
        reiniciarParagrafo.textContent = '';
    }

    botaoReiniciar.parentNode.removeChild(botaoReiniciar);
    campoPalpite.disabled = false;
    botaoEnviarPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
    ultimoResultado.style.backgound = 'white';
    numeroAleatorio = Math.floor(Math.random() * 200) + 1;
}