import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let perguntaAtualIndex = 0;
let historiaFinal = "";

// Inicializa o jogo
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    perguntaAtualIndex = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (perguntaAtualIndex >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[perguntaAtualIndex];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(alternativa) {
    const afirmacaoAleatoria = aleatorio(alternativa.afirmacao);
    historiaFinal += afirmacaoAleatoria + " ";

    if (alternativa.proxima !== undefined) {
        perguntaAtualIndex = alternativa.proxima;
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
    caixaResultado.classList.add("mostrar");
}

botaoJogarNovamente.addEventListener("click", iniciaJogo);

function substituiNome() {
    perguntas.forEach(pergunta => {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    });
}

substituiNome();