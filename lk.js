var somakatz = 0
var somalawton = 0
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
    id: 6,
    q: "O(a) Sr(a) consegue usar o telefone?",
    a: [{ text: "Sem ajuda", value: 3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 7,
    q: "O(a) Sr(a) consegue ir a locais distantes, usando algum transporte,sem necessidade de planejamentos especiais?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 8,
    q: "O(a) Sr(a) consegue fazer compras?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 9,
    q: "O(a) Sr(a) consegue preparar suas próprias refeições?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 10,
    q: "O(a) Sr(a) consegue arrumar a casa?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 11,
    q: "O(a) Sr(a) consegue fazer trabalhos manuais domésticos, como pequenos reparos?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 12,
    q: "O(a) Sr(a) consegue lavar e passar sua roupa?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 13,
    q: "O(a) Sr(a) consegue tomar seus remédios na dose e horários corretos?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

},
{
    id: 14,
    q: "O(a) Sr(a) consegue cuidar de suas finanças?",
    a: [{ text: "Sem ajuda", value:3},
        { text: "Com ajuda parcial", value:2},
        { text: "Não consegue", value:1},
    ]

}
]

let nextpagebtn = document.getElementById('nextbtn');
var checkbox1 = document.getElementById('check1');
var checkbox2 = document.getElementById('check2');
var checkbox3 = document.getElementById('check3');

var resultadokatz = []
var resultadolawton = []

function analisekatz(somakatz) {
    if (somakatz == 0) resultadokatz = "independente para todas as atividades";
    if (somakatz == 1) resultadokatz = "Dependente para UMA atividades";
    if (somakatz == 2) resultadokatz = "Dependente para DUAS atividades";
    if (somakatz == 3) resultadokatz ="Dependente para TRÊS atividades";
    if (somakatz == 4) resultadokatz = "Dependente para QUATRO atividades";
    if (somakatz == 5) resultadokatz = "Dependente para CINCO atividades";
    if (somakatz == 6) resultadokatz = "Dependente para TODAS as atividades";
    console.log("o katz deu" + resultadokatz)
}

function analiselawton(somalawton){
    if (somalawton <= 9) {resultadolawton = "totalmente dependente"};
    if (somalawton > 9 && somalawton <=15) {resultadolawton =  "dependência grave"}
    if (somalawton > 15 && somalawton <=20) {resultadolawton =  "dependência moderada"};
    if (somalawton > 20 && somalawton <=25) {resultadolawton =  "dependência leve"};
    if (somalawton > 25 && somalawton <=27)  {resultadolawton=  "independente"};
    console.log(resultadolawton)
}

function setquestions(id){
if (id < 6) {
    question.innerText = katz[id].q;
    op1.innerText = katz[id].a[0].text;
    op2.innerText = katz[id].a[1].text;
    op3.innerText = katz[id].a[2].text}
else {
    question.innerText = lawton[id - 6].q;
    op1.innerText = lawton[id - 6].a[0].text;
    op2.innerText = lawton[id - 6].a[1].text;
    op3.innerText = lawton[id - 6].a[2].text};
console.log("o id é"+ id )
}
// tive que colocar -6 pq a lista nao entende que nao pode começar de um numero qualquer


setquestions(0)

function nextpage() { 
    if (id < 15) [id = id + 1];
    if (id == 6) analisekatz(somakatz)
    if (id == 15) analiselawton(somalawton)
    if (id == 15) document.getElementById('question-container').style.display = "none";
    if (id == 15) document.getElementById('nextbtn').style.display = "none";
    if (id == 15) textofinal.innerText = "KATZ: " + resultadokatz +"   LAWTON: " +resultadolawton
    if (id == 15) navigator.clipboard.writeText("KATZ: " + resultadokatz +"   LAWTON: " +resultadolawton)
};

function checkradio(bota) {
    document.getElementById(bota).checked = !document.getElementById(bota).checked
}

function somarkatz(id) {
    if (checkbox1.checked == true) somakatz = somakatz + katz[id].a[0].value;
    if (checkbox2.checked == true) somakatz = somakatz + katz[id].a[1].value;
    if (checkbox3.checked == true) somakatz = somakatz + katz[id].a[2].value;
    console.log ('katz é'+ somakatz)
}

function somarlawton(id) {
    if (checkbox1.checked == true) somalawton = somalawton + lawton[id -6].a[0].value;
    if (checkbox2.checked == true) somalawton = somalawton + lawton[id -6].a[1].value;
    if (checkbox3.checked == true) somalawton = somalawton + lawton[id -6].a[2].value;
    console.log ('lawton é' + somalawton)
}

nextpagebtn.addEventListener('click', function() {
    if (id <= 5) somarkatz(id);
    if (id > 5) somarlawton(id);
    if (checkbox1.checked == true || checkbox2.checked == true ||checkbox3.checked == true)
    nextpage();
    setquestions(id);
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
// o id - 1 é para somar com o id da questou que foi respondido e nao da proxima questao
// || significa ou. entao tem que atender a uma das condições

})

document.addEventListener("keydown", function(event) {
    console.log(event.key);
    if (event.key == "Enter") [
        nextpage(),
        setquestions(id),
        checkbox1.checked = false,
        checkbox2.checked = false,
        checkbox3.checked = false,]
   if (event.key == "1") document.getElementById('check1').checked = !document.getElementById('check1').checked
   if (event.key == "2") document.getElementById('check2').checked = !document.getElementById('check2').checked
   if (event.key == "3") document.getElementById('check3').checked = !document.getElementById('check3').checked
    });
 
