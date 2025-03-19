let backgroundGreen = document.getElementById('mode-xanh');
let backgroundRed = document.getElementById('mode-do');
let backgroundPurple = document.getElementById('mode-tim');
let backgroundBody = document.getElementById('background');


backgroundGreen.onclick = function() {
    backgroundBody.classList.remove('background-do', 'background-tim'); 
    backgroundBody.classList.toggle('background-xanh');
}


backgroundRed.onclick = function() {
    backgroundBody.classList.remove('background-xanh', 'background-tim'); 
    backgroundBody.classList.toggle('background-do'); 
}

backgroundPurple.onclick = function() {
    backgroundBody.classList.remove('background-xanh', 'background-do'); 
    backgroundBody.classList.toggle('background-tim'); 
}