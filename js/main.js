
const badgeEl = document.querySelector("header .badges");

window.addEventListener("scroll",_.throttle(function() {
  if(window.scrollY>500){
    //요소,지속시간,옵션
    gsap.to(badgeEl,0.6,{
      opacity: 0,
      display: "none"
    });
    gsap.to("#to-top",0.2,{
      x:0,
    });
  }else{
    gsap.to(badgeEl,0.6,{
      opacity: 1,
      display:"block"
    });
    gsap.to("#to-top",0.2,{
      x: 100,
    });
  }
},300));

const toTop = document.querySelector("#to-top");
toTop.addEventListener("click",()=>{
  gsap.to(window,.7,{
    scrollTo: 0,
  });
  // window.scrollTo(0,0);
});


const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeitem,index) {
  gsap.to(fadeitem,1.2,{
    delay: (index+1)*0.7, //지연시간을 인덱스와 엮음
    opacity: 1,
  });
});


const swiper = new Swiper(".notice-line .swiper",{
  direction:"vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper",{
  speed: 800,
  spaceBetween: 10,
  slidesPerView: 3,
  direction: "horizontal",
  autoplay: {
    delay: 2000,
    // pauseOnMouseEnter: true,
  },
  loop: true,
  centeredSlides: true,
  navigation:{
    nextEl:".promotion .swiper-button-next",
    prevEl:".promotion .swiper-button-prev",
  },
  pagination:{
    el:".promotion .swiper-pagination",
    clickable: true,
    type:"bullets"
  }

});

new Swiper(".awards .swiper",{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation:{
    prevEl:".awards .swiper-button-prev",
    nextEl:".awards .swiper-button-next"
  }
});

const promotionEl = document.querySelector(".notice .promotion");
const promotionButton = document.querySelector(".notice .toggle-promotion");

promotionButton.addEventListener("click",function() {
  promotionEl.classList.toggle("hidden");
});

function random(min,max){
  return parseFloat((Math.random()*(max-min)+min).toFixed(2));
}
function floatingObject(selector, delay, size){
  // gsap.to(요소 시간 옵션)
  gsap.to(selector,random(1.5,2.5),{
    y: size,
    repeat:-1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1",1, 15);
floatingObject(".floating2",.5, 15);
floatingObject(".floating3",1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());
});

