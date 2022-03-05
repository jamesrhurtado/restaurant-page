
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
    homeButton.textContent = "Home"
    homeButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            return
        }else{
            setTabToActive(homeButton)
            //load home tab
        }
    })

    const contactButton = document.createElement('button')
    contactButton.classList.add('button-tab')
    contactButton.textContent = "Contact"
    contactButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            return
        }else{
            setTabToActive(contactButton)
            //load contact tab
        }
    })

    const menuButton = document.createElement('button')
    menuButton.classList.add('button-tab')
    menuButton.textContent = "Menu"
    menuButton.addEventListener('click', (e)=>{
        if(e.target.classList.contains('active')){
            return
        }else{
            setTabToActive(menuButton)
            //load menu tab
        }
    })

    tabSection.appendChild(homeButton)
    tabSection.appendChild(contactButton)
    tabSection.appendChild(menuButton)
    return tabSection
}

function setTabToActive(tab){
    tabs = document.querySelectorAll('button-tab')
    tabs.forEach(tab => {
        if(tab !== this){
            tab.classList.remove('active')
        }
    });
    tab.classList.add('active')
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

    //when setting up, it is needed a default tab to load
}

export default setupWebsite;