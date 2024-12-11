// Cálculo para banho
function calcularBanho() {
    const minutosDiarios = parseFloat(document.getElementById('minutosDiarios').value);
    const diasNoMes = 30;
    const vasaoMedia = 11;

    if (isNaN(minutosDiarios) || minutosDiarios <= 10) {
        document.getElementById('resultadoBanho').textContent = 
            "Por favor, insira um valor válido para o tempo de banho diário.";
        return;
    }

    const minutosNoMes = minutosDiarios * diasNoMes;
    const consumoMensal = minutosNoMes * vasaoMedia;
    document.getElementById('resultadoBanho').innerHTML = 
        `<p>Você gasta <strong>${minutosNoMes}</strong> minutos no banho em um mês.</p>
         <p>Consumo estimado: <strong>${consumoMensal.toFixed(2)} litros</strong></p>`;
}

// Cálculo para lavar louça
function calcularLouca() {
    const tempoLouca = parseFloat(document.getElementById('tempoLouca').value);
    const consumoPorMinuto = 9; // Estimativa em litros por minuto.

    if (isNaN(tempoLouca) || tempoLouca <= 0) {
        document.getElementById('resultadoLouca').textContent = 
            "Por favor, insira um tempo válido.";
        return;
    }

    const consumoTotal = tempoLouca * consumoPorMinuto * 30;
    document.getElementById('resultadoLouca').innerHTML = 
        `<p>Consumo mensal: <strong>${consumoTotal.toFixed(2)} litros</strong></p>`;
}

// Cálculo para máquina de lavar
function calcularLavadora() {
    const ciclos = parseInt(document.getElementById('ciclos').value);
    const consumoPorCiclo = 80; // Estimativa em litros por ciclo.

    if (isNaN(ciclos) || ciclos <= 0) {
        document.getElementById('resultadoLavadora').textContent = 
            "Por favor, insira um número válido de ciclos.";
        return;
    }

    const consumoTotal = ciclos * consumoPorCiclo;
    document.getElementById('resultadoLavadora').innerHTML = 
        `<p>Consumo mensal: <strong>${consumoTotal.toFixed(2)} litros</strong></p>`;
}
// Cálculo para banho
function calcularBanho() {
const minutosDiarios = parseFloat(document.getElementById('minutosDiarios').value);
const diasNoMes = 30;
const vasaoMedia = 11;
let dinheiro = 0;

if (isNaN(minutosDiarios) || minutosDiarios <= 0) {
document.getElementById('resultadoBanho').textContent = 
    "Por favor, insira um valor válido para o tempo de banho diário.";
return;
}

const minutosNoMes = minutosDiarios * diasNoMes;
const consumoMensal = minutosNoMes * vasaoMedia;

// Aplicação das regras
// Aplicação das regras
if (consumoMensal >= 0 && consumoMensal <= 10) {
dinheiro = 50.23;
} else if (consumoMensal >= 11 && consumoMensal <= 20) {
dinheiro = 75.50;
} else {
dinheiro = 100.00; // Valor padrão para consumos acima de 20 litros.
}


document.getElementById('resultadoBanho').innerHTML = 
`<p>Você gasta <strong>${minutosNoMes}</strong> minutos no banho em um mês.</p>
 <p>Consumo estimado: <strong>${consumoMensal.toFixed(2)} litros</strong></p>
 <p>Custo associado: <strong>R$ ${dinheiro.toFixed(2)}</strong></p>`;
}

// Cálculo para lavar louça
function calcularLouca() {
const tempoLouca = parseFloat(document.getElementById('tempoLouca').value);
const consumoPorMinuto = 9; // Estimativa em litros por minuto.
let dinheiro = 0;

if (isNaN(tempoLouca) || tempoLouca <= 0) {
document.getElementById('resultadoLouca').textContent = 
    "Por favor, insira um tempo válido.";
return;
}

const consumoTotal = tempoLouca * consumoPorMinuto * 30;

// Aplicação das regras
if (consumoTotal >= 0 && consumoTotal <= 10) {
dinheiro = 50.23;
} else if (consumoTotal >= 11 && consumoTotal <= 20) {
dinheiro = 75.50;
} else {
dinheiro = 100.00; // Valor padrão para consumos acima de 20 litros.
}

document.getElementById('resultadoLouca').innerHTML = 
`<p>Consumo mensal: <strong>${consumoTotal.toFixed(2)} litros</strong></p>
 <p>Custo associado: <strong>R$ ${dinheiro.toFixed(2)}</strong></p>`;
}

// Cálculo para máquina de lavar
function calcularLavadora() {
const ciclos = parseInt(document.getElementById('ciclos').value);
const consumoPorCiclo = 80; // Estimativa em litros por ciclo.
let dinheiro = 0;

if (isNaN(ciclos) || ciclos <= 0) {
document.getElementById('resultadoLavadora').textContent = 
    "Por favor, insira um número válido de ciclos.";
return;
}

const consumoTotal = ciclos * consumoPorCiclo;

// Aplicação das regras
if (consumoTotal >= 0 && consumoTotal <= 10) {
dinheiro = 50.23;
} else if (consumoTotal >= 11 && consumoTotal <= 20) {
dinheiro = 75.50;
} else {
dinheiro = 100.00; // Valor padrão para consumos acima de 20 litros.
}

document.getElementById('resultadoLavadora').innerHTML = 
`<p>Consumo mensal: <strong>${consumoTotal.toFixed(2)} litros</strong></p>
 <p>Custo associado: <strong>R$ ${dinheiro.toFixed(2)}</strong></p>`;
}

