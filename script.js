changeImage();

function fetchCatImage() {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data[0].url;
      return data[0].url; // Return the image URL
    });
}

const button = document.getElementById("button");
const image = document.getElementById("flipImage");

button.onclick = function () {
  //document.getElementById("text").textContent = "Det er en chrome extension.";
  // image.classList.toggle("flipped");

  changeImage();
};

function changeImage() {
  fetchCatImage().then((imageUrl) => {
    image.src = imageUrl;
    image.alt = "Random Cat";
  });
}
