// começa esse carai do começo = 0
var respostas = [];

const Questions = [{
    id: 0,
    q: "Cabeça",
    a: [{ text: "cefaléia"},
        { text: "vertigem"},
        { text: "tontura"},
        { text: "traumas/deformidade face"}
    ]

},
{
    id: 1,
    q: "Olho",
    a: [{ text: "edema palpebral"},
        { text: "dor ocular", isCorrect: false },
        { text: "lacrimejamento", isCorrect: false },
        { text: "fotofobia", isCorrect: true }
    ]

},
{
    id: 2,
    q: "nariz",
    a: [{ text: "obstrução", isCorrect: false },
        { text: "rinorreia", isCorrect: false },
        { text: "epistaxe", isCorrect: true },
        { text: "prurido", isCorrect: false }
    ]

},
{
    id: 3,
    q: "ouvido",
    a: [{ text: "otalgia"},
        { text: "otorreia", isCorrect: false },
        { text: "otorragia", isCorrect: false },
        { text: "prurido", isCorrect: true }
    ]

},
{
    id: 4,
    q: "boca e garganta",
    a: [{ text: "odinofagia"},
        { text: "rouquidão", isCorrect: false },
        { text: "dislalia", isCorrect: false },
        { text: "edema", isCorrect: true }
    ]

},
{
    id: 5,
    q: " aparelho cardiorrespiratorio",
    a: [{ text: "palpitaçao"},
        { text: "sincope", isCorrect: false },
        { text: "dispneia", isCorrect: false },
        { text: "dor torácica", isCorrect: true }
    ]

},
{
    id: 6,
    q: " aparelho digestivo",
    a: [{ text: "disfagia"},
        { text: "nausea/vomitos", isCorrect: false },
        { text: "diarréia", isCorrect: false },
        { text: "eructação", isCorrect: true }
    ]

},
{
    id: 7,
    q: " aparelho genito urinario",
    a: [{ text: "disuriaa"},
        { text: "polaciuria", isCorrect: false },
        { text: "nicturia", isCorrect: false },
        { text: "incontinencia", isCorrect: true }
    ]

},
{
    id: 7,
    q: " linfo hematopoetico",
    a: [{ text: "sangramento"},
        { text: "infecções frequentes", isCorrect: false },
        { text: "mancha roxas", isCorrect: false },
        { text: "alterações cutanea", isCorrect: true }
    ]

},
{
    id: 8,
    q: " aparelho locomotor",
    a: [{ text: "espasmos"},
        { text: "claudicação intermitente", isCorrect: false },
        { text: "fraqueza", isCorrect: false },
        { text: "dores articulares", isCorrect: true }
    ]

}
//lista das opções do que colocar
]

function setquestions(id){
question.innerText = Questions[id].q;
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;
if (op1.innerText == 'nada') document.getElementById('op1').style.display = "none"; 
else document.getElementById('op1').style.display = "block"
if (op1.innerText == 'nada') document.getElementById('check1').style.display = "none"; 
else document.getElementById('check1').style.display = "block"
}
// coloca as questoes dependendo do ID
// apaga quando nao opção

var page = 0
setquestions(page)
//determina o começo = 0

function nextpage() {
    if (page < 9) [page = page + 1];
    console.log(page + ' esse é o numero da pagina');
    if (page == 9) document.getElementById('question-container').style.display = "none";
    if (page == 9) document.getElementById('nextbtn').style.display = "none";
    if (page == 9) textofinal.innerText = 'Anamnese copiada apenas use CTRL+V no prontuario   =)'
}
// adiciona uma pagina e fala no console o valor limitando o valor maximo
// tbm meche nos display. page == pagemaxima+1

let nextpagebtn = document.getElementById('nextbtn');
var checkbox1 = document.getElementById('check1');
var checkbox2 = document.getElementById('check2');
var checkbox3 = document.getElementById('check3');
var checkbox4 = document.getElementById('check4')
// transformando os botoes em variaveis em js

function getresults(){
    if (checkbox1.checked = true) respostas.push(op1.innerText);
    if (checkbox2.checked = true) respostas.push(op2.innerText);
    if (checkbox3.checked = true) respostas.push(op3.innerText);
    if (checkbox4.checked = true) respostas.push(op4.innerText)
}

nextpagebtn.addEventListener('click', function() {
    console.log('proxima pagina');
    getresults();
    nextpage();
    setquestions(page);
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    checkbox4.checked = false;
    console.log(respostas);
    navigator.clipboard.writeText(respostas);
})
// reseta checkbox, troca as resposta


//pra fazer. adicionar um if texto for "nulo" ativar a função hide no btn. 
// atalho pra clickar nos botoes com 1 2 3 4. 
// adicionar plugin live server.

