const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    console.log(imgNumber)
    image.classList.add("bgImage");
    body.prepend(image); // 앞쪽에 child 추가
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER); // floor, ceil
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();