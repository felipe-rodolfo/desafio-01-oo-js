class Produtos {

    constructor(nome, preco, qtdEstoque){
        this.nome = nome;
        this.preco = preco;
        this.qtdEstoque = qtdEstoque;
    }    
    
}

class Estoque {

    constructor(){
        this.produtos = [];
    }

    addProduto(nome, preco, qtd){
       if(nome.length > 0 && preco > 0 && qtd > 0){
        const produto = new Produtos(nome, preco, qtd);
        this.produtos.push(produto);
       } else {
        console.log(`Informe o nome, preço e quantidade corretamente.`);
       }
    }

    removerProduto(nome){
        if(nome.length > 0){
            const indexRemover = this.produtos.findIndex((item) => nome == item.nome);
            if(!indexRemover){
                console.log('Produto não encontrado')
            } else {
                this.produtos.splice(indexRemover, 1);
            }
        } else {
            console.log('Erro: Informe o nome');
        }
    }

    atualizarQuantidade(nome, quantidadeNova){
        if(nome.length > 0 && quantidadeNova > 0){
            const produtoEncontrado = this.produtos.find((item) => item.nome == nome);
            if(!produtoEncontrado){
                console.log('Produto não encontrado. Dgite um novo nome e tente novamente!');
            } else {
                produtoEncontrado.qtdEstoque = quantidadeNova;
                console.log(`Nova quantidade: ${produtoEncontrado.qtdEstoque}`);
            }
        } else {
            console.log('Erro: Informe o nome e a quantidade');
        }
    }

    listarProdutos(){
        console.log(this.produtos);
        this.produtos.forEach((item) => console.log(`Nome: ${item.nome} - Preço: ${item.preco} - Quantidade: ${item.qtdEstoque}`));
    }

}

const estoque = new Estoque();
estoque.addProduto('Computador', 3800, 5);
estoque.addProduto('Notebook', 5300, 7);
//estoque.removerProduto('Notebook');
estoque.atualizarQuantidade('Notebook', 5);
estoque.listarProdutos();