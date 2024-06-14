import { MaterialLeitura } from "./MaterialLeitura";

export class Revista implements MaterialLeitura {
    titulo: string;
    autor: string;
    edicao: number;
    constructor(titulo: string, autor: string, edicao: number) {
        this.titulo = titulo
        this.autor = autor
        this.edicao = edicao
    }
    exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Edição: ${this.edicao}`)
    }

}