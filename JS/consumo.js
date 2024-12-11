let totalConsumoM3 = 0; // Variável para somar o consumo total em metros cúbicos
let totalConsumoLitros = 0; // Variável para somar o consumo total em litros
let totalMinutos = 0; // Variável para somar o tempo total em minutos

// Cálculo para banho
function calcularBanho() {
    const minutosDiarios = parseFloat(document.getElementById('minutosDiarios').value);
    const diasNoMes = 30;
    const vasaoMedia = 11; // Vazão média em litros por minuto

    if (isNaN(minutosDiarios) || minutosDiarios <= 0) {
        document.getElementById('resultadoBanho').textContent =
            "Por favor, insira um valor válido para o tempo de banho diário.";
        return;
    }

    const minutosNoMes = minutosDiarios * diasNoMes;
    const consumoMensalLitros = minutosNoMes * vasaoMedia;
    const consumoMensalM3 = consumoMensalLitros / 1000;

    // Atualiza os totais
    totalMinutos += minutosNoMes;
    totalConsumoLitros += consumoMensalLitros;
    totalConsumoM3 += consumoMensalM3;

    exibirDetalhesAtividade(
        "resultadoBanho",
        minutosNoMes,
        consumoMensalLitros,
        consumoMensalM3
    );
}

// Cálculo para lavar louça
function calcularLouca() {
    const tempoLouca = parseFloat(document.getElementById('tempoLouca').value);
    const consumoPorMinuto = 9; // Vazão média em litros por minuto

    if (isNaN(tempoLouca) || tempoLouca <= 0) {
        document.getElementById('resultadoLouca').textContent =
            "Por favor, insira um tempo válido.";
        return;
    }

    const minutosNoMes = tempoLouca * 30;
    const consumoMensalLitros = minutosNoMes * consumoPorMinuto;
    const consumoMensalM3 = consumoMensalLitros / 1000;

    // Atualiza os totais
    totalMinutos += minutosNoMes;
    totalConsumoLitros += consumoMensalLitros;
    totalConsumoM3 += consumoMensalM3;

    exibirDetalhesAtividade(
        "resultadoLouca",
        minutosNoMes,
        consumoMensalLitros,
        consumoMensalM3
    );
}

// Cálculo para máquina de lavar
function calcularLavadora() {
    const ciclos = parseInt(document.getElementById('ciclos').value);
    const consumoPorCiclo = 80; // Consumo médio em litros por ciclo

    if (isNaN(ciclos) || ciclos <= 0) {
        document.getElementById('resultadoLavadora').textContent =
            "Por favor, insira um número válido de ciclos.";
        return;
    }

    const minutosNoMes = ciclos * 60; // Assume 1 hora (60 minutos) por ciclo
    const consumoMensalLitros = ciclos * consumoPorCiclo;
    const consumoMensalM3 = consumoMensalLitros / 1000;

    // Atualiza os totais
    totalMinutos += minutosNoMes;
    totalConsumoLitros += consumoMensalLitros;
    totalConsumoM3 += consumoMensalM3;

    exibirDetalhesAtividade(
        "resultadoLavadora",
        minutosNoMes,
        consumoMensalLitros,
        consumoMensalM3
    );
}

// Função para exibir os detalhes de cada atividade
function exibirDetalhesAtividade(elementId, minutos, litros, metrosCubicos) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    const segundos = minutos * 60;

    document.getElementById(elementId).innerHTML =
        `<p>Tempo gasto: <strong>${minutos}</strong> minutos 
         (<strong>${horas}h ${minutosRestantes}m</strong> ou <strong>${segundos}</strong> segundos).</p>
         <p>Consumo: <strong>${litros.toFixed(2)} litros</strong> 
         (<strong>${metrosCubicos.toFixed(2)} m³</strong>).</p>`;
}

// Exibir o somatório total das atividades
function calcularTotal() {
    const horasTotais = Math.floor(totalMinutos / 60);
    const minutosRestantes = totalMinutos % 60;
    const segundosTotais = totalMinutos * 60;

    const custoTotal = calcularCusto(totalConsumoM3);

    document.getElementById('resultadoTotal').innerHTML =
        `<h3>Resumo Total</h3>
         <p>Tempo total gasto: <strong>${totalMinutos}</strong> minutos 
         (<strong>${horasTotais}h ${minutosRestantes}m</strong> ou <strong>${segundosTotais}</strong> segundos).</p>
         <p>Consumo total: <strong>${totalConsumoLitros.toFixed(2)} litros</strong> 
         (<strong>${totalConsumoM3.toFixed(2)} m³</strong>).</p>
         <p>Custo total associado: <strong>R$ ${custoTotal.toFixed(2)}</strong>.</p>`;
}

// Função para calcular o custo total com base nas faixas de consumo
function calcularCusto(consumoM3) {
    let custo = 0;

    if (consumoM3 > 0) {
        // Tarifa fixa de 0 a 10 m³
        custo += 50.23;
        consumoM3 -= 10;
    }

    if (consumoM3 > 0) {
        // Faixa de 11 a 20 m³: R$ 7,56 por m³
        const faixa11a20 = Math.min(consumoM3, 10);
        custo += faixa11a20 * 7.56;
        consumoM3 -= faixa11a20;
    }

    if (consumoM3 > 0) {
        // Faixa acima de 20 m³: R$ 12,45 por m³
        custo += consumoM3 * 12.45;
    }

    return custo;
}