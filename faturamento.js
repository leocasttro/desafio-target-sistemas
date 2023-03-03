const fs = require('fs');

function verificarMenorEMaiorValor(caminhoArquivo) {
  try {
    const conteudo = fs.readFileSync(caminhoArquivo, 'utf8');
    const dados = JSON.parse(conteudo);

    let menorValor = {
      valor: Number.MAX_SAFE_INTEGER,
      dia: -1
    };
    
    let maiorValor = {
      valor: Number.MIN_SAFE_INTEGER,
      dia: -1
    };
    
    let somaValores = 0;
    let qtdValoresValidos = 0;

    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor > 0) {
        somaValores += dados[i].valor;
        qtdValoresValidos++;

        if (dados[i].valor < menorValor.valor) {
          menorValor.valor = dados[i].valor;
          menorValor.dia = dados[i].dia;
        }

        if (dados[i].valor > maiorValor.valor) {
          maiorValor.valor = dados[i].valor;
          maiorValor.dia = dados[i].dia;
        }
      }
    }

    if (qtdValoresValidos === 0) {
      console.log('Não foi encontrado nenhum valor de faturamento diário válido.');
      return;
    }

    const mediaMensal = somaValores / qtdValoresValidos;

    let qtdDiasAcimaMedia = 0;

    for (let i = 0; i < dados.length; i++) {
      if (dados[i].valor > mediaMensal) {
        qtdDiasAcimaMedia++;
      }
    }

    console.log(`O menor valor de faturamento diário ocorreu no dia ${menorValor.dia} e foi de: ${menorValor.valor}.`);
    console.log(`O maior valor de faturamento diário ocorreu no dia ${maiorValor.dia} e foi de: ${maiorValor.valor}.`);
    console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${qtdDiasAcimaMedia}`);

  } catch (erro) {
    console.error(`Erro ao ler o arquivo ${caminhoArquivo}: ${erro}`);
  }
}

verificarMenorEMaiorValor('arquivo.json');