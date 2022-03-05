function addHome(){
    const home = document.createElement('div')
    const headingHome = document.createElement('p')
    headingHome.textContent = "THE BEST PIZZA"
    const p1 = document.createElement('p')
    p1.textContent = "Low Carb and Crunchy"
    p1.classList.add('text-home')
    const p2 = document.createElement('p')
    p2.textContent = "Order online now or visit us"
    p2.classList.add('text-home')
    const p3 = document.createElement('p')
    p3.textContent = "Since 2020"
    p3.classList.add('text-home')

    home.classList.add('home-section')
    const homeImg = document.createElement('img')
    homeImg.src = "images/home.jpg"
    homeImg.alt = "Pizza"
    home.appendChild(headingHome)
    home.appendChild(homeImg)
    home.appendChild(p1)
    home.appendChild(p2)
    home.appendChild(p3)

    return home

}