const displayJoke = document.getElementById("display-joke");

let btn = document.getElementById("getjoke");

btn.addEventListener("click",getRandomJoke)

// function getRandomJoke(){

//     fetch("https://api.chucknorris.io/jokes/random")
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         displayJoke.innerHTML =data.value
//     })

// }


// another method using axios
function getRandomJoke(){

    axios.get("https://api.chucknorris.io/jokes/random")

    .then(function(res){

     displayJoke.innerHTML =   res.data.value

    })
}