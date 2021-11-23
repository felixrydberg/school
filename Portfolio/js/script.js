const body = document.querySelector("body");

// Nav-Dropdown Start

const dropButton = document.querySelector(".nav-dropbutton")

dropButton.addEventListener("click", navdropdown);

function navdropdown() {
    document.getElementById("nav-dropcontent").classList.toggle("display-block");
}
window.onclick = function(event) {
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


// Portfolio Start 

let links = [
    "#",
    "#",
    "#",
    "#",
    "#"],
names = [
    "#",
    "#",
    "#",
    "#",
    "#"],
desc = [
    "#",
    "#",
    "#",
    "#",
    "#"];
imgname = [
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png",
    "logo.png"];

spawnPortfolio(links, names, desc, imgname);

function spawnPortfolio(links, names, desc, imgname) {
    const portPar = document.querySelector(".portfolio");
    if (links.length == names.length && links.length == desc.length && links.length == imgname.length) {
        for(let i = 0; i < links.length; i++) {
            const article = document.createElement("article"),
            img = document.createElement("img"),
            h1 = document.createElement("h1"),
            p = document.createElement("p");
            let color = (20 / links.length * i) + 30; 
            portPar.appendChild(article);
            article.appendChild(img)
            article.appendChild(h1);
            article.appendChild(p);
            img.setAttribute('src', 'image/portfolio/' + imgname[i]);
            h1.innerHTML = names[i];
            p.innerHTML = desc[i];
            console.log(color);
            article.style.background = `hsl 0, 0%, ${color}%)`
        }
    }
    else {
        console.log("Array lenght failure");
    }
}