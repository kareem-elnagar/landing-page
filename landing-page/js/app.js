/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 */
const sections = document.getElementsByTagName("section")
const ul = document.querySelector("ul")
const fragment = new DocumentFragment

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */
function creatingNavBar() {
    // build the nav
    for (const section of sections) {
        const listItem = document.createElement("li")
        const anchor = document.createElement("a")
        anchor.id = `${section.id}`
        anchor.classList = "menu__link"
        anchor.innerHTML = `${section.id}`
        anchor.href = `#${section.id}`
        listItem.appendChild(anchor)
        fragment.appendChild(listItem)
            // Scroll to section on link click
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            // Scroll to anchor ID using scrollinto event
            // smooth scrolling function
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

        if (entries[0].isIntersecting) {
            entries[0].target.classList.add('your-active-class');
        } else {
            entries[0].target.classList.remove('your-active-class');
        }
    }
    // intersection observer option
const option = {
    threshold: 0.55
}







/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 













creatingNavBar();