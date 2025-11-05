const modal = document.querySelector(".modal")
const btnTriger = document.querySelector("#btn-get")
const modalCloseTrigger = document.querySelector(".modal_close")

const openModal = () => {
  modal.style.display = "block"
}

setInterval(() => {
  openModal()
}, 20000);

const closeModal = () => {
  modal.style.display = "none"
}

const removeScroll = () => {
  window.removeEventListener("scroll", scrollOpenModal)
}

const scrollOpenModal = () => {
  const scrolled = document.documentElement.scrollTop;
  const viewport = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrolled + viewport >= fullHeight - 50) {
    console.log('Доскроллил до низа!');
    openModal()
    removeScroll()
  }
}
window.addEventListener("scroll", scrollOpenModal)



btnTriger.onclick = openModal
modalCloseTrigger.onclick = closeModal
modal.onclick = (event) => {
  if (event.target === modal) {
    closeModal()
  }
}