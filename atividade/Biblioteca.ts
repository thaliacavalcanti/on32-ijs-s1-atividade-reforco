import { Artigo } from "./Artigo";
import { Livro } from "./Livro";
import { Revista } from "./Revista";

const pequenoPrincipe = new Livro("Pequeno Principe", "Antoine de Saint-Exupéry", 111)
const revistaCapricho = new Revista("Capricho", "Editora Abril", 13)
const artigo = new Artigo("Moda como expressão de identidade", "Desconhecido", new Date('2000-10-10T03:24:00'))


pequenoPrincipe.exibirDetalhes()

revistaCapricho.exibirDetalhes()

artigo.exibirDetalhes()