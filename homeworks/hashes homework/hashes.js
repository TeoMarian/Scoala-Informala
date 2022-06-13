`use strict`;
let defineHash;

const setHash = document.querySelector(`#setHash`);
const goBack = document.querySelector(`#goBack`);
const goForward = document.querySelector(`#goForward`);
const aboutPage = document.querySelector(`#aboutPage`);

aboutPage.addEventListener(`click`, aboutFunction);
goBack.addEventListener(`click`, goBackFunction);
goForward.addEventListener(`click`, goForwardFunction);
setHash.addEventListener(`click`, hashSet);
window.addEventListener(`popstate`, e => {
    console.log(`The user went through browser history.`);
});

function aboutFunction() {
    history.pushState(null, null, `about`);
}

function goForwardFunction() {
    history.forward();
}

function goBackFunction() {
    history.back();
}

function hashSet() {
    defineHash = document.querySelector(`#defineHash`).value;
    location.hash = defineHash;
    console.log(`New hash was set`);
    alert(`New hash was set`);
}