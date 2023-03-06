// Variables

const searchSpace = document.querySelector(".search-space")
const searchButton = document.querySelector(".search-button")
const searchResults = document.querySelector(".search-results")
let htmlList


// Fonctions

fetch("htmlList.json")
    .then(res => res.json())
    .then(data => htmlList = data)

function clearResults() {
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild)
    }
}

function searchIn(thingToSearch) {
    htmlList.forEach(el => {
        if (el.name.toLowerCase().includes(thingToSearch)) {
            searchResults.classList.remove("hidden")
            let newMatch = document.createElement("a")
            newMatch.textContent = el.name
            newMatch.href = el.file + "#" + el.id
            searchResults.appendChild(newMatch)
        }
    })
}


// Events

searchSpace.addEventListener("focus", () => {
    searchResults.classList.remove("hidden")
})

searchSpace.addEventListener("blur", () => {
    setTimeout(() => searchResults.classList.add("hidden"), "100")
})

searchSpace.addEventListener("input", () => {
    let thingToSearch = searchSpace.value.toLowerCase()
    clearResults()
    searchIn(thingToSearch)
})