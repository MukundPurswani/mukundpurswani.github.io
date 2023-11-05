const images = ["trek.JPG","sky.JPG"];
const baseSrcUrl = "images/Web/"
const sampleImages = document.querySelector('.sample-images');
setInterval(function() {
    // console.log(sampleImages);
    // console.log(baseSrcUrl+images[Math.random() * images.length]);
    sampleImages.setAttribute('src',baseSrcUrl+images[Math.round(Math.random() * 1)]);
    // console.log(Math.round(Math.random() * 1));
    // console.log(images.length);
},1000);