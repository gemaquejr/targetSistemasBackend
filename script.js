const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const faturamentoDiario = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 4, valor: 0.0 },
  { dia: 5, valor: 0.0 },
  { dia: 6, valor: 26742.6612 },
  { dia: 7, valor: 0.0 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 11, valor: 0.0 },
  { dia: 12, valor: 0.0 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 18, valor: 0.0 },
  { dia: 19, valor: 0.0 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 25, valor: 0.0 },
  { dia: 26, valor: 0.0 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 },
];

const faturamentoEstados = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

function calcularSoma() {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K += 1;
    SOMA += K;
  }

  console.log("\n=== Resultado ===");
  console.log(`Resultado da SOMA: ${SOMA}`);
}

function verificarFibonacci() {
  rl.question("Digite um número para verificar se pertence à sequência de Fibonacci: ", (num) => {
    const numero = parseInt(num);
    let a = 0, b = 1;

    while (b < numero) {
      [a, b] = [b, a + b];
    }

    console.log("\n=== Resultado ===");
    if (b === numero || numero === 0) {
      console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
      console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
    menu();
  });
}

function analisarFaturamento() {
  const valores = faturamentoDiario.map((d) => d.valor).filter((v) => v > 0);
  const menorValor = Math.min(...valores);
  const maiorValor = Math.max(...valores);
  const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
  const diasAcimaMedia = valores.filter((v) => v > mediaMensal).length;

  console.log("\n=== Resultado ===");
  console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
  console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
  console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);
  menu();
}

function calcularPercentual() {
  const total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

  console.log("Percentual de representação por estado:");
  for (estado in faturamentoEstados) {
    const percentual = (faturamentoEstados[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  menu();
}

function inverterString() {
  rl.question("Digite uma string para inverter: ", (str) => {
    const invertida = str.split("").reverse().join("");
    console.log("\n=== Resultado ===");
    console.log(`String invertida: ${invertida}`);
    menu();
  });
}

function menu() {
  console.log("\nEscolha uma opção:");
  console.log("1 - Calcular soma");
  console.log("2 - Verificar número na sequência de Fibonacci");
  console.log("3 - Analisar faturamento");
  console.log("4 - Calcular percentual de representação");
  console.log("5 - Inverter string");
  console.log("6 - Sair");

  rl.question("Digite sua escolha: ", (opcao) => {
    switch (opcao) {
      case "1":
        calcularSoma();
        menu();
        break;
      case "2":
        verificarFibonacci();
        break;
      case "3":
        analisarFaturamento();
        break;
      case "4":
        calcularPercentual();
        break;
      case "5":
        inverterString();
        break;
      case "6":
        console.log("Obrigado, Target Sistemas!");
        rl.close();
        break;
      default:
        console.log("Opção inválida! Tente novamente.");
        menu();
    }
  });
}

menu();
