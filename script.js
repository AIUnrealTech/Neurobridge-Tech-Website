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


/* 
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
}); */

/*------------------------------------------------ SLIDERS-------------------------------------------- */

/* $(document).ready(function () {
    if ($(".comparison-slider")[0]) {
        let compSlider = $(".comparison-slider");

        compSlider.each(function () {
            let compSliderWidth = $(this).width() + "px";
            $(this).find(".resize img").css({ width: compSliderWidth });
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
        });

        $(window).on("resize", function () {
            let compSliderWidth = compSlider.width() + "px";
            compSlider.find(".resize img").css({ width: compSliderWidth });
        });
    }
}); 


$(document).ready(function () {
    // If the comparison slider is present on the page lets initialise it, this is good you will include this in the main js to prevent the code from running when not needed
    if ($(".comparison-slider")[0]) {
        let compSlider = $(".comparison-slider");

        //let's loop through the sliders and initialise each of them
        compSlider.each(function () {
            let compSliderWidth = $(this).width() + "px";
            $(this).find(".resize img").css({ width: compSliderWidth });
            drags($(this).find(".divider"), $(this).find(".resize"), $(this));
        });

        //if the user resizes the windows lets update our variables and resize our images
        $(window).on("resize", function () {
            let compSliderWidth = compSlider.width() + "px";
            compSlider.find(".resize img").css({ width: compSliderWidth });
        });
    }
}); */




function initComparisons() {
    var x, i;
    /*find all elements with an "overlay" class:*/
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
        /*once for each "overlay" element:
        pass the "overlay" element as a parameter when executing the compareImages function:*/
        compareImages(x[i]);
    }
    function compareImages(img) {
        var slider, img, clicked = 0, w, h;
        /*get the width and height of the img element*/
        w = img.offsetWidth;
        h = img.offsetHeight;
        /*set the width of the img element to 50%:*/
        img.style.width = (w / 2) + "px";
        /*create slider:*/
        slider = document.createElement("DIV");
        slider.setAttribute("class", "img-comp-slider");
        /*insert slider*/
        img.parentElement.insertBefore(slider, img);
        /*position the slider in the middle:*/
        slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
        /*execute a function when the mouse button is pressed:*/
        slider.addEventListener("mousedown", slideReady);
        /*and another function when the mouse button is released:*/
        window.addEventListener("mouseup", slideFinish);
        /*or touched (for touch screens:*/
        slider.addEventListener("touchstart", slideReady);
        /*and released (for touch screens:*/
        window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*the slider is now clicked and ready to move:*/
            clicked = 1;
            /*execute a function when the slider is moved:*/
            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
            /*the slider is no longer clicked:*/
            clicked = 0;
        }
        function slideMove(e) {
            var pos;
            /*if the slider is no longer clicked, exit this function:*/
            if (clicked == 0) return false;
            /*get the cursor's x position:*/
            pos = getCursorPos(e)
            /*prevent the slider from being positioned outside the image:*/
            if (pos < 0) pos = 0;
            if (pos > w) pos = w;
            /*execute a function that will resize the overlay image according to the cursor:*/
            slide(pos);
        }
        function getCursorPos(e) {
            var a, x = 0;
            e = (e.changedTouches) ? e.changedTouches[0] : e;
            /*get the x positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x coordinate, relative to the image:*/
            x = e.pageX - a.left;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            return x;
        }
        function slide(x) {
            /*resize the image:*/
            img.style.width = x + "px";
            /*position the slider:*/
            slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}
initImageComparison();
