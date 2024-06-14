import { MaterialLeitura } from "./MaterialLeitura";

export class Artigo implements MaterialLeitura {
    titulo: string;
    autor: string;
    dataPublicacao: Date;
    
    constructor(titulo: string, autor: string, dataPublicacao: Date) {
        this.titulo = titulo
        this.autor = autor
        this.dataPublicacao = dataPublicacao
    }

    exibirDetalhes(): void {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Data Publicação: ${this.dataPublicacao.toLocaleDateString()}`)
    }

}