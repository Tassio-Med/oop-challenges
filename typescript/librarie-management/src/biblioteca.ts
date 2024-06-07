import { Livro } from "./livros";

class Biblioteca extends Livro {
  private nome: string;
  private livros: Livro[];

  constructor(nome: string) {
    super('', '', 0); // Chamada ao construtor da classe pai (Livro)
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro: Livro) {
    this.livros.push(livro);
  }

  removerLivro(titulo: string) {
    this.livros = this.livros.filter((livro) => livro.getTitulo() !== titulo);
  }

  emprestarLivro(titulo: string) {
    const livro = this.livros.find((livro) => livro.getTitulo() === titulo);
    if (livro) {
      livro.emprestar();
    }
  }

  devolverLivro(titulo: string) {
    const livro = this.livros.find((livro) => livro.getTitulo() === titulo);
    if (livro) {
      livro.devolver();
    }
  }

  listarLivrosDisponiveis() {
    return this.livros.filter((livro) => !livro.getEmprestado());
  }

  listarLivrosEmprestados() {
    return this.livros.filter((livro) => livro.getEmprestado());
  }
}

export default Biblioteca;