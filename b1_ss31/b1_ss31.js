let buttonHide = document.getElementById('button-hideText');
let buttonShow = document.getElementById('button-showText');
let text = document.getElementById('text');
buttonHide.onclick = function () {
    text.style.display = 'none';
};

buttonShow.onclick = function () {
    text.style.display = 'block';
};