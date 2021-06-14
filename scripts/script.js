// Carne - 400g por pessoa | + de 6 horas  - 650g
// Cerveja - 1200ml por pessoa | + de 6 horas - 2000ml
// Refrigerante/Água - 1000ml por pessoa | + de 6 horas - 1500ml

// Crianças valem por 0,5

let adultosInput = document.getElementById("adultos");
let criancasInput = document.getElementById("criancas");
let duracaoInput = document.getElementById("duracao");

let resultado = document.getElementById("result");
let copyButton = document.getElementById("copyButton");

function calcular() {
  let adultosTotal = adultosInput.value;
  let criacasTotal = criancasInput.value;
  let duracaoTotal = duracaoInput.value;

  // Regras para o cálculo de carne e bebidas
  if (duracaoTotal >= 6){
    var carneTotal = (650 * adultosTotal) + (325 * criacasTotal);
    var cervejaTotal = 2000 * adultosTotal;
    var bebidasTotal = (1500 * adultosTotal) + (750 * criacasTotal);
  }
  else {
    var carneTotal = (400 * adultosTotal) + (200 * criacasTotal);
    var cervejaTotal = 1200 * adultosTotal;
    var bebidasTotal = (1000 * adultosTotal) + (500 * criacasTotal);
  }

  // Regra para preenchimentos dos inputs
  if (adultosTotal == "" || criacasTotal == ""  || duracaoTotal == "") {
    resultado.innerHTML = `<br> <h4>Preencha os dados acima...`;
  }
  else {
    resultado.innerHTML = `<br> <h4>Você vai precisar de...`;
    resultado.innerHTML += `<p>${carneTotal / 1000} Kg de carne
                            <br>${Math.ceil(cervejaTotal / 355)} latas de cerveja
                            <br>${bebidasTotal / 2000} Litros de água e refrigerante`;

    copyButton.style = "display: inline-block";
  }
}

function limpar() {
  adultosInput.value = "";
  criancasInput.value = "";
  duracaoInput.value = "";

  resultado.innerHTML = "";
  copyButton.style = "display: none";
}

function copiar() {
let copy = document.createRange();
copy.selectNode(document.getElementById("result"));
window.getSelection().removeAllRanges();
window.getSelection().addRange(copy);
document.execCommand('copy');
window.getSelection().removeAllRanges();

alert("Texto copiado pra área de tranferência!");
}