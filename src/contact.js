function addContact(){
    const contactSection = document.createElement('div')
    contactSection.classList.add('contact')

    const contact = document.createElement('div')
    contact.classList.add('card-contact')
    const headingContact = document.createElement('h2')
    const contactDes = document.createElement('p')
    headingContact.textContent = "Contact"
    contactDes.textContent = "+51 999 999 999"
    contact.appendChild(headingContact)
    contact.appendChild(contactDes)


    const location = document.createElement('div')
    location.classList.add('card-contact')
    location.classList.add('location')
    const headingLocation = document.createElement('h2')
    const locationFrame = document.createElement('div')
    headingLocation.textContent = "Location"
    locationFrame.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="670" height="468" id="gmap_canvas" 
    src="https://maps.google.com/maps?q=Prolongaci%C3%B3n%20Primavera%202390,%20Lima%2015023&t=&z=17&ie=UTF8&iwloc=&output=embed" 
    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://2piratebay.org"></a><br>
    <style>.mapouter{position:relative;height:468px;width:670px;}</style><a href="https://www.embedgooglemap.net">using google maps on your website</a><style>.gmap_canvas
    {overflow:hidden;background:none!important;height:468px;width:670px;}</style></div></div>`
    location.appendChild(headingLocation)
    location.appendChild(locationFrame)

    const hours = document.createElement('div')
    hours.classList.add('card-contact')
    const headingHours = document.createElement('h2')
    const hoursDes = document.createElement('p')
    headingHours.textContent = "Hours"
    hoursDes.textContent = "Monday to Friday - 12:00 a 1:00"
    hours.appendChild(headingHours)
    hours.appendChild(hoursDes)

    contactSection.appendChild(contact)
    contactSection.appendChild(location)
    contactSection.appendChild(hours)


    return contactSection
}

function setUpContact(){
    const main = document.querySelector('.main')
    main.textContent = ""
    main.appendChild(addContact())
}

export default setUpContact;