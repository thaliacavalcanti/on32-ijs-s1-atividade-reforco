import { MaterialLeitura } from "./MaterialLeitura";

export class Livro implements MaterialLeitura {
    titulo: string;
    autor: string;
    numeroPagina: number;

    constructor(titulo: string, autor: string, numeroPagina: number ) {
        this.titulo = titulo
        this.autor = autor
        this.numeroPagina = numeroPagina
    }

    exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Número de Páginas: ${this.numeroPagina}`)
    }


}