// Titulos
export function paragraph (textParagraph, id, className) {
    let element = document.createElement('p')
    element.textContent = textParagraph
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h1 (textH1, id, className) {
    let element = document.createElement('h1')
    element.textContent = textH1
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h2 (textH2, id, className) {
    let element = document.createElement('h2')
    element.textContent = textH1
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h3 (textH3, id, className) {
    let element = document.createElement('h3')
    element.textContent = textH3
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h4 (textH4, id, className) {
    let element = document.createElement('h4')
    element.textContent = textH4
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h5 (textH5, id, className) {
    let element = document.createElement('h5')
    element.textContent = textH5
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function h6 (textH6, id, className) {
    let element = document.createElement('h6')
    element.textContent = textH6
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}

// Div
export function div (id, className) {
    let element = document.createElement('div')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function header (id, className) {
    let element = document.createElement('header')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function nav (id, className) {
    let element = document.createElement('nav')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function main (id, className) {
    let element = document.createElement('main')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function footer (id, className) {
    let element = document.createElement('footer')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function article (id, className) {
    let element = document.createElement('article')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
export function aside (id, className) {
    let element = document.createElement('aside')
    if (id) {
        element.id = id
    }
    if (className) {
        element.classList.add(className)
    }
    return element
}
// em produção
