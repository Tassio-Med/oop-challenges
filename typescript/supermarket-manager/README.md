# Desafio: Sistema de Gerenciamento de Supermercado

## Descrição

Neste desafio, você irá construir um Sistema de Gerenciamento de Supermercado utilizando TypeScript, Node.js e Jest para testes. O sistema deve permitir o gerenciamento de produtos, estoque, vendas e clientes, implementando os quatro pilares da Programação Orientada a Objetos (POO): Abstração, Encapsulamento, Herança e Polimorfismo. Além disso, você deverá utilizar recursos avançados do TypeScript, como Generic Types, Enum, Types e Interfaces.

## Requisitos Funcionais

### Gerenciamento de Produtos

- Adicionar, remover e listar produtos.
- Cada produto deve ter um nome, preço, categoria e quantidade em estoque.

### Gerenciamento de Estoque

- Atualizar a quantidade de produtos no estoque.
- Consultar a quantidade disponível de um produto específico.

### Gerenciamento de Vendas

- Registrar vendas, associando produtos a clientes.
- Cada venda deve registrar a data, os produtos vendidos, a quantidade de cada produto e o cliente.

### Gerenciamento de Clientes

- Adicionar, remover e listar clientes.
- Cada cliente deve ter um nome, email e telefone.

## Requisitos Técnicos

### TypeScript

- Utilização de Generic Types, Enum, Types e Interfaces.
- Estruturação de pastas adequada.

### POO

- Implementação dos quatro pilares da POO: Abstração, Encapsulamento, Herança e Polimorfismo.

### Testes com Jest

- Criação de testes unitários para todas as funcionalidades principais.

## Estrutura de Pastas

```css
supermarket-management-system/
├── src/
│   ├── controllers/
│   │   ├── ProductController.ts
│   │   ├── StockController.ts
│   │   ├── SalesController.ts
│   │   └── CustomerController.ts
│   ├── models/
│   │   ├── Product.ts
│   │   ├── Customer.ts
│   │   ├── Sale.ts
│   │   └── Index.ts
│   ├── services/
│   │   ├── ProductService.ts
│   │   ├── StockService.ts
│   │   ├── SalesService.ts
│   │   └── CustomerService.ts
│   ├── types/
│   │   ├── Enums.ts
│   │   ├── Types.ts
│   │   └── Interfaces.ts
│   └── main.ts
├── tests/
│   ├── ProductController.test.ts
│   ├── StockController.test.ts
│   ├── SalesController.test.ts
│   └── CustomerController.test.ts
├── jest.config.js
├── package.json
└── tsconfig.json
