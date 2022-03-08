import setUpHome from "./home"
import setUpMenu from "./menu"
import setUpContact from "./contact"


function addHeader(){
    const header = document.createElement('header')
    header.classList.add('header')

    const brand = document.createElement('p')
    brand.textContent = "The Roman"
    brand.classList.add('heading')

    header.appendChild(brand)
    header.appendChild(addTabs())

    return header
}

function addTabs(){
    const tabSection = document.createElement('div')
    tabSection.classList.add('tab-section')
    const homeButton = document.createElement('button')
    homeButton.classList.add('button-tab')
    homeButton.classList.add('home')
    homeButton.textContent = "Home"
    homeButton.addEventListener('click', ()=>{
        if(!(homeButton.classList.contains('active'))){
            setTabToActive(homeButton)
            setUpHome()
        }
    })

    const contactButton = document.createElement('button')
    contactButton.classList.add('button-tab')
    contactButton.textContent = "Contact"
    contactButton.addEventListener('click', ()=>{
        if(!(contactButton.classList.contains('active'))){
            setTabToActive(contactButton)
            setUpContact()
        }
    })

    const menuButton = document.createElement('button')
    menuButton.classList.add('button-tab')
    menuButton.textContent = "Menu"
    menuButton.addEventListener('click', ()=>{
        if(!(menuButton.classList.contains('active'))){
            setTabToActive(menuButton)
            setUpMenu()
        }
    })

    tabSection.appendChild(homeButton)
    tabSection.appendChild(contactButton)
    tabSection.appendChild(menuButton)
    return tabSection
}

function setTabToActive(button){
    console.log(button.textContent)
    button.classList.add('active')
    const tabs = document.querySelectorAll('button-tab')
    tabs.forEach((tab) => {
        console.log("im in")
        tab.classList.remove('active')
    });

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
    copyRight.textContent = "Copyright © " + new Date().getFullYear() + " jrenzzo"

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

    setTabToActive(document.querySelector('.home'))
    setUpHome()
}

export default setupWebsite;