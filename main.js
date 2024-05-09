import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    lerp: 0.1,
    duration: 1.2,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
},
});



var tl = gsap.timeline()

function canvas(){
const canvas = document.querySelector(".home>.homepage");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  https://kzero.com/assets/home/hero/seq/1.webp?10
  https://kzero.com/assets/home/hero/seq/2.webp?10
  https://kzero.com/assets/home/hero/seq/3.webp?10
  https://kzero.com/assets/home/hero/seq/4.webp?10
  https://kzero.com/assets/home/hero/seq/5.webp?10
  https://kzero.com/assets/home/hero/seq/6.webp?10
  https://kzero.com/assets/home/hero/seq/7.webp?10
  https://kzero.com/assets/home/hero/seq/8.webp?10
  https://kzero.com/assets/home/hero/seq/9.webp?10
  https://kzero.com/assets/home/hero/seq/10.webp?10
https://kzero.com/assets/home/hero/seq/11.webp?10
https://kzero.com/assets/home/hero/seq/12.webp?10
https://kzero.com/assets/home/hero/seq/13.webp?10
https://kzero.com/assets/home/hero/seq/14.webp?10
https://kzero.com/assets/home/hero/seq/15.webp?10
https://kzero.com/assets/home/hero/seq/16.webp?10
https://kzero.com/assets/home/hero/seq/17.webp?10
https://kzero.com/assets/home/hero/seq/18.webp?10
https://kzero.com/assets/home/hero/seq/19.webp?10
https://kzero.com/assets/home/hero/seq/20.webp?10
https://kzero.com/assets/home/hero/seq/21.webp?10
https://kzero.com/assets/home/hero/seq/22.webp?10
https://kzero.com/assets/home/hero/seq/23.webp?10
https://kzero.com/assets/home/hero/seq/24.webp?10
https://kzero.com/assets/home/hero/seq/25.webp?10
https://kzero.com/assets/home/hero/seq/26.webp?10
https://kzero.com/assets/home/hero/seq/27.webp?10
https://kzero.com/assets/home/hero/seq/28.webp?10
https://kzero.com/assets/home/hero/seq/29.webp?10
https://kzero.com/assets/home/hero/seq/30.webp?10
https://kzero.com/assets/home/hero/seq/31.webp?10
https://kzero.com/assets/home/hero/seq/32.webp?10
https://kzero.com/assets/home/hero/seq/33.webp?10
https://kzero.com/assets/home/hero/seq/34.webp?10
https://kzero.com/assets/home/hero/seq/35.webp?10
https://kzero.com/assets/home/hero/seq/36.webp?10
https://kzero.com/assets/home/hero/seq/37.webp?10
https://kzero.com/assets/home/hero/seq/38.webp?10
https://kzero.com/assets/home/hero/seq/39.webp?10
https://kzero.com/assets/home/hero/seq/40.webp?10
https://kzero.com/assets/home/hero/seq/41.webp?10
https://kzero.com/assets/home/hero/seq/42.webp?10
https://kzero.com/assets/home/hero/seq/43.webp?10
https://kzero.com/assets/home/hero/seq/44.webp?10
https://kzero.com/assets/home/hero/seq/45.webp?10
https://kzero.com/assets/home/hero/seq/46.webp?10
https://kzero.com/assets/home/hero/seq/47.webp?10
https://kzero.com/assets/home/hero/seq/48.webp?10
https://kzero.com/assets/home/hero/seq/49.webp?10
https://kzero.com/assets/home/hero/seq/50.webp?10
https://kzero.com/assets/home/hero/seq/51.webp?10
https://kzero.com/assets/home/hero/seq/52.webp?10
https://kzero.com/assets/home/hero/seq/53.webp?10
https://kzero.com/assets/home/hero/seq/54.webp?10
https://kzero.com/assets/home/hero/seq/55.webp?10
https://kzero.com/assets/home/hero/seq/56.webp?10
https://kzero.com/assets/home/hero/seq/57.webp?10
https://kzero.com/assets/home/hero/seq/58.webp?10
https://kzero.com/assets/home/hero/seq/59.webp?10
https://kzero.com/assets/home/hero/seq/60.webp?10
https://kzero.com/assets/home/hero/seq/61.webp?10
https://kzero.com/assets/home/hero/seq/62.webp?10
https://kzero.com/assets/home/hero/seq/63.webp?10
https://kzero.com/assets/home/hero/seq/64.webp?10
https://kzero.com/assets/home/hero/seq/65.webp?10
https://kzero.com/assets/home/hero/seq/66.webp?10
https://kzero.com/assets/home/hero/seq/67.webp?10
https://kzero.com/assets/home/hero/seq/68.webp?10
https://kzero.com/assets/home/hero/seq/69.webp?10
https://kzero.com/assets/home/hero/seq/70.webp?10
https://kzero.com/assets/home/hero/seq/71.webp?10
https://kzero.com/assets/home/hero/seq/72.webp?10
https://kzero.com/assets/home/hero/seq/73.webp?10
https://kzero.com/assets/home/hero/seq/74.webp?10
https://kzero.com/assets/home/hero/seq/75.webp?10
https://kzero.com/assets/home/hero/seq/76.webp?10
https://kzero.com/assets/home/hero/seq/77.webp?10
https://kzero.com/assets/home/hero/seq/78.webp?10
https://kzero.com/assets/home/hero/seq/79.webp?10
https://kzero.com/assets/home/hero/seq/80.webp?10
https://kzero.com/assets/home/hero/seq/81.webp?10
https://kzero.com/assets/home/hero/seq/82.webp?10
https://kzero.com/assets/home/hero/seq/83.webp?10
https://kzero.com/assets/home/hero/seq/84.webp?10
https://kzero.com/assets/home/hero/seq/85.webp?10
https://kzero.com/assets/home/hero/seq/86.webp?10
https://kzero.com/assets/home/hero/seq/87.webp?10
https://kzero.com/assets/home/hero/seq/88.webp?10
https://kzero.com/assets/home/hero/seq/89.webp?10
https://kzero.com/assets/home/hero/seq/90.webp?10
https://kzero.com/assets/home/hero/seq/91.webp?10
https://kzero.com/assets/home/hero/seq/92.webp?10
https://kzero.com/assets/home/hero/seq/93.webp?10
https://kzero.com/assets/home/hero/seq/94.webp?10
https://kzero.com/assets/home/hero/seq/95.webp?10
https://kzero.com/assets/home/hero/seq/96.webp?10
https://kzero.com/assets/home/hero/seq/97.webp?10
https://kzero.com/assets/home/hero/seq/98.webp?10
https://kzero.com/assets/home/hero/seq/99.webp?10
https://kzero.com/assets/home/hero/seq/100.webp?10
https://kzero.com/assets/home/hero/seq/101.webp?10
https://kzero.com/assets/home/hero/seq/102.webp?10
https://kzero.com/assets/home/hero/seq/103.webp?10
https://kzero.com/assets/home/hero/seq/104.webp?10
https://kzero.com/assets/home/hero/seq/105.webp?10
https://kzero.com/assets/home/hero/seq/106.webp?10
https://kzero.com/assets/home/hero/seq/107.webp?10
https://kzero.com/assets/home/hero/seq/108.webp?10
https://kzero.com/assets/home/hero/seq/109.webp?10
https://kzero.com/assets/home/hero/seq/110.webp?10
https://kzero.com/assets/home/hero/seq/111.webp?10
https://kzero.com/assets/home/hero/seq/112.webp?10
https://kzero.com/assets/home/hero/seq/113.webp?10
https://kzero.com/assets/home/hero/seq/114.webp?10
https://kzero.com/assets/home/hero/seq/115.webp?10
https://kzero.com/assets/home/hero/seq/116.webp?10
https://kzero.com/assets/home/hero/seq/117.webp?10
https://kzero.com/assets/home/hero/seq/118.webp?10
https://kzero.com/assets/home/hero/seq/119.webp?10
https://kzero.com/assets/home/hero/seq/120.webp?10
https://kzero.com/assets/home/hero/seq/121.webp?10
https://kzero.com/assets/home/hero/seq/122.webp?10
https://kzero.com/assets/home/hero/seq/123.webp?10
https://kzero.com/assets/home/hero/seq/124.webp?10
https://kzero.com/assets/home/hero/seq/125.webp?10
https://kzero.com/assets/home/hero/seq/126.webp?10
https://kzero.com/assets/home/hero/seq/127.webp?10
https://kzero.com/assets/home/hero/seq/128.webp?10
https://kzero.com/assets/home/hero/seq/129.webp?10
https://kzero.com/assets/home/hero/seq/130.webp?10
https://kzero.com/assets/home/hero/seq/131.webp?10
https://kzero.com/assets/home/hero/seq/132.webp?10
https://kzero.com/assets/home/hero/seq/133.webp?10
https://kzero.com/assets/home/hero/seq/134.webp?10
https://kzero.com/assets/home/hero/seq/135.webp?10
https://kzero.com/assets/home/hero/seq/136.webp?10
https://kzero.com/assets/home/hero/seq/137.webp?10
https://kzero.com/assets/home/hero/seq/138.webp?10
https://kzero.com/assets/home/hero/seq/139.webp?10
https://kzero.com/assets/home/hero/seq/140.webp?10

  `;
  return data.split("\n")[index];
}

const frameCount = 140;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `.home`,
    start: `top top`,
    end: `250% top`,
    scroller: `body`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({

  trigger: ".home",
  pin: true,
  scroller: `body`,
  start: `top top`,
  end: `250% top`,
  // markers:true
});
tl.to('.home>.overlay',{
  scrollTrigger:{
    trigger: ".overlay",
    // pin: true,
    scroller: `body`,
    start: `170% top`,
    end: `250% top`,
    // markers: true,
    scrub: true
  },
  opacity: 1
})
tl.to('.home>.text',{
  scrollTrigger:{
    trigger: ".text",
    // pin: true,
    scroller: `body`,
    start: `top top`,
    end: `bottom top`,
    // markers: true,
    scrub: true
  },
  opacity: 0
})

tl.to(`.home>.text2`,{
  scrollTrigger:{
    trigger: ".text2",
    // pin: true,
    scroller: `body`,
    start: `top top`,
    end: `400% top`,
    // markers: true,
    scrub: true
  },
  top: '-20%'
})

tl.to(`.home>.text3`,{
  scrollTrigger:{
    trigger: ".text3",
    // pin: true,
    scroller: `body`,
    start: `top top`,
    end: `400% top`,
    // markers: true,
    scrub: true
  },
  top: '-20%'
})







}


function canvas2(){
  const canvas = document.querySelector(".breach>.two");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    https://kzero.com/assets/home/breach/seq/1.webp?7
https://kzero.com/assets/home/breach/seq/2.webp?7
https://kzero.com/assets/home/breach/seq/3.webp?7
https://kzero.com/assets/home/breach/seq/4.webp?7
https://kzero.com/assets/home/breach/seq/5.webp?7
https://kzero.com/assets/home/breach/seq/6.webp?7
https://kzero.com/assets/home/breach/seq/7.webp?7
https://kzero.com/assets/home/breach/seq/8.webp?7
https://kzero.com/assets/home/breach/seq/9.webp?7
https://kzero.com/assets/home/breach/seq/10.webp?7
https://kzero.com/assets/home/breach/seq/11.webp?7
https://kzero.com/assets/home/breach/seq/12.webp?7
https://kzero.com/assets/home/breach/seq/13.webp?7
https://kzero.com/assets/home/breach/seq/14.webp?7
https://kzero.com/assets/home/breach/seq/15.webp?7
https://kzero.com/assets/home/breach/seq/16.webp?7
https://kzero.com/assets/home/breach/seq/17.webp?7
https://kzero.com/assets/home/breach/seq/18.webp?7
https://kzero.com/assets/home/breach/seq/19.webp?7
https://kzero.com/assets/home/breach/seq/20.webp?7
https://kzero.com/assets/home/breach/seq/21.webp?7
https://kzero.com/assets/home/breach/seq/22.webp?7
https://kzero.com/assets/home/breach/seq/23.webp?7
https://kzero.com/assets/home/breach/seq/24.webp?7
https://kzero.com/assets/home/breach/seq/25.webp?7
https://kzero.com/assets/home/breach/seq/26.webp?7
https://kzero.com/assets/home/breach/seq/27.webp?7
https://kzero.com/assets/home/breach/seq/28.webp?7
https://kzero.com/assets/home/breach/seq/29.webp?7
https://kzero.com/assets/home/breach/seq/30.webp?7
https://kzero.com/assets/home/breach/seq/31.webp?7
https://kzero.com/assets/home/breach/seq/32.webp?7
https://kzero.com/assets/home/breach/seq/33.webp?7
https://kzero.com/assets/home/breach/seq/34.webp?7
https://kzero.com/assets/home/breach/seq/35.webp?7
https://kzero.com/assets/home/breach/seq/36.webp?7
https://kzero.com/assets/home/breach/seq/37.webp?7
https://kzero.com/assets/home/breach/seq/38.webp?7
https://kzero.com/assets/home/breach/seq/39.webp?7
https://kzero.com/assets/home/breach/seq/40.webp?7
https://kzero.com/assets/home/breach/seq/41.webp?7
https://kzero.com/assets/home/breach/seq/42.webp?7
https://kzero.com/assets/home/breach/seq/43.webp?7
https://kzero.com/assets/home/breach/seq/44.webp?7
https://kzero.com/assets/home/breach/seq/45.webp?7
https://kzero.com/assets/home/breach/seq/46.webp?7
https://kzero.com/assets/home/breach/seq/47.webp?7
https://kzero.com/assets/home/breach/seq/48.webp?7
https://kzero.com/assets/home/breach/seq/49.webp?7
https://kzero.com/assets/home/breach/seq/50.webp?7
https://kzero.com/assets/home/breach/seq/51.webp?7
https://kzero.com/assets/home/breach/seq/52.webp?7
https://kzero.com/assets/home/breach/seq/53.webp?7
https://kzero.com/assets/home/breach/seq/54.webp?7
https://kzero.com/assets/home/breach/seq/55.webp?7
https://kzero.com/assets/home/breach/seq/56.webp?7
https://kzero.com/assets/home/breach/seq/57.webp?7
https://kzero.com/assets/home/breach/seq/58.webp?7
https://kzero.com/assets/home/breach/seq/59.webp?7
https://kzero.com/assets/home/breach/seq/60.webp?7
https://kzero.com/assets/home/breach/seq/61.webp?7
https://kzero.com/assets/home/breach/seq/62.webp?7
https://kzero.com/assets/home/breach/seq/63.webp?7
https://kzero.com/assets/home/breach/seq/64.webp?7
https://kzero.com/assets/home/breach/seq/65.webp?7
https://kzero.com/assets/home/breach/seq/66.webp?7
https://kzero.com/assets/home/breach/seq/67.webp?7
https://kzero.com/assets/home/breach/seq/68.webp?7
https://kzero.com/assets/home/breach/seq/69.webp?7
https://kzero.com/assets/home/breach/seq/70.webp?7
https://kzero.com/assets/home/breach/seq/71.webp?7
https://kzero.com/assets/home/breach/seq/72.webp?7
https://kzero.com/assets/home/breach/seq/73.webp?7
https://kzero.com/assets/home/breach/seq/74.webp?7
https://kzero.com/assets/home/breach/seq/75.webp?7
https://kzero.com/assets/home/breach/seq/76.webp?7
https://kzero.com/assets/home/breach/seq/77.webp?7
https://kzero.com/assets/home/breach/seq/78.webp?7
https://kzero.com/assets/home/breach/seq/79.webp?7
https://kzero.com/assets/home/breach/seq/80.webp?7
https://kzero.com/assets/home/breach/seq/81.webp?7
https://kzero.com/assets/home/breach/seq/82.webp?7
https://kzero.com/assets/home/breach/seq/83.webp?7
https://kzero.com/assets/home/breach/seq/84.webp?7
https://kzero.com/assets/home/breach/seq/85.webp?7
https://kzero.com/assets/home/breach/seq/86.webp?7
https://kzero.com/assets/home/breach/seq/87.webp?7
https://kzero.com/assets/home/breach/seq/88.webp?7
https://kzero.com/assets/home/breach/seq/89.webp?7
https://kzero.com/assets/home/breach/seq/90.webp?7
https://kzero.com/assets/home/breach/seq/91.webp?7
https://kzero.com/assets/home/breach/seq/92.webp?7
https://kzero.com/assets/home/breach/seq/93.webp?7
https://kzero.com/assets/home/breach/seq/94.webp?7
https://kzero.com/assets/home/breach/seq/95.webp?7
https://kzero.com/assets/home/breach/seq/96.webp?7
https://kzero.com/assets/home/breach/seq/97.webp?7
https://kzero.com/assets/home/breach/seq/98.webp?7
https://kzero.com/assets/home/breach/seq/99.webp?7
https://kzero.com/assets/home/breach/seq/100.webp?7
https://kzero.com/assets/home/breach/seq/101.webp?7
https://kzero.com/assets/home/breach/seq/102.webp?7
https://kzero.com/assets/home/breach/seq/103.webp?7
https://kzero.com/assets/home/breach/seq/104.webp?7
https://kzero.com/assets/home/breach/seq/105.webp?7
https://kzero.com/assets/home/breach/seq/106.webp?7
https://kzero.com/assets/home/breach/seq/107.webp?7
https://kzero.com/assets/home/breach/seq/108.webp?7
https://kzero.com/assets/home/breach/seq/109.webp?7
https://kzero.com/assets/home/breach/seq/110.webp?7
https://kzero.com/assets/home/breach/seq/111.webp?7
https://kzero.com/assets/home/breach/seq/112.webp?7
https://kzero.com/assets/home/breach/seq/113.webp?7
https://kzero.com/assets/home/breach/seq/114.webp?7
https://kzero.com/assets/home/breach/seq/115.webp?7
https://kzero.com/assets/home/breach/seq/116.webp?7
https://kzero.com/assets/home/breach/seq/117.webp?7
https://kzero.com/assets/home/breach/seq/118.webp?7
https://kzero.com/assets/home/breach/seq/119.webp?7
https://kzero.com/assets/home/breach/seq/120.webp?7
https://kzero.com/assets/home/breach/seq/121.webp?7
https://kzero.com/assets/home/breach/seq/122.webp?7
https://kzero.com/assets/home/breach/seq/123.webp?7
https://kzero.com/assets/home/breach/seq/124.webp?7
https://kzero.com/assets/home/breach/seq/125.webp?7
https://kzero.com/assets/home/breach/seq/126.webp?7
https://kzero.com/assets/home/breach/seq/127.webp?7
https://kzero.com/assets/home/breach/seq/128.webp?7
https://kzero.com/assets/home/breach/seq/129.webp?7
https://kzero.com/assets/home/breach/seq/130.webp?7
https://kzero.com/assets/home/breach/seq/131.webp?7
https://kzero.com/assets/home/breach/seq/132.webp?7
https://kzero.com/assets/home/breach/seq/133.webp?7
https://kzero.com/assets/home/breach/seq/134.webp?7
https://kzero.com/assets/home/breach/seq/135.webp?7
https://kzero.com/assets/home/breach/seq/136.webp?7
https://kzero.com/assets/home/breach/seq/137.webp?7
https://kzero.com/assets/home/breach/seq/138.webp?7
https://kzero.com/assets/home/breach/seq/139.webp?7
https://kzero.com/assets/home/breach/seq/140.webp?7
https://kzero.com/assets/home/breach/seq/141.webp?7
https://kzero.com/assets/home/breach/seq/142.webp?7
https://kzero.com/assets/home/breach/seq/143.webp?7
https://kzero.com/assets/home/breach/seq/144.webp?7
https://kzero.com/assets/home/breach/seq/145.webp?7
https://kzero.com/assets/home/breach/seq/146.webp?7
https://kzero.com/assets/home/breach/seq/147.webp?7
https://kzero.com/assets/home/breach/seq/148.webp?7
https://kzero.com/assets/home/breach/seq/149.webp?7
https://kzero.com/assets/home/breach/seq/150.webp?7

  
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 150;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.breach`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  // ScrollTrigger.create({

  //   trigger: ".home",
  //   pin: true,
  //   scroller: `body`,
  //   start: `top top`,
  //   end: `250% top`,
  //   // markers:true
  // });


  tl.to('.blck',{
    scrollTrigger:{
      trigger: '.blck',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    scale: .5
  })

  tl.to('.blck>h1',{
    scrollTrigger:{
      trigger: '.blck',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      // markers: true,
    },
    opacity: 0,

  })


  tl.to('.breach',{
    scrollTrigger:{
    trigger: ".breach",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
    // markers:true
    },
  });

  tl.to(['.two','#hero2>h1'],{
    scrollTrigger:{
    trigger: "body",
    // pin: true,
    scroller: `body`,
    start: `597% top`,
    scrub: 1,
    end: `600% top`,
    // markers:true,
    },
    opacity: 0,
    ease: 'power4.in'
  });

  var clutter = "";
document.querySelector(".textarea>h1")
.textContent.split("")
.forEach(function(dets){
  clutter += `<span>${dets}</span>`
  document.querySelector(".textarea>h1").innerHTML = clutter;
})

tl.add(() => {
  const tl2 = gsap.timeline();


  
  tl2.to('.textarea>h1>span', {
    color: '#fff',
    stagger: .2,
    scrollTrigger: {
      trigger: "body",
      scroller: "body",
      start: "610% top",
      end: "650% top",
      scrub: true,
      // markers: true
    }
  });
});

}


const canvas3 = ()=>{
  const canvas = document.querySelector(".phone>.three");
  console.log(canvas)
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = ` 
    https://kzero.com/assets/home/benefit/seq/1.webp?9
https://kzero.com/assets/home/benefit/seq/2.webp?9
https://kzero.com/assets/home/benefit/seq/3.webp?9
https://kzero.com/assets/home/benefit/seq/4.webp?9
https://kzero.com/assets/home/benefit/seq/5.webp?9
https://kzero.com/assets/home/benefit/seq/6.webp?9
https://kzero.com/assets/home/benefit/seq/7.webp?9
https://kzero.com/assets/home/benefit/seq/8.webp?9
https://kzero.com/assets/home/benefit/seq/9.webp?9
https://kzero.com/assets/home/benefit/seq/10.webp?9
https://kzero.com/assets/home/benefit/seq/11.webp?9
https://kzero.com/assets/home/benefit/seq/12.webp?9
https://kzero.com/assets/home/benefit/seq/13.webp?9
https://kzero.com/assets/home/benefit/seq/14.webp?9
https://kzero.com/assets/home/benefit/seq/15.webp?9
https://kzero.com/assets/home/benefit/seq/16.webp?9
https://kzero.com/assets/home/benefit/seq/17.webp?9
https://kzero.com/assets/home/benefit/seq/18.webp?9
https://kzero.com/assets/home/benefit/seq/19.webp?9
https://kzero.com/assets/home/benefit/seq/20.webp?9
https://kzero.com/assets/home/benefit/seq/21.webp?9
https://kzero.com/assets/home/benefit/seq/22.webp?9
https://kzero.com/assets/home/benefit/seq/23.webp?9
https://kzero.com/assets/home/benefit/seq/24.webp?9
https://kzero.com/assets/home/benefit/seq/25.webp?9
https://kzero.com/assets/home/benefit/seq/26.webp?9
https://kzero.com/assets/home/benefit/seq/27.webp?9
https://kzero.com/assets/home/benefit/seq/28.webp?9
https://kzero.com/assets/home/benefit/seq/29.webp?9
https://kzero.com/assets/home/benefit/seq/30.webp?9
https://kzero.com/assets/home/benefit/seq/31.webp?9
https://kzero.com/assets/home/benefit/seq/32.webp?9
https://kzero.com/assets/home/benefit/seq/33.webp?9
https://kzero.com/assets/home/benefit/seq/34.webp?9
https://kzero.com/assets/home/benefit/seq/35.webp?9
https://kzero.com/assets/home/benefit/seq/36.webp?9
https://kzero.com/assets/home/benefit/seq/37.webp?9
https://kzero.com/assets/home/benefit/seq/38.webp?9
https://kzero.com/assets/home/benefit/seq/39.webp?9
https://kzero.com/assets/home/benefit/seq/40.webp?9
https://kzero.com/assets/home/benefit/seq/41.webp?9
    `;
    return data.split("\n")[index];
  }
  
  const frameCount = 41;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `power4.out`,
    scrollTrigger: {
      scrub: .5,
      trigger: `.phone`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: ".phone",
    pin: true,
    scroller: `body`,
    start: `top top`,
    end: `250% top`,
    // markers:true
  });

