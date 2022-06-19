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
        Sidebar.style.width = '300px';
        settingsForm.style.opacity = "1";

        settingsButton.classList.add("clicked")
        isLeftMenuActive = true;
    } else {
        Sidebar.style.width = '0px';
        settingsForm.style.opacity = "0";

        settingsButton.classList.remove("clicked")
        isLeftMenuActive = false;
    }
})

/* ============================== Settings ============================== */
const headerText = document.getElementById("headerText")
const header = document.getElementById("header")

const clock = document.getElementById("clock")
const bookmarks = document.getElementById('bookmarks')

const backgroundLink = document.getElementById("bgLink");
const updateBackground = document.getElementById("updateBg")

const headerColor = document.getElementById("headerColor")
const clockColor = document.getElementById("clockColor")
const bookmarksColor = document.getElementById("bookmarksColor")

headerColor.addEventListener("keypress", (e) => {
    if(headerColor.value) {
        header.style.color = headerColor.value;

        window.localStorage.setItem("headerColor", headerColor.value)
    }
})

clockColor.addEventListener("keypress", (e) => {
    if(clockColor.value) {
        clock.style.color = clockColor.value;

        window.localStorage.setItem("clockColor", clockColor.value)
    }
})

bookmarksColor.addEventListener("keypress", (e) => {
    if(bookmarksColor.value) {
        bookmarks.getElementsByTagName("a")[0].style.color = bookmarksColor.value;
        bookmarks.getElementsByTagName("a")[1].style.color = bookmarksColor.value;
        bookmarks.getElementsByTagName("a")[2].style.color = bookmarksColor.value;
        bookmarks.getElementsByTagName("a")[3].style.color = bookmarksColor.value;
        bookmarks.getElementsByTagName("a")[4].style.color = bookmarksColor.value;

        window.localStorage.setItem("bookmarksColor", bookmarksColor.value)
    }
})

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
    headerText.value = window.localStorage.getItem("heading");
}

if(window.localStorage.getItem("background")) {
    document.body.style.background = `url("${window.localStorage.getItem("background")}")`
    backgroundLink.value = window.localStorage.getItem("background");
}

if(window.localStorage.getItem("headerColor")) {
    header.style.color = window.localStorage.getItem("headerColor");
}

if(window.localStorage.getItem("clockColor")) {
    clock.style.color = window.localStorage.getItem("clockColor");
}

if(window.localStorage.getItem("bookmarksColor")) {
    bookmarks.getElementsByTagName("a")[0].style.color = window.localStorage.getItem("bookmarksColor");
    bookmarks.getElementsByTagName("a")[1].style.color = window.localStorage.getItem("bookmarksColor");
    bookmarks.getElementsByTagName("a")[2].style.color = window.localStorage.getItem("bookmarksColor");
    bookmarks.getElementsByTagName("a")[3].style.color = window.localStorage.getItem("bookmarksColor");
    bookmarks.getElementsByTagName("a")[4].style.color = window.localStorage.getItem("bookmarksColor");
}

/* ============================== Reset ============================== */

const resetAll = document.getElementById("resetAll")
const resetColors = document.getElementById("resetColors")

resetAll.addEventListener("click", () => {
    window.localStorage.clear();
    location.reload();
})

resetColors.addEventListener("click", () => {
    window.localStorage.removeItem("bookmarksColor");
    window.localStorage.removeItem("clockColor");
    window.localStorage.removeItem("headerColor");
    window.localStorage.removeItem("glowColor");
    location.reload();
})

/* ============================== Glow ============================== */
const glowColor = document.querySelectorAll(".glow-font")
const glow = document.getElementById("glow")

glow.addEventListener("keypress", (e) => {
    if(glow.value) {
        glowColor.forEach(glow1 => {
            glow1.style.textShadow = `0 5px 15px ${glow.value}`
        })

        window.localStorage.setItem("glowColor", glow.value)
    }
})

if(window.localStorage.getItem("glowColor")) {
    glowColor.forEach(glow1 => {
        glow1.style.textShadow = `0 5px 15px ${window.localStorage.getItem("glowColor")}`
    })
}

/* ============================== Theme ============================== */
const themeChanger = document.getElementById("theme")

themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark_mode")

    if(document.body.classList.contains("dark_mode")) {
        window.localStorage.setItem("dark", true)
    } else {
        window.localStorage.removeItem("dark")
    }
})

if(window.localStorage.getItem("dark")) {
    document.body.classList.add("dark_mode")
}