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
}); */

$(document).ready(function () {
    if ($(".comparison-slider-wrapper .comparison-slider")[0]) {
        let compSlider = $(".comparison-slider-wrapper .comparison-slider");

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



function drags(dragElement, resizeElement, container) {
    let touched = false;
    window.addEventListener("touchstart", function () {
        touched = true;
    });
    window.addEventListener("touchend", function () {
        touched = false;
    });

    dragElement.on("mousedown touchstart", function (e) {
        dragElement.addClass("draggable");
        resizeElement.addClass("resizable");
        let startX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
        let dragWidth = dragElement.outerWidth();
        let posX = dragElement.offset().left + dragWidth - startX;
        let containerOffset = container.offset().left;
        let containerWidth = container.outerWidth();
        let minLeft = containerOffset + 10;
        let maxLeft = containerOffset + containerWidth - dragWidth - 10;

        dragElement.parents().on("mousemove touchmove", function (e) {
            if (touched === false) {
                e.preventDefault();
            }

            let moveX = e.pageX ? e.pageX : e.originalEvent.touches[0].pageX;
            let leftValue = moveX + posX - dragWidth;

            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            let widthValue =
                ((leftValue + dragWidth / 2 - containerOffset) * 100) / containerWidth + "%";

            $(".draggable").css("left", widthValue).on("mouseup touchend touchcancel", function () {
                $(this).removeClass("draggable");
                resizeElement.removeClass("resizable");
            });

            $(".resizable").css("width", widthValue);
        }).on("mouseup touchend touchcancel", function () {
            dragElement.removeClass("draggable");
            resizeElement.removeClass("resizable");
        });
    }).on("mouseup touchend touchcancel", function (e) {
        dragElement.removeClass("draggable");
        resizeElement.removeClass("resizable");
    });
}

$("#slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });