var modalBtn = document.getElementById("berry-button1");
var modal = document.getElementById("berry-modal");
modalBtn.addEventListener('click', function() { modal.showModal() } );
var cancelBtn = document.getElementById("berry-cancel");
cancelBtn.addEventListener('click', function() { modal.close()} );
var vidSlides = document.getElementById("berry-slidebox").getElementsByClassName("berry-vids");
var txtSlides = document.getElementById("berry-slidebar").getElementsByClassName("slidebar-content");
var index = 0;
function showSlides(n){ //LESSON 18.1 FUNCTIONS
    index += n;
    for (let i=0; i<vidSlides.length; ++i) { //LESSON 10.6 iterables + LESSON 10.1 LOOP FOR
        vidSlides[i].style.opacity = "0";
        txtSlides[i].style.opacity = "0";
    }
    if (index >= vidSlides.length) {
        index = 0;
    }
    if (index < 0) {
        index=vidSlides.length-1;
    }
    vidSlides[index].style.opacity = "1"
    txtSlides[index].style.opacity = "1"
}
showSlides(0) //LESSON 17.4 METHODS
