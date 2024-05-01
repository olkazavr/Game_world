const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".game");

searchInput.addEventListener("keyup", function(event){
    const word = event.target.value.toLowerCase();
    
    divs.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none")
    })
})


document.addEventListener("DOMContentLoaded", function() {
    let imageContainers = document.querySelectorAll('.image-container');
    const overlayButtons = document.querySelectorAll('.overlay-button');

    imageContainers.forEach(function(item, index) {
        item.onmouseover = function() {
        overlayButtons[index].style.display = 'block';
    };

        item.onmouseout = function() {
        overlayButtons[index].style.display = 'none';
    };
    });
});