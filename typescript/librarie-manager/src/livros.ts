export class Livro {
  protected titulo: string;
  protected autor: string;
  protected ano: number;
  protected emprestado: boolean;

  constructor(titulo: string, autor: string, ano: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.emprestado = false;
  }

  getTitulo() {
    return this.titulo;
  }

  getEmprestado() {
    return this.emprestado;
  }

  setEmprestado(emprestado: boolean) {
    this.emprestado = emprestado;
  }

  emprestar() {
    this.setEmprestado(true);
  }

  devolver() {
    this.setEmprestado(false);
  }

  getInfo() {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}, Emprestado: ${this.emprestado}`;
  }
}
