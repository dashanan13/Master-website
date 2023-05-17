myButton1.addEventListener("click", function () {
    myPopup1.classList.add("show");
});
closePopup1.addEventListener("click", function () {
    myPopup1.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup1) {
        myPopup1.classList.remove("show");
    }
});


myButton2.addEventListener("click", function () {
    myPopup2.classList.add("show");
});
closePopup2.addEventListener("click", function () {
    myPopup2.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup2) {
        myPopup2.classList.remove("show");
    }
});


myButton3.addEventListener("click", function () {
    myPopup3.classList.add("show");
});
closePopup3.addEventListener("click", function () {
    myPopup3.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup3) {
        myPopup3.classList.remove("show");
    }
});


myButton4.addEventListener("click", function () {
    myPopup4.classList.add("show");
});
closePopup4.addEventListener("click", function () {
    myPopup4.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup4) {
        myPopup4.classList.remove("show");
    }
});


myButton5.addEventListener("click", function () {
    myPopup5.classList.add("show");
});
closePopup5.addEventListener("click", function () {
    myPopup5.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup5) {
        myPopup5.classList.remove("show");
    }
});
