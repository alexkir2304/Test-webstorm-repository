
let modal= document.querySelectorAll('.modal'); //модальное окно целиком
let img = document.querySelectorAll('.myImg'); //кликабельная картинка из галереи
let modalImg = document.querySelectorAll('.modalImg'); //картинка модального окна

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function(){
        modal[0].style.display = "block";
        modalImg[0].src = this.src;
    }
}
// modal[0].addEventListener('click', function(event) {
//     event.target.style.opacity = '0.5';
// })


modal[0].addEventListener('click', function(event) {
    if (event.target !== modalImg[0])  modal[0].style.display = "none";
})


let testVariable;






