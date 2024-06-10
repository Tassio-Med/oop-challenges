// main.ts
import Biblioteca from "./src/biblioteca";
import { Livro } from "./src/livros";

const biblioteca = new Biblioteca("Biblioteca Pública");

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937);
const livro3 = new Livro("A Guerra dos Tronos", "George R.R. Martin", 1996);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

console.log("Livros disponíveis:");
console.log(biblioteca.listarLivrosDisponiveis());

biblioteca.emprestarLivro("O Senhor dos Anéis");
biblioteca.emprestarLivro("A Guerra dos Tronos");

console.log("Livros emprestados:");
console.log(biblioteca.listarLivrosEmprestados());

biblioteca.devolverLivro("O Senhor dos Anéis");

console.log("Livros disponíveis:");
console.log(biblioteca.listarLivrosDisponiveis());