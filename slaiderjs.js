let images = [{
  url: "https://avatars.mds.yandex.net/get-images-cbir/4240735/xKK5hWzSns_HYn37zhPl3A7745/ocr",
  title: "Rostov-on-Don, Admiral",
}, {
  url: "https://avatars.mds.yandex.net/get-images-cbir/1342622/_3eyVHPrrFh9nP9gJouVjA7822/ocr",
  title: "Sochi Thieves"
}, {
  url: "https://avatars.mds.yandex.net/get-images-cbir/7827837/4PXN9XhCG5bJoxl29xqqwg7865/ocr",
  title: "Rostov-on-Don Patriotic"
}];


function initSlider() {
  let sliderArrows = document.querySelector(".slaider-navigation")
  let sliderImages = document.querySelector(".slaider__images")
  let sliderDots = document.querySelector(".slaider-navigation__dots")
  let apartmentArea=document.querySelector(".apartment-area")
  let repairTime=document.querySelector(".repair-time")
  let repairCost=document.querySelector(".repair-cost")
  let city=document.querySelector(".city")


  initDots();
  initImages();
  initArrows();
  initNames ()
  function initImages () {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? "image-active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }
  function initDots () {
    images.forEach((image, index)=>{
      let dotsDiv=`<div class="slaider-dots n${index} ${index === 0 ? "dots-active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dotsDiv;
    });
      sliderDots.querySelectorAll(".slaider-dots").forEach(dot => {
        dot.addEventListener("click", function() {
          moveSlaider(this.dataset.index);
        })
      })
  }
  function initArrows() {
    sliderArrows.querySelectorAll(".slaider-navigation__arrow").forEach(arrow => {
      arrow.addEventListener("click", function() {
        let curNumber = +sliderImages.querySelector(".image-active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
        }
        moveSlaider(nextNumber);
      });
    });
  }
  function initNames () {
    document.querySelectorAll(".slaid__name").forEach (name => {
      name.addEventListener("click", function() {
        moveSlaider(this.dataset.index);
      })
    })
  }
  function moveSlaider (num) {
    if (num == 0) {
      city.innerHTML="Rostov-on-Don <br> LCD admiral";
      apartmentArea.innerHTML="81 m2";
      repairTime.innerHTML="3.5 months";
      repairCost="Upon request";
      document.querySelector(".title-active").classList.remove("title-active")
      document.querySelector(".slaider__names").children[0].classList.add("title-active")
    } 
    
    if (num == 1) {
      city.innerHTML="Sochi <br>Thieves"
      apartmentArea.innerHTML="105 m2";
      repairTime.innerHTML="4 months";
      repairCost="Upon request";
      document.querySelector(".title-active").classList.remove("title-active")
      document.querySelector(".slaider__names").children[1].classList.add("title-active")
    } 
    if (num == 2) {
      city.innerHTML="Rostov-on-Don<br> Patriotic"
      apartmentArea.innerHTML="93 m2";
      repairTime.innerHTML="3 months";
      repairCost="Upon request";
      document.querySelector(".title-active").classList.remove("title-active")
      document.querySelector(".slaider__names").children[2].classList.add("title-active")
    } 
    sliderImages.querySelector(".image-active").classList.remove("image-active");
    sliderImages.querySelector(".n" + num).classList.add("image-active");
    sliderDots.querySelector(".dots-active").classList.remove("dots-active");
    sliderDots.querySelector(".n" + num).classList.add("dots-active");

  }
  }





document.addEventListener("DOMContentLoaded", initSlider);