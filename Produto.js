class Product {

    constructor(name, price, quantityInStock = 0){
        this.name = name;
        this.price = price;
        this.quantityInStock = quantityInStock;
    }    
    
}

class Stock {
    products = [];

    addProduct(product){
       if(product instanceof Product){
        this.products.push(product);
       } else {
        console.log(`Informe o nome, preço e quantidade corretamente.`);
       }
    }

    removeProduct(name){
        if(name.length > 0){
            const indexToRemover = this.products.findIndex((item) => name == item.name);
            if(indexToRemover < 0){
                console.log('Produto não encontrado')
            } else {
                this.products.splice(indexToRemover, 1);
            }
        } else {
            console.log('Erro: Informe o nome');
        }
    }

    updateQuantity(name, updateQuantity){
        if(name.length > 0 && typeof updateQuantity === 'number' && updateQuantity > 0){
            const findProduct = this.products.find((item) => item.name == name);
            if(!findProduct){
                console.log('Produto não encontrado. Dgite um novo nome e tente novamente!');
            } else {
                findProduct.quantityInStock = updateQuantity;
                console.log(`Nova quantidade: ${findProduct.quantityInStock}`);
            }
        } else {
            console.log('Erro: Informe o nome e a quantidade');
        }
    }

    listProducts(){
        if(this.products.length > 0){
            this.products.forEach((item) => console.log(`Nome: ${item.name} - Preço: ${item.price} - Quantidade: ${item.quantityInStock}`));
        }
    }

}

const stock = new Stock();
const product1 = new Product('Computador', 3500, 2);
const product2 = new Product('Notebook', 3800);

stock.addProduct(product1);
stock.addProduct(product2);
stock.removeProduct('Notebook', 3);
stock.updateQuantity('Notebook', 5);
stock.listProducts();

console.log(stock);
