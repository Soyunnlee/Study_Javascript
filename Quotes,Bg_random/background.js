const images = [
    "img1.jpg","img2.jpg","img3.jpg"
]

 const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`

// "./img/img1.jpg"

console.log(bgImage)