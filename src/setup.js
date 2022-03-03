
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

    const copyRight = document.createElement('p')
    copyRight.textContent = "Copyright © " + new Date().getFullYear() +" jrenzzo"

    const githubLink = document.createElement('a')
    githubLink.href = "https://github.com/jrenzzo"

    const githubIcon = document.createElement('i')
    githubIcon.classList.add('fab')
    githubIcon.classList.add('fa-github')

    githubLink.appendChild(githubIcon)
    footer.appendChild(copyRight)
    footer.appendChild(githubLink)
        
    return footer
}

function setupWebsite(){
    const content = document.querySelector('.content')
    content.appendChild(addHeader())
    content.appendChild(addMain())
    content.appendChild(addFooter())
}

export default setupWebsite;