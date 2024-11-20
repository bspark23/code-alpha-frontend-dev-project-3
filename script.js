/* HOME PAGE*/
const dynamicText = document.getElementById('dynamic-text');
const texts = ["Web Developer/Designer", "Full Stack Developer","Graphic Designer","WordPress E-commerce Developer"];
let index = 0;
let textIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (isDeleting) {
        currentText = texts[index].substring(0, textIndex--);
    } else {
        currentText = texts[index].substring(0, textIndex++);
    }

    dynamicText.innerText = currentText;

    if (textIndex === texts[index].length) {
        isDeleting = true;
    } else if (textIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; // Cycle through the texts
    }

    setTimeout(type, isDeleting ? 100 : 200); // Typing speed
}

document.addEventListener("DOMContentLoaded", () => {
    type(); // Start typing effect
});


/* SERVICES PAGE*/
function changeText(element) {
    element.querySelector('h2').textContent = 'Grow';
}

function resetText(element) {
    if (element.querySelector('h2').textContent === 'Grow') {
        let originalText = element.querySelector('h2').nextElementSibling.textContent.includes('boost') ? 'Growth Strategy' :
                           element.querySelector('h2').nextElementSibling.textContent.includes('results') ? 'Great Results' :
                           element.querySelector('h2').nextElementSibling.textContent.includes('expertise') ? 'Quality Expertise' :
                           element.querySelector('h2').nextElementSibling.textContent.includes('24/7') ? 'Support 24/7' :
                           element.querySelector('h2').nextElementSibling.textContent.includes('marketing') ? 'Digital Marketing' :
                           'Graphic Design';
        element.querySelector('h2').textContent = originalText;
    }
}

function goHome() {
    window.location.href = 'index.html'; // Change to your actual home page path if needed
}
