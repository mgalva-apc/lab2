var container = document.getElementById("slideshow-container");
var slides = container.getElementsByClassName("berry-slide");

function showSlides(s, i) {
    s[i].style.opacity = "1";

    if (i == 0) {
        s[s.length-1].style.opacity = "0";
    } else {
        s[i-1].style.opacity = "0";
    }

    i++;
    if (i >= s.length) {
        i = 0;
    }
    setTimeout(function () { showSlides(s, i) }, 5000);
}

showSlides(slides, 0);