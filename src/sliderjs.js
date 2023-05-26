import './Style.css'
const images = [
  {
    url: "./images/image_1.png",
    title: "Rostov-on-Don, Admiral",
    city : "Rostov-on-Don <br> LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost:"Upon request",
  },
  {
    url: "./images/image_2.png",
    title: "Sochi Thieves",
    city : "Sochi <br>Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost:"Upon request",
  },
  {
    url: "./images/image_3.png",
    title: "Rostov-on-Don Patriotic",
    city : "Rostov-on-Don<br> Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost:"Upon request",
  },
];

function initSlider() {
  initDots();
  initTitles()
  initImages();
  initArrows();
  initNames();
}
  const sliderArrows = document.querySelector(".slider-navigation");
  const sliderImages = document.querySelector(".slider__images");
  const sliderDots = document.querySelector(".slider-navigation__dots");
  const apartmentArea = document.querySelector(".apartment-area");
  const repairTime = document.querySelector(".repair-time");
  const repairCost = document.querySelector(".repair-cost");
  const city = document.querySelector(".city");
   function initImages() {
    images.forEach((image, index) => {
      const imageDiv = `<div class="image n${index} ${
        index === 0 ? "image-active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  function initDots() {
    images.forEach((image, index) => {
      const dotsDiv = `<div class="slider-dots n${index} ${
        index === 0 ? "dots-active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dotsDiv;
    });
    sliderDots.querySelectorAll(".slider-dots").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlaider(this.dataset.index);
      });
    });
  }
  function initArrows() {
    sliderArrows
      .querySelectorAll(".slider-navigation__arrow")
      .forEach((arrow) => {
        arrow.addEventListener("click", function () {
          const curNumber =
            +sliderImages.querySelector(".image-active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
          } else {
            nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
          }
          moveSlaider(nextNumber);
        });
      });
  }
  function initNames() {
    document.querySelectorAll(".slid__name").forEach((name) => {
      name.addEventListener("click", function () {
        moveSlaider(this.dataset.index);
      });
    });
  }
  function initTitles() {
    images.forEach((image, index) => {
      const titleDiv = `<div class="slid__name n${index} ${
        index === 0 ? "title-active" : ""
      } "data-index="${index}">${images[index].title}</div>`;
      document.querySelector(".slider__names").innerHTML += titleDiv;
    });
  }

  function moveSlaider(num) {
    city.innerHTML = images[num].city;
    apartmentArea.innerHTML = images[num].apartmentArea;
    repairTime.innerHTML = images[num].repairTime;
    repairCost.innerHTML = images[num].repairCost;
    document.querySelector(".title-active").classList.remove("title-active");
    document.querySelector(".slider__names").querySelector(".n" + num).classList.add("title-active"); 
    sliderImages.querySelector(".image-active").classList.remove("image-active");
    sliderImages.querySelector(".n" + num).classList.add("image-active");
    sliderDots.querySelector(".dots-active").classList.remove("dots-active");
    sliderDots.querySelector(".n" + num).classList.add("dots-active");
  }

document.addEventListener("DOMContentLoaded", initSlider);

