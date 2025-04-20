import { nav, h1, h4 } from "./src/app.js";

export function navBarComponent() {
    const navComponent = nav ('navbar','nav-style')
    const texto1 = h1 ('Novo Site', '', 'titulo')
    const subTitulo = h4 ('Navegue no menu','','')
    navComponent.appendChild(texto1, subTitulo)
}





