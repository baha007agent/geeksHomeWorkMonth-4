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

const CONVERTER_API = "../data/converter.json"

const converter = async (element) => {
  try {
    const response = await fetch(CONVERTER_API)
    const data = await response.json()

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
  } catch (error) {
    console.log("error");

  }
}

converter(inputSom, inputUsd)
converter(inputUsd, inputSom)
converter(inputEur, inputSom)
converter(inputSom, inputEur)
converter(inputEur, inputUsd)
converter(inputUsd, inputEur)


// --------------------- home work number 6.1 ----------------------------------------------

const card = document.querySelector(".card")
const btnNext = document.querySelector("#btn-next")
const btnPrev = document.querySelector("#btn-prev")

let indexData = 1

const api = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${indexData}`)
  const data = await response.json()
  const { title, completed, id } = data
  card.innerHTML = `
      <p>${title}</p>
      <p style="color: ${completed ? "green" : "red"}">
       ${completed} 
      </p>
      <span>${id}</span>
      `
}

api()

btnNext.onclick = () => {
  indexData++
  if (indexData > 200) {
    indexData = 1
  }
  api()
}

btnPrev.onclick = () => {
  indexData--
  if (indexData == 0) {
    indexData = 200
  }
  api()
}

// --------------------- home work number 6.2 ----------------------------------------------

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))


// -----------------------

const API_WEATHER = "https://api.openweathermap.org/data/2.5/weather"
const API_WEATHER_KEY = "e417df62e04d3b1b111abeab19cea714"

const searchCity = document.querySelector("#cityName")
const searchCityBtn = document.querySelector("#search")

const city = document.querySelector(".city")
const temp = document.querySelector(".temp")


searchCityBtn.onclick = async () => {
  try {
    if (searchCity.value !== "") {
      const response = await fetch(`${API_WEATHER}?q=${searchCity.value}&units=metric&lang=ru&appid=${API_WEATHER_KEY}`)
      const data = await response.json()
      if (data.name) {
        city.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp) + "&#8451"
      } else {
        city.innerHTML = "Город не найден"
        city.style.color = "red"
        temp.innerHTML = " "
      }
      searchCity.value = ""
    } else {
      console.log("ro");
      city.innerHTML = "Введите название города..."
      temp.innerHTML = " "
      city.style.color = "red"
    }
  } catch (error) {
    console.log("error");
  }
} 