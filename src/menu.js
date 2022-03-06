function addMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    



}

function addMenuItem(name, description){
    const cardMenu = document.createElement('div')
    cardMenu.classList.add('menu-container')

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

}

export default setUpMenu;