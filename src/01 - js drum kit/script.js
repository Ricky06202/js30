window.addEventListener("keydown", playSound);

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  if (!audio) return; // Stop the function if no audio is found
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  const key = document.querySelector(`.key[data-key="${event.code}"]`);
  key.classList.add("playing");
  key.addEventListener("transitionend", handleTransitionEnd);
}

function handleTransitionEnd(event) {
    if (event.propertyName !== "transform") return; // Only remove class on transform end
    this.classList.remove("playing");
    console.log("Transition ended for key:", this);
  }