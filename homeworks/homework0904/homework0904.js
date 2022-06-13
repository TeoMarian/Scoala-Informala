`use strict`;
const pickAnimal = document.querySelector("#pickAnimal");
const requestPhoto = document.querySelector("#requestPhotoButton");
let requestedPhoto = document.querySelector("#requestedPhoto");

function onButtonClick() {
    requestedPhoto.innerHTML = "";
    let selectedOption = pickAnimal.options[pickAnimal.selectedIndex].value;
    console.log(selectedOption);
    if (selectedOption === "cat") {
        getCatPhoto();
    } else if (selectedOption === "dog") {
        getDogPhoto();
    } else if (selectedOption === "fox") {
        getFoxPhoto();
    }
}

function displayImage(src) {
    const htmlImage = `<div id="requestedPhoto"><img alt="requested photo" class="requestedPhoto" src="${src}"/></div > `;
    requestedPhoto.insertAdjacentHTML("beforeend", htmlImage);
}

function getPhoto(apiURL) {
    return fetch(apiURL).then((response) => response.json());
}

function getCatPhoto() {
    let catImage = getPhoto("https://api.thecatapi.com/v1/images/search");
    catImage.then(function (response) {
        displayImage(response[0].url);
    });
    console.log(catImage);
    //   fetch("https://api.thecatapi.com/v1/images/search")
    //     .then((response) => response.json())
    //     .then(function (data) {
    //       console.log(data);
    //       const htmlImage = `<div id="requestedPhoto"><img alt="requested photo" class="requestedPhoto" src="${data[0].url}"/></div > `;
    //       requestedPhoto.insertAdjacentHTML("beforeend", htmlImage);
    //     });
}

function getDogPhoto() {
    let dogImage = getPhoto("https://dog.ceo/api/breeds/image/random");
    dogImage.then(function (response) {
        displayImage(response.message);
    });
    //   fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((response) => response.json())
    //     .then(function (data) {
    //       console.log(data);
    //       const htmlImage = `<div id="requestedPhoto"><img alt="requested photo" class="requestedPhoto" src="${data.message}"/></div > `;
    //       requestedPhoto.insertAdjacentHTML("beforeend", htmlImage);
    //     });
}

function getFoxPhoto() {
    let foxImage = getPhoto("https://randomfox.ca/floof/");
    foxImage.then(function (response) {
        displayImage(response.image);
    });
    //   fetch("https://randomfox.ca/floof/")
    //     .then((response) => response.json())
    //     .then(function (data) {
    //       console.log(data);
    //       const htmlImage = `<div id="requestedPhoto"><img alt="requested photo" class="requestedPhoto" src="${data.image}"/></div > `;
    //       requestedPhoto.insertAdjacentHTML("beforeend", htmlImage);
    //     });
}

photoRequestButton.addEventListener("click", onButtonClick);
window.addEventListener("load", onButtonClick);