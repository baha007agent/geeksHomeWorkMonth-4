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

// --------------------------------home work number 3---------------------------------------------

const tabContentBlocks = document.querySelectorAll(".tab_content_block")
const tabContentItems = document.querySelector(".tab_content_items")
const tabs = document.querySelectorAll(".tab_content_item")


const hideTabContent = () => {
  tabContentBlocks.forEach((block) => {
    block.style.display = "none"
  })
  tabs.forEach((tab) => {
    tab.classList.remove("tab_content_item_active")
  })
}

let blockIndex = 0
let interval

const showTabContent = (blockIndex) => {
  tabContentBlocks[blockIndex].style.display = "block"
  tabs[blockIndex].classList.add("tab_content_item_active")
}

const startAutoTabs = () => {
  interval = setInterval(() => {
    hideTabContent()
    showTabContent(blockIndex)
    blockIndex++
    if (blockIndex === tabs.length) {
      blockIndex = 0
    }
  }, 5000);
}


hideTabContent()
showTabContent(0)

tabContentItems.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabs.forEach((tab, index) => {
      if (event.target === tab) {
        clearInterval(interval)
        hideTabContent()
        showTabContent(index)
        blockIndex = index
        startAutoTabs()
      }
    })
  }
}

startAutoTabs()

// ---------------------- home work number 5 ----------------------------------

const inputSom = document.querySelector("#som")
const inputUsd = document.querySelector("#usd")
const inputEur = document.querySelector("#eur")

const converter = (element, targetElement) => {
  element.oninput = () => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "../data/converter.json")
    xhr.send()

    xhr.onload = () => {
      const data = JSON.parse(xhr.response)

      const som = +inputSom.value
      const usd = +inputUsd.value
      const eur = +inputEur.value

      if (element.id === "som") {
        inputUsd.value = (som / data.usd).toFixed(2)
        inputEur.value = (som / data.eur).toFixed(2)
      }

      if (element.id === "usd") {
        inputSom.value = (usd * data.usd).toFixed(2)
        inputEur.value = ((usd * data.usd) / data.eur).toFixed(2)
      }

      if (element.id === "eur") {
        inputSom.value = (eur * data.eur).toFixed(2)
        inputUsd.value = ((eur * data.eur) / data.usd).toFixed(2)
      }
      if (element.value === "") {
        inputSom.value = ""
        inputUsd.value = ""
        inputEur.value = ""
      }
    }
  }
}

converter(inputSom, inputUsd)
converter(inputUsd, inputSom)
converter(inputEur, inputSom)
converter(inputSom, inputEur)
converter(inputEur, inputUsd)
converter(inputUsd, inputEur)