const animation = gsap.fromTo(
  '.phone>.hero', 
  { opacity: 0 },  
  { opacity: 1 }  
);

ScrollTrigger.create({
  trigger: '.phone',
  scroller: 'body',
  start: 'top top',
  end: '10% top',
  animation: animation,
  scrub: true,
  // markers: true
})

const animation2 = gsap.fromTo(
  '.phone>.hero', 
  { opacity: 1 },  
  { opacity: 0 }  
);

ScrollTrigger.create({
  trigger: '.phone',
  scroller: 'body',
  start: 'top top',
  end: 'bottom top',
  animation: animation2,
  scrub: true,
  // markers: true
})

tl.add(()=>{
 const tl2 = gsap.timeline()

 const three = document.querySelector('.phone>.three')



tl2.to('.phone>.three',{
  opacity: 0,
  display: 'none',
  scrollTrigger: {
    trigger: '.phone>.hero',
    scroller: 'body',
    start: '30% -85%',
    end: '31% top',
    scrub: true,
    // markers: true
  }
})

tl2.to('.phone>.lft, .phone>.rgt',{
  opacity: 1,
  ease: 'power4.in',
  scrollTrigger: {
    trigger: '.phone>.hero',
    scroller: 'body',
    start: '30% -85%',
    end: '31% -86%',
    scrub: true,
    // markers: true
  }
})

tl2.to('.phone>.lft>img',{
  transform: `translateX(-50%)`,
  scrollTrigger: {
    trigger: '.phone>.hero',
    scroller: 'body',
    start: '120% top',
    end: '180% top',
    scrub: true,
    // markers: true
  }
})
tl2.to('.phone>.rgt>img',{
  transform: `translateX(50%)`,
  scrollTrigger: {
    trigger: '.phone>.hero',
    scroller: 'body',
    start: '120% top',
    end: '180% top',
    scrub: true,
    // markers: true
  }
})

tl2.to('.phone>.lft>.multi,.phone>.rgt>.multi',{
 opacity: 0,
  scrollTrigger: {
    trigger: '.phone>.hero',
    scroller: 'body',
    start: '120% top',
    end: '140% top',
    scrub: true,
    // markers: true
  }
})


})




}



canvas();
canvas2()
canvas3()