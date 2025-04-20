import { main, h1, paragraph } from "./src/app.js";

export function content() {
    const mainComponent = main ('','')
    const texto1 = h1 ('Conteudo do site', '', 'titulo')
    const subTitulo = paragraph ('Conheça Nosso Site','','')
    mainComponent.appendChild(texto1, subTitulo)
}

