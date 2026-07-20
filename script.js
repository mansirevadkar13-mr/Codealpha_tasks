const images = [
    "images/img1.jpeg",
    "images/img2.jpeg",
    "images/img3.jpeg",
    "images/img4.jpeg",
    "images/img5.jpeg",
    "images/img6.jpeg"
];

let index = 0;

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

function openImage(i) {
    index = i;
    popup.style.display = "flex";
    popupImg.src = images[index];
}

function closeImage() {
    popup.style.display = "none";
}

function nextImage() {
    index = (index + 1) % images.length;
    popupImg.src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    popupImg.src = images[index];
}

function filterImages(category) {
    let imgs = document.querySelectorAll(".gallery img");

    imgs.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

document.addEventListener("keydown", function(e) {
    if (popup.style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeImage();
    }
});