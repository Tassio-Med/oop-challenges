import prompt from 'prompt-sync';
import Biblioteca from './biblioteca';
import Usuario from './usuario';
import { Livro } from './livros';

const prompter = prompt();

class Menu {
  private biblioteca: Biblioteca;
  private usuario: Usuario;

  constructor(biblioteca: Biblioteca, usuario: Usuario) {
    this.biblioteca = biblioteca;
    this.usuario = usuario;
  }

  mostrarMenu() {
    console.log('Menu:');
    console.log('1. Cadastrar um novo livro');
    console.log('2. Remover um livro');
    console.log('3. Empréstimo de livro');
    console.log('4. Devolução de livro');
    console.log('5. Listar livros disponíveis');
    console.log('6. Listar livros emprestados');
    console.log('7. Sair');

    const opcao = prompter('Escolha uma opção: ');

    switch (opcao) {
      case '1':
        this.cadastrarLivro();
        break;
      case '2':
        this.removerLivro();
        break;
      case '3':
        this.emprestarLivro();
        break;
      case '4':
        this.devolverLivro();
        break;
      case '5':
        this.listarLivrosDisponiveis();
        break;
      case '6':
        this.listarLivrosEmprestados();
        break;
      case '7':
        console.log('Até logo!');
        break;
      default:
        console.log('Opção inválida!');
    }
  }


cadastrarLivro() {
  const titulo = prompter('Título do livro: ');
  const autor = prompter('Autor do livro: ');
  const ano = parseInt(prompter('Ano do livro: '));

  const livro = new Livro(titulo, autor, ano);
  this.biblioteca.adicionarLivro(livro);
  console.log(`Livro cadastrado com sucesso!`);
}

removerLivro() {
  const titulo = prompter('Título do livro a remover: ');
  this.biblioteca.removerLivro(titulo);
  console.log(`Livro removido com sucesso!`);
}

emprestarLivro() {
  const titulo = prompter('Título do livro a emprestar: ');
  this.biblioteca.emprestarLivro(titulo);
  console.log(`Livro emprestado com sucesso!`);
}

devolverLivro() {
  const titulo = prompter('Título do livro a devolver: ');
  this.biblioteca.devolverLivro(titulo);
  console.log(`Livro devolvido com sucesso!`);
}

listarLivrosDisponiveis() {
  const livrosDisponiveis = this.biblioteca.listarLivrosDisponiveis();
  console.log('Livros disponíveis:');
  livrosDisponiveis.forEach((livro) => console.log(livro.getInfo()));
}

listarLivrosEmprestados() {
  const livrosEmprestados = this.biblioteca.listarLivrosEmprestados();
  console.log('Livros emprestados:');
  livrosEmprestados.forEach((livro) => console.log(livro.getInfo()));
}
}

const biblioteca = new Biblioteca('Biblioteca Pública');
const usuario = new Usuario('João');
const menu = new Menu(biblioteca, usuario);

menu.mostrarMenu();