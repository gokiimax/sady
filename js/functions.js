/* ============================== Clock ============================== */
setInterval(() => {
    var date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}, 0)

/* ============================== Search ============================== */
const searchBar = document.getElementById("searchBar")

searchBar.addEventListener("keypress", (e) => {
    if(e.key == "Enter") {
        if(searchBar.value) {
            window.open(`https://google.com/search?q=${searchBar.value}`)
        }
    }
})

/* ============================== Sidebar ============================== */
const Sidebar = document.getElementById('settings')
const leftMenu = document.querySelector(".leftMenu")
const settingsButton = document.getElementById("settingsBtn")
const settingsForm = document.getElementById("settingsForm")
let isLeftMenuActive = false

settingsButton.addEventListener('click', () => {
    if(!isLeftMenuActive) {
        Sidebar.style.width = '240px';
        settingsForm.style.opacity = "1";

        isLeftMenuActive = true;
    } else {
        Sidebar.style.width = '0px';
        settingsForm.style.opacity = "0";

        isLeftMenuActive = false;
    }
})

/* ============================== Settings ============================== */
const headerText = document.getElementById("headerText")
const header = document.getElementById("header")

const backgroundLink = document.getElementById("bgLink");
const updateBackground = document.getElementById("updateBg")

const blurRadius = document.getElementById("blurRadius")
const blur = document.querySelector(".acrylic")

headerText.addEventListener("keyup", (e) => {
    header.innerHTML = headerText.value
    window.localStorage.setItem("heading", headerText.value)
})

updateBackground.addEventListener("click", () => {
    if(backgroundLink.value) {
        document.body.style.background = `url("${backgroundLink.value}")`
    }
    window.localStorage.setItem("background", backgroundLink.value)
})

if(window.localStorage.getItem("heading")) {
    header.innerHTML = window.localStorage.getItem("heading");
}

if(window.localStorage.getItem("background")) {
    document.body.style.background = `url("${window.localStorage.getItem("background")}")`
}