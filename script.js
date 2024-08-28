const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Ser a pessoa mais inteligente do mundo, mas todas vez que você usufruir de sua inteligência você perderá um pouco de sua beleza",
                afirmacao: "Você deixará de ser bonito(a), mas será a mais inteligênte de todas",
            },
            {
                texto: "Ser o maior influencer do mundo, mas você perderá todas as suas amizades e familiares",
                afirmacao: " Você será muito solitário, mesmo que muito conhecido.",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: " Deixar de atropelar um cachorro, mas isso custará a vida de seus filhos",
                afirmacao: "Você perderá seus filhos mas salvará um cachorro",
            },
            {
                texto: "Acabar com o aquecimento global, mas isso custará toda a vida humana",
                afirmacao: "Os seres humanos deixaram de existir, mas o mundo será mais saudável",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Ser a pessoa mais feliz do mundo, mas jamais poderá usar nada tecnológico",
                afirmacao: "Ser feliz, mas nunca usará a tecnologia",
            },
            {
                texto: "Ter a maior empresa tecnológica do mundo, mas todos os animais serão substituídos por animais robôs",
                afirmacao: "Você tem a maior empresa do mundo, mas isso custou a vida de todos os animais",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addventListener("click",()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual ++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPerguntas();