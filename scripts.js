
const balbesButtons = document.querySelectorAll(".balbes-button");

balbesButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const info = button.nextElementSibling;

        info.classList.toggle("active");

    });

});

const galleries = [

    // БАЛБЕС 1
    [
        "img/photo_2026-09-19_01-44-46.jpg",
        "img/photo_2026-09-19_01-44-48.jpg",
        "img/photo_2026-09-19_01-26-00.jpg",
        "img/photo_2026-09-21_21-46-50.jpg",
        "img/photo_2026-09-21_21-46-49.jpg",
        "img/photo_2026-09-21_21-45-48.jpg",
        "img/photo_2026-09-21_21-45-50.jpg",
        "img/photo_2026-09-21_21-45-58.jpg",
        "img/photo_2026-09-21_21-45-50.jpg",
        "img/photo_2026-09-19_01-44-55.jpg",
        "img/photo_2026-09-21_21-45-52.jpg",
        "img/photo_2026-09-21_21-46-30.jpg",
        "img/photo_2026-09-21_21-46-31.jpg",
        "img/photo_2026-09-21_21-46-32.jpg",
        "img/photo_2026-09-21_21-46-24.jpg",
        "img/photo_2026-09-21_21-46-25.jpg",
        "img/photo_2026-09-21_21-46-49.jpg",
        "img/photo_2026-09-21_21-46-52.jpg",
        "img/photo_2026-09-21_21-46-19.jpg"
    ],

    // БАЛБЕС 2
    [
        "img/photo_2026-09-19_01-44-38.jpg",
        "img/Снимок экрана 2026-09-19 012830.png",
        "img/photo_2026-09-19_01-44-41.jpg",
        "img/photo_2026-09-21_21-46-37.jpg",
        "img/photo_2026-09-21_21-46-36.jpg",
        "img/photo_2026-09-21_21-46-09.jpg",
        "img/photo_2026-09-21_21-45-56.jpg",
        "img/photo_2026-09-21_21-45-43.jpg",
        "img/photo_2026-09-21_21-46-34.jpg",
        "img/photo_2026-09-21_21-46-12.jpg",
        "img/photo_2026-09-19_01-44-55.jpg",
        "img/photo_2026-09-21_21-46-17.jpg"
    ],

    // БАЛБЕС 3
    [
        "img/photo_2026-09-19_01-44-49.jpg",
        "img/photo_2026-09-19_01-44-52.jpg",
        "img/photo_2026-09-19_01-44-31.jpg",
        "img/photo_2026-09-21_21-46-54.jpg",
        "img/photo_2026-09-19_01-44-32.jpg",
        "img/photo_2026-09-19_01-44-42.jpg",
        "img/photo_2026-09-19_01-44-44.jpg",
        "img/photo_2026-09-19_01-30-39.jpg",
        "img/photo_2026-09-21_21-56-39.jpg",
        "img/photo_2026-09-21_21-56-40.jpg",
        "img/photo_2026-09-21_21-46-38.jpg",
        "img/photo_2026-09-21_21-46-40.jpg",
        "img/photo_2026-09-21_21-46-41.jpg",
        "img/photo_2026-09-21_21-46-42.jpg",
        "img/photo_2026-09-21_21-46-43.jpg",
        "img/photo_2026-09-21_21-46-27.jpg",
        "img/photo_2026-09-21_21-46-29.jpg",
        "img/photo_2026-09-21_21-46-26.jpg",
        "img/photo_2026-09-21_21-45-47.jpg",
        "img/photo_2026-09-21_21-46-22.jpg",
        "img/photo_2026-09-21_21-46-35.jpg",
        "img/photo_2026-09-21_21-45-54.jpg",
        "img/photo_2026-09-21_21-45-52.jpg",
        "img/photo_2026-09-21_21-46-15.jpg",
        "img/photo_2026-09-21_21-46-20.jpg"
    ],

];


// ========================================
// ПЕРЕКЛЮЧЕНИЕ ФОТОГРАФИЙ
// ========================================

const galleryElements = document.querySelectorAll(".gallery");

galleryElements.forEach(function(gallery, index) {

    const img = gallery.querySelector(".gallery-img");

    const prevButton = gallery.querySelector(".prev");

    const nextButton = gallery.querySelector(".next");

    let currentPhoto = 0;


    // ====================================
    // СЛЕДУЮЩЕЕ ФОТО
    // ====================================

    nextButton.addEventListener("click", function(event) {

        // Не даём кнопке открыть/закрыть Балбеса
        event.stopPropagation();

        currentPhoto++;

        if (currentPhoto >= galleries[index].length) {
            currentPhoto = 0;
        }

        img.src = galleries[index][currentPhoto];

    });


    // ====================================
    // ПРЕДЫДУЩЕЕ ФОТО
    // ====================================

    prevButton.addEventListener("click", function(event) {

        // Не даём кнопке открыть/закрыть Балбеса
        event.stopPropagation();

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = galleries[index].length - 1;
        }

        img.src = galleries[index][currentPhoto];

    });

});