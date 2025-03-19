let backgroundBody = document.getElementById('background');
let openModel = document.getElementById('open');
let contentText = document.getElementById('content');
let exitModel = document.getElementById('exit');

openModel.onclick = function() {
    contentText.style.display = 'block';
    openModel.style.background = 'gray';
    backgroundBody.style.background = 'gray';
}

exitModel.onclick = function() {
    contentText.style.display = 'none';
    openModel.style.background = 'white';
    backgroundBody.style.background = 'white';
}