// All Components Base
// Bases for the use in production your website

const app = document.getElementById('app')

export function navComponent() {
    const nav = document.createElement('div')
    
    nav.innerHTML = `<nav>
      <h1> Welcome The Home </h1>
    </nav>`

    app.appendChild(nav)
}

export function homeComponent() {
    const home = document.createElement('div')
    home.className = 'home'
    
    home.innerHTML = `<main>Welcome The Home</main>`

    app.appendChild(home)
}


export function footerComponent() {
    const footer = document.createElement('div')
    
    footer.innerHTML = `<footer> <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p> </footer>`

    app.appendChild(footer)
}


// function cardComponent({ title, description }) {
//     const div = document.createElement('div');
//     div.innerHTML = `<h2>${title}</h2><p>${description}</p>`;
//     return div;
//   }
  





