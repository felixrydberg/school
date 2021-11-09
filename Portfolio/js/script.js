// Nav-Dropdown Start

const dropButton = document.querySelector(".nav-dropbutton")

dropButton.addEventListener("click", navdropdown);

function navdropdown() {
    document.getElementById("nav-dropcontent").classList.toggle("display-block");
}
window.onclick = function(event) {
    console.log("lmao onclick window")
    if (!event.target.matches('.nav-dropbutton')) {
        var dropdowns = document.getElementsByClassName("nav-dropcontent");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('display-block')) {
            openDropdown.classList.remove('display-block');
        }
        }
    }
}


// 