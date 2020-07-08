/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/* Carousel */

const carouselTrack = document.querySelector(".carousel_track-container");
const carouselImages = document.querySelectorAll(".carousel_track-container img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselTrack.style.transform = "translateX(" + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    console.log(counter);
    carouselTrack.style.transition = "transform 0.4s ease-in-out";
    carouselTrack.style.transform = "translateX(" + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    console.log(counter);
    carouselTrack.style.transition = "transform 0.4s ease-in-out";
    carouselTrack.style.transform = "translateX(" + (-size * counter) + 'px)';
});

 carouselTrack.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselTrack.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselTrack.style.transform = "translateX(" + (-size * counter) + 'px)';
    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselTrack.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselTrack.style.transform = "translateX(" + (-size * counter) + 'px)';
    }
 })