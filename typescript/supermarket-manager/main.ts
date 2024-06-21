// src/main.ts
import promptSync from 'prompt-sync';
import { ProductController } from './src/controllers/ProductController';
import { StockController } from './src/controllers/StockController';
import { SalesController } from './src/controllers/SalesController';
import { CustomerController } from './src/controllers/CustomerController';
import { ProductService } from './src/services/ProductService';
import { StockService } from './src/services/StockService';
import { SalesService } from './src/services/SalesService';
import { CustomerService } from './src/services/CustomerService';
import { Product } from './src/models';
import { Customer } from './src/models';
import { Sale } from './src/models';
import { ProductCategory } from './src/types/Enums';

const prompt = promptSync();

const productService = new ProductService();
const stockService = new StockService(productService.listProducts());
const salesService = new SalesService();
const customerService = new CustomerService();

const productController = new ProductController(productService);
const stockController = new StockController(stockService);
const salesController = new SalesController(salesService);
const customerController = new CustomerController(customerService);

const mainMenu = `
1. Gerenciar Produtos
2. Gerenciar Estoque
3. Gerenciar Vendas
4. Gerenciar Clientes
5. Sair
`;

const productMenu = `
1. Adicionar Produto
2. Remover Produto
3. Listar Produtos
4. Voltar
`;

const stockMenu = `
1. Atualizar Estoque
2. Consultar Estoque
3. Voltar
`;

const salesMenu = `
1. Registrar Venda
2. Listar Vendas
3. Voltar
`;

const customerMenu = `
1. Adicionar Cliente
2. Remover Cliente
3. Listar Clientes
4. Voltar
`;

function main() {
    let running = true;
    while (running) {
        console.log(mainMenu);
        const choice = prompt('Escolha uma opção: ');

        switch (choice) {
            case '1':
                manageProducts();
                break;
            case '2':
                manageStock();
                break;
            case '3':
                manageSales();
                break;
            case '4':
                manageCustomers();
                break;
            case '5':
                running = false;
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

function manageProducts() {
    let managingProducts = true;
    while (managingProducts) {
        console.log(productMenu);
        const choice = prompt('Escolha uma opção: ');

        switch (choice) {
            case '1':
                const id = prompt('ID do Produto: ');
                const name = prompt('Nome do Produto: ');
                const price = parseFloat(prompt('Preço do Produto: '));
                const category = prompt('Categoria do Produto (food, beverage, cleaning, other): ') as ProductCategory;
                const stock = parseInt(prompt('Quantidade em Estoque: '), 10);
                const product = new Product(id, name, price, category, stock);
                productController.addProduct(product);
                break;
            case '2':
                const removeId = prompt('ID do Produto a ser removido: ');
                productController.removeProduct(removeId);
                break;
            case '3':
                const products = productController.listProducts();
                console.log('Produtos:');
                products.forEach(product => console.log(product));
                break;
            case '4':
                managingProducts = false;
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

function manageStock() {
    let managingStock = true;
    while (managingStock) {
        console.log(stockMenu);
        const choice = prompt('Escolha uma opção: ');

        switch (choice) {
            case '1':
                const productId = prompt('ID do Produto: ');
                const quantity = parseInt(prompt('Nova Quantidade: '), 10);
                stockController.updateStock(productId, quantity);
                break;
            case '2':
                const stockProductId = prompt('ID do Produto: ');
                const stockQuantity = stockController.getStock(stockProductId);
                console.log(`Quantidade em Estoque: ${stockQuantity}`);
                break;
            case '3':
                managingStock = false;
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

function manageSales() {
    let managingSales = true;
    while (managingSales) {
        console.log(salesMenu);
        const choice = prompt('Escolha uma opção: ');

        switch (choice) {
            case '1':
                const saleId = prompt('ID da Venda: ');
                const customerId = prompt('ID do Cliente: ');
                const customer = customerController.listCustomers().find(c => c.id === customerId);
                if (!customer) {
                    console.log('Cliente não encontrado.');
                    break;
                }
                const products: { product: Product; quantity: number }[] = [];
                let addingProducts = true;
                while (addingProducts) {
                    const productId = prompt('ID do Produto: ');
                    const product = productController.listProducts().find(p => p.id === productId);
                    if (!product) {
                        console.log('Produto não encontrado.');
                        break;
                    }
                    const quantity = parseInt(prompt('Quantidade: '), 10);
                    products.push({ product, quantity });
                    const more = prompt('Adicionar mais produtos? (y/n): ');
                    if (more.toLowerCase() !== 'y') {
                        addingProducts = false;
                    }
                }
                const sale = new Sale(saleId, customer, products, new Date());
                salesController.addSale(sale);
                break;
            case '2':
                const sales = salesController.listSales();
                console.log('Vendas:');
                sales.forEach(sale => console.log(sale));
                break;
            case '3':
                managingSales = false;
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

function manageCustomers() {
    let managingCustomers = true;
    while (managingCustomers) {
        console.log(customerMenu);
        const choice = prompt('Escolha uma opção: ');

        switch (choice) {
            case '1':
                const id = prompt('ID do Cliente: ');
                const name = prompt('Nome do Cliente: ');
                const email = prompt('Email do Cliente: ');
                const phone = prompt('Telefone do Cliente: ');
                const customer = new Customer(id, name, email, phone);
                customerController.addCustomer(customer);
                break;
            case '2':
                const removeId = prompt('ID do Cliente a ser removido: ');
                customerController.removeCustomer(removeId);
                break;
            case '3':
                const customers = customerController.listCustomers();
                console.log('Clientes:');
                customers.forEach(customer => console.log(customer));
                break;
            case '4':
                managingCustomers = false;
                break;
            default:
                console.log('Opção inválida.');
        }
    }
}

main();
