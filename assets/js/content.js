var gameBox = document.querySelectorAll(".highlights-gamebox");
var btnLeft = document.querySelector(".left");
var btnRight = document.querySelector(".right");
let currentIndex = 0;

function showSlide(index){
    gameBox.forEach(item => {
        item.style.display = 'none';
    })

    gameBox[index].style.display = 'flex';
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % gameBox.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + gameBox.length) % gameBox.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);

btnLeft.addEventListener("click", previousSlide);
btnRight.addEventListener("click", nextSlide);

