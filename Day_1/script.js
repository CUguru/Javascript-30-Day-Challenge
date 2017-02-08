function playAudio(e) {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) { // stop function from running
    return;
  }
  audio.currentTime = 0; // rewind audio to the start
  audio.play();
  key.classList.add('playing');
}


function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return; // skip if the property is not the transform property
  }
  this.classList.remove('playing');
  console.log(this);
  console.log(e.propertyName);
  // console.log(e);
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playAudio);
