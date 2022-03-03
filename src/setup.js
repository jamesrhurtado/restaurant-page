
function addHeader(){
    const header = document.createElement('header')
    header.classList.add('header')

    const brand = document.createElement('p')
    brand.textContent = "The Roman"
    brand.classList.add('heading')

    header.appendChild(brand)

    return header
}

function addMain(){
    const main = document.createElement('main')
    main.classList.add('main')
    return main
}

function addFooter(){
    const footer = document.createElement('footer')
    footer.classList.add('footer')
    return footer
}

function setupWebsite(){
    const content = document.querySelector('.content')
    content.appendChild(addHeader())
    content.appendChild(addMain())
}

export default setupWebsite;