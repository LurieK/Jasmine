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


