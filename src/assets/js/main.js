const keys = document.querySelectorAll('.key')

function playNote(event) {
    // keyCode
    let audioKeyCode = getkeyCode(event)

    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    // if key exists 
    const isKeyExists = key

    if(!isKeyExists) {
        return
    }
    
    // play audio
    addPlayingClass(key)

    playAudio(audioKeyCode)
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function addPlayingClass(key){
    key.classList.add('playing') 
}

function removePlayingClass(event){
    event.target.classList.remove('playing') 
}

function getkeyCode(event){
    let keyCode
    const isKeyBoard = event.type === 'keydown' // True or False 
    if(isKeyBoard) {
        keyCode = event.keyCode
    }

    else{
        keyCode = event.target.dataset.key
    }

    return keyCode
}

function registerEvents(){
    // Click with mouse
    keys.forEach(key => {
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    })

    // Keyboard type 
    window.addEventListener('keydown', playNote) 
}

window.addEventListener('load', registerEvents)