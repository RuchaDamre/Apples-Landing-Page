/* ** Loader **  */

let loader = document.getElementById("loader");

window.addEventListener('load', () => {
    loader.style.display = "none";
});


/* ** TIMER IN HOMEPAGE **  */

let number = document.querySelectorAll("h5");
let container = document.getElementById("timer");

let futureTime = new Date(2030, 3, 4, 12, 47, 0).getTime();

let interval = setInterval(() => {

    let todayTime = new Date().getTime();

    let distance = futureTime - todayTime;

    let daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / ((1000 * 60 * 60)));
    let minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secLeft = Math.floor((distance % (1000 * 60)) / 1000);

    let timer = [daysLeft, hoursLeft, minutesLeft, secLeft];

    function format(item) {

        if (item < 10) {
            item = `0${item}`;
        }
        return item;
    }

    number.forEach((value, index) => {
        value.innerHTML = format(timer[index]);
    });

    if (distance < 0) {
        clearInterval(interval);
        container.innerHTML = `<h4 class="expired">SORRY, this giveaway has expired!</h4>`;
    }

}, 1000);


/* ** SIGN UP Form **  */

let user = document.getElementById("user");
let blur = document.querySelectorAll(".blur");
let popup = document.getElementById("popup");
let close = document.getElementById("close");

user.addEventListener("click", () => {
    blur.forEach(item => {
        item.classList.add("background");
    });
    popup.classList.add("show");
});

close.addEventListener("click", () => {
    blur.forEach(item => {
        item.classList.remove("background");
    });
    popup.classList.remove("show");
});


/* ** Slider on VARIETIES PAGE **  */

let nextBtn = document.getElementById("arrow-right");
let prevBtn = document.getElementById("arrow-left");
let tile = document.querySelectorAll(".tile");

var i = 0;
nextBtn.addEventListener('click', () => {
    i++;
    fun();
});

prevBtn.addEventListener('click', () => {
    i--;
    fun();
});

function fun() {

    if (i == 4) {
        i = 0;
    }

    if (i < 0) {
        i = 3;
    }

    tile.forEach((item) => {
        item.style.transform = `translateX(-${i * 100}%)`;

    });
}


/* ** FAQ **  */

let data = document.querySelectorAll(".data");

data.forEach((que) => {
    let btn = que.querySelector(".btn");
    btn.addEventListener('click', () => {

        data.forEach((item) => {
            if (item != que) {
                item.classList.remove("ans_show");
            }
        });
        que.classList.toggle("ans_show");
    });
});

/* ** Contact Form **  */

let form = document.getElementById("contact-form");
let email = document.getElementById("email");
let msg = document.getElementById("confirm-msg");

form.addEventListener('submit', (e) => {

    e.preventDefault();

    let input = email.value;
    if (input != '') {
        msg.style.display = "block";

        setTimeout(() => {
            msg.style.display = "none";
        }, 5000);
    }
});

/* ** HAMBURGER MENU **  */

let hamburger = document.getElementById("hamburger");
let section = document.getElementById("whole-page");
let linksContainer = document.getElementById("links-container");

hamburger.addEventListener('click', () => {
    linksContainer.classList.toggle("showLink");
    section.classList.toggle("margin");
});

linksContainer.addEventListener(('click'), () => {
    linksContainer.classList.remove("showLink");
    section.classList.remove("margin");
});