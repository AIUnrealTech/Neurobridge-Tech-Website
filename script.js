/*
Accordion - Code Embed
*/
const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = 'none'; // Hides all accordion contents
});

accordionIconsClosed.forEach((icon) => {
    icon.style.display = 'flex';
});

accordionIconsOpen.forEach((icon) => {
    icon.style.display = 'none';
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener('click', () => {
        if (accordionContents[index].style.display === 'flex') {
            // If the accordion is already open, close it
            accordionContents[index].style.display = 'none';
            accordionIconsClosed[index].style.display = 'flex';
            accordionIconsOpen[index].style.display = 'none';
        } else {
            // If the accordion is closed, open it
            accordionContents.forEach((accordionContent) => {
                accordionContent.style.display = 'none'; // Hides all accordion contents
            });
            accordionIconsClosed.forEach((accordionIcon) => {
                accordionIcon.style.display = 'flex'; // Resets all icon transforms to 0deg (default)
            });
            accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = 'none';
            });
            accordionContents[index].style.display = 'flex'; // Shows accordion content
            accordionIconsClosed[index].style.display = 'none'; // Rotates accordion icon 180deg
            accordionIconsOpen[index].style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // get the element with the 'scroll-top' data-role
    const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');
    // when the element is clicked
    scrollTopBtn.addEventListener('click', function () {
        // smoothly scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function openContactForm() {
    document.getElementById('contactFormOverlay').style.display = 'flex';
}

function closeContactForm() {
    document.getElementById('contactFormOverlay').style.display = 'none';
}



const el = document.querySelector('.blaze-slider');

new BlazeSlider(el, {
    all: {
        slidesToShow: 3,
        slideGap: '80px',
        loop: true,
        enableAutoplay: true,
    },
});

// Get the slide titles and carousel sliders
const slideTitles = document.querySelectorAll('.slide-title');
const sliders = document.querySelectorAll('.blaze-slider');

// Add click event listeners to each slide title
slideTitles.forEach((title, index) => {
    title.addEventListener('click', () => {
        // Remove the active class from all slide titles
        slideTitles.forEach((t) => t.classList.remove('slide-title-active'));

        // Remove the active class from all sliders
        sliders.forEach((slider) => slider.classList.remove('slider-active'));

        // Add the active class to the clicked slide title
        title.classList.add('slide-title-active');

        // Add the active class to the corresponding slider
        sliders[index].classList.add('slider-active');
    });
});
