let playAudio = (e) => {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);

    if (!audio) {
        return; //Stops function from running if you press an invalid key

    };
    audio.currentTime = 0;  //rewind audio to start each time the key is pressed

    audio.play(); //Plays audio
    key.classList.add('playing') //Adds styles to the pressed key
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') {return} //Stops function if you press an invalid key
    this.classList.remove("playing") //Removes styles after the transition has ended
}

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playAudio) //Listens for key presses 

keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition) 
)