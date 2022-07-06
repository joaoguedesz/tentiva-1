var somakatz = 0
var id = 0

const katz = [{
    id: 0,
    q: "tomar banho",
    a: [{ text: "não recebe ajuda", value: 0},
        { text: "recebe ajuda para lavar apenas uma parte do corpo", value:0},
        { text: "recebe ajuda para lavar mais de uma parte do corpo", value:1},
    ]

},
{
    id: 1,
    q: "vestir-se",
    a: [{ text: "Pega roupas e veste-se sem ajuda", value:0},
        { text: "precisa de ajuda apenas para amarrar sapato", value:0},
        { text: "precisa de ajuda para se vestir", value:1},
    ]

},
{
    id: 2,
    q: "uso do vaso sanitário",
    a: [{ text: "consegue ir ao banheiro, se limpar e ajeitar roupas", value:0},
        { text: "dependencia para ir ao banheiro ou se limpar ou ajeitar roupas", value:1},
        { text: "precisa de ajuda para se vestir", value:1},
    ]

},
{
    id: 3,
    q: "transferencia",
    a: [{ text: "deita e sai da cama/cadeira sem ajuda", value:0},
        { text: "precisa de ajudar para deitar levantar da cama/cadeira", value:1},
        { text: "não sai da cama", value:1},
    ]

},
{
    id: 4,
    q: "continencia",
    a: [{ text: "controla micção e evacuação", value:0},
        { text: "aperdas ocasionais do controle", value:1},
        { text: "incotinencia ou cateter, precisa de ajuda para controlar", value:1},
    ]

},
{
    id: 5,
    q: "alimentação",
    a: [{ text: "alimenta-se sem ajuda", value:0},
        { text: "alimenta-se sozinho mas recebe ajuda para cortar carne", value:0},
        { text: "precisa de ajuda para se alimentar ou uso de cateteres para alimentação", value:1},
    ]

}
]

const lawton = [{
    id: 0,
    q: "tomar banho",
    a: [{ text: "não recebe ajuda", value: 0},
        { text: "recebe ajuda para lavar apenas uma parte do corpo", value:0},
        { text: "recebe ajuda para lavar mais de uma parte do corpo", value:1},
    ]

},
{
    id: 1,
    q: "vestir-se",
    a: [{ text: "Pega roupas e veste-se sem ajuda", value:0},
        { text: "precisa de ajuda apenas para amarrar sapato", value:0},
        { text: "precisa de ajuda para se vestir", value:1},
    ]

}]

let nextpagebtn = document.getElementById('nextbtn');
var checkbox1 = document.getElementById('check1');
var checkbox2 = document.getElementById('check2');
var checkbox3 = document.getElementById('check3');

var resultadokatz = []
function analisekatz(somakatz) {
    if (somakatz == 0) resultadokatz = "INDEPENDENTE para todas as atividades"
    if (somakatz == 1) resultadokatz = "Dependente para UMA atividades"
    if (somakatz == 2) resultadokatz = "Dependente para DUAS atividades"
    if (somakatz == 3) resultadokatz = "Dependente para TRÊS atividades"
    if (somakatz == 4) resultadokatz = "Dependente para QUATRO atividades"
    if (somakatz == 5) resultadokatz = "Dependente para CINCO atividades"
    if (somakatz == 6) resultadokatz = "Dependente para TODAS as atividades"
}

function setquestions(id){
   if (id<= 5) {
    question.innerText = katz[id].q;
    op1.innerText = katz[id].a[0].text;
    op2.innerText = katz[id].a[1].text;
    op3.innerText = katz[id].a[2].text}
    if (id >= 6) {
        question.innerText = katz[id].q;
        op1.innerText = katz[id].a[0].text;
        op2.innerText = katz[id].a[1].text;
        op3.innerText = katz[id].a[2].text}
}



setquestions(id)
function nextpage() { 
    if (id < 7) [id = id + 1];
    if (id == 5) analisekatz()
};

function checkradio(bota) {
    document.getElementById(bota).checked = !document.getElementById(bota).checked
}
var valorparaadicionar = 0

function somarkatz(id) {
    if (checkbox1.checked == true) somakatz = somakatz + katz[id].a[0].value;
    if (checkbox2.checked == true) somakatz = somakatz + katz[id].a[1].value;
    if (checkbox3.checked == true) somakatz = somakatz + katz[id].a[2].value;
    console.log (somakatz)
}

nextpagebtn.addEventListener('click', function() {
    if (checkbox1.checked == true || checkbox2.checked == true ||checkbox3.checked == true) nextpage();
    setquestions(id);
    if (id <= 5) somarkatz(id - 1)
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
// o id - 1 é para somar com o id da questou que foi respondido e nao da proxima questao
// || significa ou. entao tem que atender a uma das condições

})

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key == "Enter") [
        getresults(),
        nextpage(),
        setquestions(id),
        checkbox1.checked = false,
        checkbox2.checked = false,
        checkbox3.checked = false,]
   if (event.key == "1") document.getElementById('check1').checked = !document.getElementById('check1').checked
   if (event.key == "2") document.getElementById('check2').checked = !document.getElementById('check2').checked
   if (event.key == "3") document.getElementById('check3').checked = !document.getElementById('check3').checked
    });
 
