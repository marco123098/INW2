const readline = require("readline");




class Fralda {

  // código da classe Fralda omitido para brevidade




  exibirInformacoes() {

    console.log("Fralda cadastrada!!!");

    console.log("Venda 1");

    console.log("Fralda:", this.descricao);

    console.log("Descrição:", this.descricao);

    console.log("Estoque atual:", this.estoque);

  }

}




const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout,

});




// Tela 1

console.log("Raul Fraldas");

rl.question("Quer fazer compras? (sim ou não): ", (resposta) => {

  if (resposta.toLowerCase() === "sim") {

    rl.question("Digite a descrição do produto: ", (descricaoProduto) => {

      rl.question("Digite o preço unitário do produto: ", (precoProduto) => {

        precoProduto = parseFloat(precoProduto);




        // Criação do objeto Fralda

        const fralda = new Fralda(

          1,

          descricaoFralda,

          true,

          10,

          precoFralda,

          "atributo1",

          "atributo2"

        );




        produto.exibirInformacoes();




        console.log("===========================");

        console.log("Vendas da Fralda");

        console.log("===========================");




        const realizarVenda = (venda) => {

          console.log(`Venda ${venda}`);

          console.log("Fralda:", produto.descricao);

          console.log("Descrição:", produto.descricao);

          console.log("Estoque atual:", produto.estoque);




          rl.question("Quantas fraldas você quer comprar? ", (quantidadeCompra) => {

            quantidadeCompra = parseInt(quantidadeCompra);

            const valorTotal = quantidadeCompra * fralda.preco;




            console.log("Valor a pagar:", valorTotal);




            fralda.retirarEstoque(quantidadeCompra);




            console.log("Saldo atual do estoque:", fralda.estoque);

            console.log("===========================");




            if (venda < 5) {

              realizarVenda(venda + 1);

            } else {

              console.log("===========================");

              console.log("Reposição de Estoque");

              console.log("===========================");




              const estoqueFinal = 10 - fralda.estoque;

              console.log("Quantidade a ser incluída no estoque:", estoqueFinal);




              fralda.incluirEstoque(estoqueFinal);




              console.log("Estoque final:", fralda.estoque);

              rl.close();

            }

          });

        };




        realizarVenda(1);

      });

    });

  } else {

    console.log("Obrigado pela visita!");

    rl.close();

  }

});
