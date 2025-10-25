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

const childBlock = document.querySelector(".child_block")

let num = 0;

function count() {
  if (num <= 449) {
    childBlock.style.left = `${num}px`;
  }
  num++;
  requestAnimationFrame(count);
}

count();

