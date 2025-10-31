const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const gmailResult = document.querySelector("#gmail_result")

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.addEventListener("click", () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK"
    gmailResult.style.color = "green"
  } else {
    gmailResult.innerText = "NO"
    gmailResult.style.color = "red"
  }
})

const parentBlock = document.querySelector(".parent_block")
const childBlock = document.querySelector(".child_block")

const width = parentBlock.clientWidth - childBlock.offsetWidth
const height = parentBlock.clientHeight - childBlock.offsetWidth

let positionX = 0;
let positionY = 0;

const moveBlock = () => {

  if (positionX < width && positionY === 0) positionX++;
  else if (positionX >= width && positionY < height) positionY++;
  else if (positionY >= height && positionX > 0) positionX--;
  else if (positionX === 0 && positionY > 0) positionY--;

  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;
  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;

  requestAnimationFrame(moveBlock)
}

moveBlock();

// --------------------------------------home work number 2------------------------------------------------

const seconds = document.querySelector("#seconds")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const reset = document.querySelector("#reset")

let num = 0
let interval = null

start.onclick = () => {
  clearInterval(interval)
  interval = setInterval(() => {
    num++
    seconds.innerText = num
  }, 100);
}

stop.onclick = () => {
  clearInterval(interval)
}
console.log(seconds.innerText);

reset.onclick = () => {
  seconds.innerText = 0
  num = 0
}