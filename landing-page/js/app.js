


//global variables
//adressing the elements we will need to create the navbar
const sections = document.getElementsByTagName("section")
const ul = document.querySelector("ul")
    //using fragment to reduce the time of page reload 
const fragment = new DocumentFragment

// End Global Variables



//main function that works as the start button
function creatingNavBar() {
    // build the nav
    for (const section of sections) {
        //here we create the navbar components

        const listItem = document.createElement("li")
        const anchor = document.createElement("a")


        //here we add class and other attributes to the anchor element
        anchor.id = `${section.id}` //adding id for the anchor to be able to reach it later 
        anchor.classList = "menu__link"
        anchor.innerHTML = `${section.id}`
        anchor.href = `#${section.id}` //to be able to reach the section when we click on the anchor

        //here we append the elements we built to the dom
        listItem.appendChild(anchor)
        fragment.appendChild(listItem)


        // Scroll to section on link click
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            // Scroll to anchor ID using scrollinto event
            // smooth scrolling function to add the feature of smooth scrolling
            section.scrollIntoView({
                behavior: 'smooth'
            })
        })
    }
    ul.appendChild(fragment)
}
// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    const observer = new IntersectionObserver(callback, option);
    for (section of sections) {

        observer.observe(section);
    }

})
const callback = entries => {
        // Set sections as active
        //here we selected the item of the navbar that is related to the viewed section to change some css properties on it
        const activeClass = ul.querySelector(`#${entries[0].target.id}`)

        if (entries[0].isIntersecting) {


            entries[0].target.classList.add('your-active-class');
            activeClass.classList.add('your-active-link');

        } else {
            entries[0].target.classList.remove('your-active-class');
            activeClass.classList.remove('your-active-link');

        }
    }
    // intersection observer option
const option = {
    threshold: .25
}

//there the function that starts the page and its at the end of the js file so all the function is read by the browser first
creatingNavBar();
