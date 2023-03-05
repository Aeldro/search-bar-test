// Genère la barre de navigation et de recherche

// const searchBar = document.querySelector(".search-bar")
// const navBar = document.querySelector(".nav-bar")

//     fetch("searchBar.html")
//         .then(res => res.text())
//         .then(data => searchBar.innerHTML = data)

//     fetch("navBar.html")
//         .then(res => res.text())
//         .then(data => navBar.innerHTML = data)

// Logique de la barre de recherche

const searchSpace = document.querySelector(".search-space")
const searchButton = document.querySelector(".search-button")
const searchResults = document.querySelector(".search-results")
let thingToSearch
let htmlList

fetch("htmlList.json")
    .then(res => res.json())
    .then(data => htmlList = data)

searchButton.addEventListener("click", () => {
    thingToSearch = searchSpace.value.toLowerCase()
    while(searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild)
    }
    htmlList.forEach(el => {
        console.log(el.id)
        if (thingToSearch === "") {
            searchResults.classList.add("hidden")
        } else {
            if (el.name.toLowerCase().includes(thingToSearch)) {
                searchResults.classList.remove("hidden")
                let newMatch = document.createElement("a")
                newMatch.textContent = el.name
                newMatch.href = el.file + "#" + el.id
                searchResults.appendChild(newMatch)
            }
        }
    })
})











let firstDiv = document.querySelectorAll("div")
// let secondDiv = document.querySelector(".second-div")
// let thirdDiv = document.querySelector(".third-div")
let button = document.querySelector("button")
let numberOfHtml

button.addEventListener("click", () => {
    console.log("Working")
    firstDiv.forEach(el => el.classList.toggle("hidden"))
    // firstDiv.classList.toggle("hidden")
    fetch('./search-bar-test')
        .then(res => res.text())
        .then(data =>
            setHtml(data))
}
)

function setHtml(e) {
    numberOfHtml = e
}