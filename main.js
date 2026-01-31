// Получаем элементы слайдера и миниатюр
const sliderItems = document.querySelectorAll(".slider .list .item");
const thumbnailItems = document.querySelectorAll(".thumbnail .item");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
let current = 0;

function showSlide(index) {
  sliderItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
  thumbnailItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

btnPrev.addEventListener("click", () => {
  current = (current - 1 + sliderItems.length) % sliderItems.length;
  showSlide(current);
});

btnNext.addEventListener("click", () => {
  current = (current + 1) % sliderItems.length;
  showSlide(current);
});

thumbnailItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    current = i;
    showSlide(current);
  });
});

// Инициализация
showSlide(current);
