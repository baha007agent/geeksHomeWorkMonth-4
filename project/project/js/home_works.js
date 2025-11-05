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

reset.onclick = () => {
  seconds.innerText = 0
  num = 0
}

// ------------------------- home work number 4.1 ---------------------------------------------

const charactersList = document.querySelector(".characters-list")

const xhr = new XMLHttpRequest()
xhr.open("GET", "../data/characters.json")
xhr.send()

xhr.onload = () => {
  if (xhr.status === 200 || xhr.status === 304) {
    const data = JSON.parse(xhr.response)

    data.forEach((character) => {
      charactersList.innerHTML += `
    <img src="${character.photo}" alt=""/>
      <h1>${character.name}</h1>
      <h4>${character.age}</h4>
    `
    })
  } else {
    console.log("Ошибка", xhr.status);
  }
}

// ------------------------- home work number 4.2 ---------------------------------------------

const xhrBio = new XMLHttpRequest()
xhrBio.open("GET", "../data/bio.json")
xhrBio.send()

xhrBio.onload = () => {
  if (xhrBio.status === 200 || xhrBio.status === 304) {
    const data = JSON.parse(xhrBio.response)
    console.log(data);
  } else {
    console.log("Ошибка", xhr.status);
  }
}
