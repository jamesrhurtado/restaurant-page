function addMenu(){
    const menu = document.createElement('div')
    menu.classList.add('menu')
    
    menu.appendChild(addMenuItem('Hawaiian', 'Hawaiian pizza is topped with tomato sauce, mozzarella cheese, sliced ham, and pineapple.'))
    
    menu.appendChild(addMenuItem('Neapolitan', 'Neapolitan pizza is prepared with raw tomatoes, fresh mozzarella cheese, fresh basil, and olive oil.'))
    menu.appendChild(addMenuItem('Cheese', 'Cheese pizza is perfect for those who love thin crust pizza. Includes sundried tomatoes, olives, goat cheese and is made with lavash.'))
    menu.appendChild(addMenuItem('Sicilian', 'If you like thick, spongy square pizza loaded with sauce and cheese, then this Sicilian pizza recipe will not disappoint.'))
    menu.appendChild(addMenuItem('Pepperoni', 'Pepperoni is one of the most popular pizza toppings. Salty, fatty, and full-flavored, this thinly sliced American salami is typically used for pizza.'))
    menu.appendChild(addMenuItem('Greek', 'This Greek pizza includes a fabulous crust using self-rising flour. Plus, it comes with a Mediterranean flair as the Greeks do.'))
    menu.appendChild(addMenuItem('Lobster', 'Have you ever thought of putting lobster on pizza? This Lobster Flatbread Pizza will not disappoint you.'))
    menu.appendChild(addMenuItem('Margherit', 'Here is the archetype of a thin-crust pizza pie, a pizza margherita adorned simply in the colors of the Italian flag: green from basil, white from mozzarella, red from tomato sauce.'))
    
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