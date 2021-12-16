// Add event listeners
document.querySelector("header .form-latlon").addEventListener('submit', function(event){event.preventDefault(); fetchURL(`https://api.weatherbit.io/v2.0/forecast/daily?units=M&lang=sv&&lat=${document.querySelector(".input-lat").value}&lon=${document.querySelector(".input-lon").value}&key=be8ff8960a0b4942be77aa7dc4843b08&days=6`, displaymain)});
document.querySelector("header .form-city").addEventListener('submit', function(event){event.preventDefault(); fetchURL(`https://api.weatherbit.io/v2.0/forecast/daily?units=M&lang=sv&city=${document.querySelector(".input-city").value}&key=be8ff8960a0b4942be77aa7dc4843b08&days=6`, displaymain)});

function fetchURL(url, callback) {
    fetch(url).then(
        function(response){
            if(response.status >= 200 && response.status <300){
                return response.json();
            }
            else{
                throw 'Fetch failed';
            }
        }).then(function(data){
            callback(data);})
        .catch((error) => errors(error));
}

function errors(error) {
    console.log(error);
}

function displaymain(json) {
    console.log(json)
}

function displayside(json) {
    console.log(json)
    for(let i = 0; i < 5; i++){
        let article = document.createElement("article");
        let button = document.createElement("button");
        let ul = document.createElement("ul");
        let li = document.createElement("li")
        if(window.innerWidth > 1300) {
            document.querySelector("header").appendChild(article).classList.add("article-days");
        }
        else{
            document.querySelector("main").appendChild(article).classList.add("article-days");
        }
        article.classList.add(i)
        article.appendChild(ul).classList.add("days-title");
        ul.appendChild(li);
        li.appendChild(document.createElement("img")).src="#"
        ul.appendChild(document.createElement("li")).innerHTML=`Temp °C`



        article.appendChild(button).classList.add("button-others");
        button.innerHTML="Others"
        button.setAttribute("type", "button")
        article.addEventListener('click', function(){
            if(event.target===button){
                displayothers(this)
            }
        })
    }
}

function displayothers(parent) {
    if(parent.classList.contains("spawned")){

    }
    else {
        let index = 0;
        let ul = document.createElement("ul");
        let classes = [
            "w-speed",
            "w-dir",
            "s-rise",
            "s-set",
            "last-ob"
        ];
        if(parent.classList.contains("0")){
            index = 0;
        }
        else if(parent.classList.contains("1")){
            index = 1;
        }
        else if(parent.classList.contains("2")){
            index = 2;
        }
        else if(parent.classList.contains("3")){
            index = 3;
        }
        else if(parent.classList.contains("4")){
            index = 4;
        }
        console.log(parent);
        parent.appendChild(ul).classList.add("ul-others");
        for(let i = 0; i < classes.length; i++){
            let li = document.createElement("li");
            li.innerHTML=`${index}`;
            ul.appendChild(li).classList.add(classes[i])
        }
    }







}

displayside("test")