import { Livro } from "./livros";

class Usuario {
  private nome: string;
  private livrosEmprestados: Livro[];

  constructor(nome: string) {
    this.nome = nome;
    this.livrosEmprestados = [];
  }

  emprestarLivro(livro: Livro) {
    this.livrosEmprestados.push(livro);
  }

  devolverLivro(livro: Livro) {
    this.livrosEmprestados = this.livrosEmprestados.filter((livroEmprestado) => livroEmprestado!== livro);
  }
}

export default Usuario;