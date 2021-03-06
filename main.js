const message = document.querySelector("#message")

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector("input")
    console.log(inputField)

    const movie = document.createElement("li")

    const movieTitle = document.createElement("span")
    // console.log(movieTitle)
    movieTitle.textContent = inputField.value

    // listen for click event to crossOffMovie
    movieTitle.addEventListener("click", crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie)

    inputField.value = ""
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()

    // tells user that they deleted the movie
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`

    // call revealMessage
    revealMessage()
}

// function that crosses off movie if selected
const crossOffMovie = (event) => {
    // .classList knows the target will be a class
    event.target.classList.toggle("checked")

    // tells user that they crossed off the movie
    if (event.target.classList.contains("checked")) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    // call revealMessage
    revealMessage()
}

// function that will hide message after x amount of time
const revealMessage = () => {
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 10000)
}

document.querySelector("form").addEventListener("submit", addMovie)