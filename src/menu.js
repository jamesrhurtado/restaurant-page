function addMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    
    menu.appendChild(addMenuItem('Hawaiian', 'Lorem ipsum et al or lele lorem'))
    
    menu.appendChild(addMenuItem('Neapolitan', 'lorem ipsum'))
    menu.appendChild(addMenuItem('Cheese', 'lorem ipsum'))
    menu.appendChild(addMenuItem('Sicilian', 'lorem ipsum lorie'))
    menu.appendChild(addMenuItem('Pepperoni', 'lorem ipsum loriet'))
    menu.appendChild(addMenuItem('Greek', 'lorem ipsum'))
    menu.appendChild(addMenuItem('Chicago', 'lorem ipsum'))
    menu.appendChild(addMenuItem('Margherit', 'lorem ipsum loriet'))
    
   return menu
}

function addMenuItem(name, description){
    const cardMenu = document.createElement('div')
    cardMenu.classList.add('card-container')

    const pizzaName = document.createElement('h3')
    pizzaName.textContent = name

    const pizzaDes = document.createElement('p')
    pizzaDes.textContent = description

    const pizzaImg = document.createElement('img')
    pizzaImg.src = `images/${name.toLowerCase()}.jpg`
    pizzaImg.alt = `${name}`

    cardMenu.appendChild(pizzaImg)
    cardMenu.appendChild(pizzaName)
    cardMenu.appendChild(pizzaDes)
    
    return cardMenu
}

function setUpMenu(){
    const main = document.querySelector('.main')
    main.textContent = ""
    main.appendChild(addMenu())
}

export default setUpMenu;