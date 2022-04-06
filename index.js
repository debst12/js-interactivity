
const message = document.querySelector('#message')

const addMovie = event => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click',crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click',deleteMovie)
    document.querySelector('ul').appendChild(movie)
    movie.appendChild(deleteBtn)
    inputField.value = ''


}

const deleteMovie = event => {
    const movieTitle = event.target.parentNode.firstChild.textContent
    event.target.parentNode.remove()
    message.textContent = `${movieTitle} has been removed.`
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} has been watched!`
    } else{
        message.textContent = `${event.target.textContent} has been unwatched!`
    }
    revealMessage()
}

const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() => {
        message.classList.add('hide')
    },1000) 
}
document.querySelector('form').addEventListener('submit',addMovie);

