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
        { text: "dor ocular",},
        { text: "lacrimejamento"},
        { text: "fotofobia"}
    ]

},
{
    id: 2,
    q: "nariz",
    a: [{ text: "obstrução"},
        { text: "rinorreia"},
        { text: "epistaxe"},
        { text: "prurido"}
    ]

},
{
    id: 3,
    q: "ouvido",
    a: [{ text: "otalgia"},
        { text: "otorreia"},
        { text: "otorragia"},
        { text: "prurido"}
    ]

},
{
    id: 4,
    q: "boca e garganta",
    a: [{ text: "odinofagia"},
        { text: "rouquidão"},
        { text: "dislalia" },
        { text: "edema" }
    ]

},
{
    id: 5,
    q: " aparelho cardiorrespiratorio",
    a: [{ text: "palpitaçao"},
        { text: "sincope" },
        { text: "dispneia"},
        { text: "dor torácica"}
    ]

},
{
    id: 6,
    q: " aparelho digestivo",
    a: [{ text: "disfagia"},
        { text: "nausea/vomitos"},
        { text: "diarréia"},
        { text: "eructação"}
    ]

},
{
    id: 7,
    q: " aparelho genito urinario",
    a: [{ text: "disuriaa"},
        { text: "polaciuria"},
        { text: "nicturia"},
        { text: "incontinencia" }
    ]

},
{
    id: 7,
    q: " linfo hematopoetico",
    a: [{ text: "sangramento"},
        { text: "infecções frequentes"},
        { text: "mancha roxas" },
        { text: "alterações cutanea"}
    ]

},
{
    id: 8,
    q: " aparelho locomotor",
    a: [{ text: "espasmos"},
        { text: "claudicação intermitente"},
        { text: "fraqueza"},
        { text: "dores articulares"}
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
    if (checkbox1.checked == true) respostas.push(op1.innerText);
    if (checkbox2.checked == true) respostas.push(op2.innerText);
    if (checkbox3.checked == true) respostas.push(op3.innerText);
    if (checkbox4.checked == true) respostas.push(op4.innerText)
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
    navigator.clipboard.writeText(respostas)
})
// reseta checkbox, troca as resposta


// atalho pra clickar nos botoes com 1 2 3 4. 
// adicionar plugin live server.

function checkar(id) { 
    document.getElementById(id).checked = !document.getElementById(id).checked}
    // pega o id e pega o estado de check e altera para o inverso com "!"