const card = document.querySelector(".cards")

const API = "https://picsum.photos/v2/list?page=2&limit=30"

async function getPhotos() {
  try {
    const response = await fetch(API)
    const data = await response.json()
    console.log(data);


    data.forEach(e => {
      card.innerHTML += `
      <div class="card">
          <img
            src="${e.download_url}"
            alt=""
            width="250px"
          />
          <h1 class="title-card">${e.author}</h1>
        </div>
    `
    });

  } catch (error) {
    console.log("error");
  }
}

getPhotos()
