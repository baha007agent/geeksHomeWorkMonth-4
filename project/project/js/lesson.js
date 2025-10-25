const phonelInput = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneResult = document.querySelector("#phone_result")

const regExp = /^\+996 [5729]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.addEventListener("click", () => {
  console.log(phonelInput.value);
  if (regExp.test(phonelInput.value)) {
    phoneResult.innerText = "OK"
    phoneResult.style.color = "green"
  } else {
    phoneResult.innerText = "NO"
    phoneResult.style.color = "red"
  }
}) 