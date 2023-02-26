const images = [
    "img1.jpg","img2.jpg","img3.jpg"
]

 const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img"); // <img>

bgImage.src = `./img/${chosenImage}` 
// bgImage 의 scr 를 설정해준다.
// <img src="./img/img1.jpg"/> 

document.body.appendChild(bgImage)
// appendChild() 는 body 에 html을 추가한다.

console.log(bgImage)