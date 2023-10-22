document.addEventListener('DOMContentLoaded', function() {
    

    const elementsToAnimate = document.querySelectorAll('.Jasmine, .woman-img, .about-heading, h4, h3, .card-examples, .donate-text, .artist-text');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                console.log(entry.target.className)
                entry.target.style.opacity = '1';
                if (entry.target.classList.contains('woman-img')) {
                    console.log("running woman-img animation")
                    entry.target.style.transform = 'translateX(0)';
                } else {
                    console.log('animating other classes')
                    entry.target.style.transform = 'translateY(0)';
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    
});

//speech bubbles

const women = document.querySelectorAll(".woman");

//listen for hover
women.forEach(woman => {
    woman.addEventListener("mouseenter", function() {
        const textElement = this.querySelector(".bubble-text");
        const text = getTextForWoman(this.classList[1]); 
        animateText(textElement, text);
    });
});

//add text to speech bubble
function getTextForWoman(name) {
    const texts = {
        greta: "This is Greta's quote.",
        rosa: "This is Rosa's quote.",
        lux: "This is Lux's quote."
    };

    return texts[name] || "";
}

//typing animation
function animateText(element, text) {
    element.textContent = "";
    let index = 0;
    console.log(text)//testing
    console.log(element)//testing
    function type() {
        //if index is less then the length of the text for the quote, only one letter 
        //at a time will render on the screen.
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }

    type();
}


//tilt hero images 'dance'

// const tiltImages = document.querySelectorAll('.greta, .rosa, .lux');
// const windowHeight = window.innerHeight;

// function checkPosition() {
//     for (let img of tiltImages) {
//         const topOfElement = img.getBoundingClientRect().top;

//         // Check if the image is in view otherwise the animation stops
//         if (topOfElement < windowHeight && topOfElement + img.clientHeight > 0) {
//             img.classList.add('startTilt');
//         } else {
//             img.classList.remove('startTilt');
//         }
//     }
// }

// window.addEventListener('scroll', checkPosition);
// checkPosition(); //run check


const navIcon = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');

navIcon.addEventListener('click', function() {
    if (mobileNav.style.display === 'block') {
        mobileNav.style.display = 'none';
    } else {
        mobileNav.style.display = 'block';
    }
});


