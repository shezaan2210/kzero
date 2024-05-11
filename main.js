import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions: {
    wrapper: window,
    content: document.documentElement,
    lerp: 0.1,
    duration: 1.2,
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    normalizeWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  },
});
const tl4 = gsap.timeline();
window.addEventListener("load", () => {
  tl4.to(
    ".left",
    {
      marginLeft: "5rem",
    },
    "a"
  );
  tl4.to(
    ".right",
    {
      marginRight: "5rem",
    },
    "a"
  );
  tl4.to(
    ".icons",
    {
      opacity: 0,
    },
    "a"
  );
  tl4.to(".loader", {
    duration: 1,
    y: "-100%",
    ease: "power4.inOut",
    onComplete: hideLoader,
  });

  document.querySelector("nav").style.display = "flex";
});

const hideLoader = () => {
  document.querySelector(".loader").style.display = "none";
};

function animateSVG() {
  const svgContainer = document.querySelector(".icons");
  console.log(svgContainer);
  const svgs = [
    '<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path stroke="#fff" d="M17.44 1.3h-16v16M17.44 83.3h-16v-16M67.44 1.3h16v16M67.44 83.3h16v-16" opacity=".2"></path><path fill="#fff" d="M31.83 22.33c-.19.24-.16.59.08.79a.54.54 0 0 0 .77-.08c2.38-2.95 5.2-5.4 8.4-7.31.4-.24.81-.46 1.23-.66.27-.13.4-.46.27-.74a.54.54 0 0 0-.73-.28c-.45.21-.9.45-1.32.7a32.55 32.55 0 0 0-8.7 7.58ZM26.87 27.4a.54.54 0 0 1-.27-.07.57.57 0 0 1-.21-.76A35.44 35.44 0 0 1 35.8 15.3a.54.54 0 0 1 .77.1c.19.25.14.6-.1.8a34.31 34.31 0 0 0-9.13 10.92c-.1.19-.29.3-.48.3ZM24.38 27.4a.54.54 0 0 1-.24-.06.57.57 0 0 1-.25-.75c.43-.86.89-1.72 1.38-2.54.15-.26.5-.35.75-.19.26.16.34.5.19.77-.47.8-.92 1.63-1.33 2.46-.1.2-.3.31-.5.31ZM63.86 42.54a.57.57 0 0 0-.05-.8.54.54 0 0 0-.77.06 19.4 19.4 0 0 1-2.36 2.32c-.45.37-.63 1-.45 1.56l.4 1.27a.55.55 0 0 0 .68.37c.3-.09.45-.4.36-.7l-.4-1.29a.32.32 0 0 1 .1-.34 20.5 20.5 0 0 0 2.5-2.45ZM63.08 44.97c.22-.21.57-.2.77.03.21.23.2.58-.03.8l-.07.06.23.77a.56.56 0 0 1-.53.72.55.55 0 0 1-.53-.4c-.1-.39-.22-.75-.32-1.1a.57.57 0 0 1 .16-.59l.32-.3ZM62.3 48.87a40.22 40.22 0 0 1 1.08 5.8.56.56 0 0 1-.53.62.55.55 0 0 1-.55-.5l-.06-.54c-.2-1.65-.53-3.31-1-5.1-.07-.3.1-.6.4-.68.29-.08.6.1.67.4Z"></path><path fill="#fff" d="M58.7 44.5a.32.32 0 0 1 .11-.36 18.16 18.16 0 0 0 5.1-5.42.57.57 0 0 0-.17-.78.54.54 0 0 0-.76.18 17.06 17.06 0 0 1-4.79 5.09 1.45 1.45 0 0 0-.54 1.63l.24.76c1.25 3.88 2.64 9.02 2.35 14.33-.01.31.22.58.52.6h.03c.3 0 .54-.24.55-.54.3-5.5-1.13-10.76-2.4-14.74-.1-.28-.17-.53-.24-.76ZM22.81 39.67h.08c.27 0 .5-.2.54-.48.52-3.67 1.57-7.2 3.13-10.51a.57.57 0 0 0-.25-.75.55.55 0 0 0-.74.26 37.52 37.52 0 0 0-3.22 10.84c-.05.3.16.6.46.64ZM24.72 55.8a.54.54 0 0 1-.69-.37c-1.26-4.03-2.37-8.53-1.93-14.1.02-.3.29-.53.59-.51.3.02.53.3.5.6-.42 5.38.66 9.75 1.89 13.67.1.3-.07.61-.36.7ZM57.47 49.97a.56.56 0 0 0-.4.68c1.14 4.63 1.31 8.8.52 12.77a.56.56 0 0 0 .53.68c.26 0 .49-.19.54-.45.83-4.14.66-8.48-.52-13.27a.55.55 0 0 0-.67-.4Z"></path><path fill="#fff" d="M55.6 42.31c.13-.14.27-.27.42-.36a15.05 15.05 0 0 0 6.8-8.92c.08-.3.39-.47.68-.39.29.09.46.4.37.7a16.17 16.17 0 0 1-7.3 9.58.64.64 0 0 0-.14.13c-.21.25-.28.63-.17.99a74.9 74.9 0 0 0 .97 3.12c.1.3-.06.62-.35.71a.55.55 0 0 1-.69-.36l-.39-1.2-.6-1.95c-.2-.73-.05-1.51.4-2.05ZM27.41 31.4a.54.54 0 0 1-.21-.05.57.57 0 0 1-.3-.73 34.4 34.4 0 0 1 3.84-6.86c.18-.25.52-.3.77-.12.24.19.3.54.11.79a33.26 33.26 0 0 0-3.7 6.63.55.55 0 0 1-.5.34ZM26.03 32.95a35.6 35.6 0 0 0-1.74 8.56c-.4 5.13.65 9.42 1.74 12.94a.55.55 0 0 0 .7.37c.28-.1.44-.41.35-.7-1.1-3.6-2.08-7.6-1.7-12.52.22-2.83.8-5.62 1.69-8.29a.57.57 0 0 0-.34-.71.55.55 0 0 0-.7.35ZM26.6 56.65c.16.27.07.61-.2.77l-.73.42c-.28.16-.57.34-.84.52a.55.55 0 0 1-.76-.17.57.57 0 0 1 .17-.78c.29-.2.6-.38.9-.55l.72-.42c.26-.15.6-.06.75.2ZM54.89 48.9c-.3.1-.46.4-.37.7 1.15 4.04 2.4 10.17-.05 16.76-.1.29.03.61.32.72a.54.54 0 0 0 .7-.32c2.56-6.91 1.27-13.28.08-17.47a.55.55 0 0 0-.68-.38Z"></path><path fill="#fff" d="M53.76 41.07c.33-.44.72-.8 1.16-1.06a13.12 13.12 0 0 0 6.1-13.37c-.05-.3.15-.59.45-.64.3-.06.58.15.63.46a14.26 14.26 0 0 1-6.63 14.52c-.31.2-.6.45-.83.77-.6.81-.78 1.93-.48 2.98l.6 1.92c.1.3-.06.62-.35.71a.54.54 0 0 1-.7-.35l-.6-1.96c-.4-1.4-.16-2.88.65-3.98ZM27.56 35.47a.56.56 0 0 0 .53.71c.24 0 .46-.16.53-.4a30.15 30.15 0 0 1 13.57-18.11 12.43 12.43 0 0 1 6.36-1.76c.3 0 .55-.25.55-.56a.56.56 0 0 0-.55-.56c-2.42 0-4.82.66-6.91 1.9a31.26 31.26 0 0 0-14.08 18.78ZM29 55.31l.18-.05-.52.17.35-.12Z"></path><path fill="#fff" d="m29.7 55.08-.7.23-.34.12c-1.17-3.62-2.62-8.14-2.18-13.74.09-1.13.23-2.26.44-3.37.05-.3.34-.5.64-.45.3.05.5.35.44.65-.2 1.08-.34 2.17-.43 3.26-.42 5.37 1 9.77 2.13 13.3ZM28.63 58.02c.16.26.08.6-.18.77l-1.71 1.02c-.31.17-.62.37-.92.57-.09.06-.2.1-.3.1a.55.55 0 0 1-.46-.26.57.57 0 0 1 .15-.78c.32-.22.66-.42 1-.62.6-.34 1.16-.67 1.66-.99.26-.16.6-.08.76.19ZM52.67 47.36c-.16-.5-.4-1.27-.6-1.97-.5-1.7-.22-3.54.75-4.9.43-.6.95-1.1 1.54-1.45A11.62 11.62 0 0 0 59 33.9a.57.57 0 0 0-.27-.75.54.54 0 0 0-.73.27 10.51 10.51 0 0 1-4.18 4.65 6.19 6.19 0 0 0-1.88 1.76 6.92 6.92 0 0 0-.92 5.88c.2.72.45 1.49.62 2 1.34 4.18 3.59 11.19.48 18.63-.28.65-.58 1.3-.91 1.92a.57.57 0 0 0 .22.76c.08.05.17.07.26.07.2 0 .38-.1.48-.3.35-.64.67-1.32.96-2.01 3.27-7.83.94-15.09-.45-19.42ZM58.65 31.57l.07-.3c.61-2.67.2-5.44-1.14-7.8a.57.57 0 0 1 .2-.78c.26-.15.6-.06.75.2a11.98 11.98 0 0 1 1.18 8.96.55.55 0 0 1-.67.4.56.56 0 0 1-.39-.68ZM42.74 18.64a28.04 28.04 0 0 0-5.78 4.59.57.57 0 0 0 0 .8.54.54 0 0 0 .78-.01 27 27 0 0 1 5.56-4.4 10.27 10.27 0 0 1 12.99 2.05c.2.22.55.24.77.03.23-.2.25-.56.04-.8a11.35 11.35 0 0 0-14.36-2.27v.01Z"></path><path fill="#fff" d="m31.65 59.28-.37.29a34.1 34.1 0 0 1-3.47 2.2c-.27.16-.54.32-.8.5a.54.54 0 0 1-.76-.15.57.57 0 0 1 .15-.78c.28-.2.57-.38.87-.55a33.07 33.07 0 0 0 3.7-2.4c.43-.34.6-.9.45-1.44-.22-.8-.5-1.68-.67-2.21-1.11-3.45-2.48-7.72-2.08-12.87a30.16 30.16 0 0 1 6.65-16.8c.2-.24.54-.27.77-.07.24.2.27.55.07.79a29.03 29.03 0 0 0-6.4 16.17c-.38 4.92.95 9.08 2.03 12.41.17.55.46 1.45.7 2.27a2.5 2.5 0 0 1-.84 2.64ZM51.98 59.97a.55.55 0 0 0-.6.5c-.2 1.71-.63 3.39-1.3 4.98-.53 1.28-1.2 2.5-1.98 3.65-.17.26-.1.6.14.79a.54.54 0 0 0 .77-.14 21.8 21.8 0 0 0 2.09-3.85 19.2 19.2 0 0 0 1.37-5.3.56.56 0 0 0-.49-.63ZM53.46 36.33c.15.27.06.61-.2.77a8.19 8.19 0 0 0-3.77 6.48c-.07.85.58 2.86 1.1 4.48.77 2.4 1.73 5.4 1.95 8.83a.56.56 0 0 1-.55.6.55.55 0 0 1-.54-.52c-.22-3.3-1.16-6.22-1.9-8.56h-.01c-.6-1.89-1.23-3.84-1.15-4.92a9.3 9.3 0 0 1 4.31-7.36c.27-.16.6-.07.76.2Z"></path><path fill="#fff" d="M55.22 34.74a.54.54 0 0 0 .77-.11 9.68 9.68 0 0 0 .63-10.6 9.2 9.2 0 0 0-12.78-3.44 26.44 26.44 0 0 0-9.56 9.97.57.57 0 0 0 .2.77c.27.15.6.05.76-.22 2.2-3.99 5.36-7.29 9.16-9.56a8.1 8.1 0 0 1 11.28 3.04 8.55 8.55 0 0 1-.56 9.36c-.19.25-.14.6.1.79ZM33.88 53.67c.96 3 1.34 4.45 1.05 5.15-.73 1.72-3.62 3.54-6.06 4.92l-.48.3a.54.54 0 0 1-.76-.17.57.57 0 0 1 .16-.78c.18-.12.37-.23.55-.33 1.23-.7 4.91-2.8 5.58-4.39.14-.5-.68-3.08-1.08-4.33v-.01c-1.05-3.25-2.35-7.28-1.98-11.98.25-3.17 1-6.24 2.25-9.12a.54.54 0 0 1 .73-.28c.28.12.4.45.28.74a27.34 27.34 0 0 0-2.16 8.75c-.35 4.47.9 8.38 1.91 11.53ZM48.5 48.76c-.67-2.09-1.3-4.05-1.2-5.36.1-1.34.43-2.63.97-3.82a.57.57 0 0 0-.27-.74.54.54 0 0 0-.73.27c-.6 1.31-.95 2.72-1.07 4.2-.12 1.53.55 3.6 1.25 5.8 1.3 4.04 3.08 9.58.61 15.46-.83 2-2 3.8-3.55 5.48-.2.23-.2.58.03.8a.54.54 0 0 0 .77-.03 19.71 19.71 0 0 0 3.76-5.81c2.63-6.27.78-12.04-.58-16.25Z"></path><path fill="#fff" d="M54.73 25.16a7.4 7.4 0 0 1 .73 5.54 7.24 7.24 0 0 1-3.3 4.45 9.41 9.41 0 0 0-2.38 2.03.54.54 0 0 1-.78.05.57.57 0 0 1-.05-.79c.76-.9 1.66-1.67 2.65-2.26a6.27 6.27 0 0 0 2.18-8.46 5.94 5.94 0 0 0-8.27-2.23.54.54 0 0 1-.75-.2.57.57 0 0 1 .2-.76 7.02 7.02 0 0 1 9.77 2.63ZM42.76 25.44c.23-.2.27-.55.08-.8a.54.54 0 0 0-.77-.08A25.47 25.47 0 0 0 33 44.51c.02.3.26.53.55.53h.03c.3-.01.54-.27.52-.58a24.33 24.33 0 0 1 8.64-19.02ZM35.96 52.97c.93 2.87 1.65 5.14.99 6.73-.98 2.34-4.1 4.35-7 6a.54.54 0 0 1-.76-.21.57.57 0 0 1 .22-.77c2.75-1.56 5.68-3.43 6.53-5.46.5-1.2-.17-3.3-1.02-5.94v-.02c-.56-1.72-1.18-3.67-1.57-5.82-.05-.3.15-.6.44-.65.3-.06.59.15.64.45.37 2.08.99 4 1.53 5.7ZM46.4 49.46c-.46-1.44-.9-2.8-1.13-4.07a.55.55 0 0 0-.65-.44c-.3.06-.49.35-.43.66.25 1.33.7 2.72 1.17 4.2 1.26 3.9 2.82 8.77.68 13.87a17.34 17.34 0 0 1-4.62 6.28.57.57 0 0 0-.05.8.54.54 0 0 0 .78.05 18.44 18.44 0 0 0 4.9-6.69c2.3-5.48.67-10.57-.64-14.66Z"></path><path fill="#fff" d="M45.1 43.22a.55.55 0 0 1-.54.51h-.05a.56.56 0 0 1-.5-.6 13.82 13.82 0 0 1 6.48-10.89 3.99 3.99 0 0 0 1.39-5.38 3.78 3.78 0 0 0-5.26-1.42c-.92.55-1.81 1.18-2.64 1.87a.54.54 0 0 1-.77-.07.57.57 0 0 1 .08-.8c.87-.73 1.8-1.4 2.77-1.97a4.86 4.86 0 0 1 6.77 1.82 5.12 5.12 0 0 1-1.79 6.92 12.69 12.69 0 0 0-5.94 10ZM37.2 61.47c-.17.25-.12.6.13.78a.54.54 0 0 0 .77-.12c.36-.5.65-1.02.87-1.54 1-2.37.15-5-.92-8.32-.93-2.91-1.99-6.2-1.71-9.77.38-4.82 2.27-9.4 5.34-12.93a.57.57 0 0 0-.04-.8.54.54 0 0 0-.78.05 23.56 23.56 0 0 0-5.62 13.6c-.3 3.78.8 7.2 1.77 10.2 1 3.1 1.78 5.54.95 7.52-.19.45-.44.9-.75 1.33ZM36.04 62.81c.22-.21.57-.2.78.02.2.22.2.58-.02.8a25.24 25.24 0 0 1-4.96 3.56.55.55 0 0 1-.75-.2.57.57 0 0 1 .2-.77 24.24 24.24 0 0 0 4.75-3.4ZM45.03 63.24c1.6-3.8.91-7.49.14-10.28a.55.55 0 0 0-.68-.39c-.29.09-.46.4-.38.7.77 2.77 1.36 6.07-.09 9.53-1.03 2.45-2.84 4.65-5.55 6.7a.57.57 0 0 0-.11.79.54.54 0 0 0 .77.11c2.86-2.17 4.8-4.52 5.9-7.16Z"></path><path fill="#fff" d="m44.32 50.16-1.05.35c-.84-2.64-1.64-5.13-1.45-7.56.41-5.35 3.24-10.08 7.56-12.65a1.7 1.7 0 0 0 .6-2.3 1.63 1.63 0 0 0-2.26-.62 19.25 19.25 0 0 0-8.65 11.92.55.55 0 0 1-.66.4.56.56 0 0 1-.4-.68 20.38 20.38 0 0 1 9.16-12.6c1.3-.79 3-.33 3.76 1a2.84 2.84 0 0 1-1 3.85c-4 2.39-6.63 6.79-7.02 11.77-.17 2.2.6 4.6 1.4 7.12ZM41.06 58.56h.01c.3 0 .55-.26.54-.57-.06-2.04-.74-4.17-1.47-6.42-.91-2.84-1.85-5.78-1.6-8.89a.56.56 0 0 0-.51-.6.56.56 0 0 0-.6.5c-.26 3.35.72 6.4 1.67 9.34.7 2.17 1.35 4.22 1.4 6.1.02.3.26.54.56.54ZM40.7 60.73c.28.13.41.46.3.74-1.36 3.24-4.47 5.47-7.03 7.05a.54.54 0 0 1-.75-.2.57.57 0 0 1 .18-.77c3.6-2.21 5.62-4.23 6.58-6.52a.54.54 0 0 1 .72-.3Z"></path><path fill="#fff" d="M40.17 43.38c.29 0 .53-.23.55-.52.45-5.72 3.48-10.77 8.11-13.53.26-.16.35-.5.2-.77a.54.54 0 0 0-.75-.2c-4.94 2.94-8.18 8.33-8.65 14.41-.03.3.2.58.5.6h.04ZM42.23 50.87c1.2 3.71 2.43 7.56.78 11.49-1.12 2.67-3.22 4.97-6.6 7.25-.1.06-.2.1-.31.1a.55.55 0 0 1-.46-.26.57.57 0 0 1 .16-.78c3.2-2.15 5.17-4.3 6.2-6.76 1.48-3.54.37-7.01-.81-10.69-.51-1.58-1.04-3.21-1.34-4.85-.05-.3.14-.6.44-.66.3-.05.59.15.64.45.3 1.57.8 3.16 1.3 4.7Z"></path><path fill="url(#paint0_linear_10_144)" d="M.44 42.3h83v41h-83z" opacity=".1"></path><path stroke="#fff" stroke-width="2" d="M.44 42.3h83"></path><defs><linearGradient id="paint0_linear_10_144" x1="41.94" x2="41.94" y1="42.3" y2="83.3" gradientUnits="userSpaceOnUse"><stop stop-color="#191921"></stop><stop offset="1" stop-color="#191921" stop-opacity="0"></stop></linearGradient></defs></svg>',

    ' <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path stroke="#fff" d="M17.44 1.3h-16v16M17.44 83.3h-16v-16M67.44 1.3h16v16M67.44 83.3h16v-16" opacity=".2"></path><path fill="#fff" d="M30.33 38.05c.43.54.75 1.18.96 1.82.22.64.32 1.38.32 2.13s-.1 1.5-.32 2.13a5.93 5.93 0 0 1-.96 1.82c-.53.74-.42 1.81.32 2.34.75.54 1.82.43 2.35-.32.64-.85 1.07-1.7 1.5-2.77.42-1.07.53-2.13.53-3.2A10.01 10.01 0 0 0 33 36.03c-.53-.75-1.6-.86-2.35-.32-.74.53-.85 1.6-.32 2.34ZM36.2 34.96a13.24 13.24 0 0 1 0 14.08c-.53.75-.21 1.81.53 2.35.86.53 1.82.21 2.35-.54a16.55 16.55 0 0 0 0-17.7c-.53-.75-1.6-1.07-2.35-.54-.74.54-1.06 1.5-.53 2.35Z"></path><path fill="#fff" d="M42.39 31.76A19.64 19.64 0 0 1 45.16 42a20.7 20.7 0 0 1-2.77 10.24c-.43.85-.22 1.81.64 2.35.85.42 1.81.21 2.34-.64A22.85 22.85 0 0 0 48.68 42c0-4.37-1.17-8.43-3.3-11.95-.43-.85-1.5-1.06-2.35-.64a1.74 1.74 0 0 0-.64 2.35Z"></path><path fill="#fff" d="M48.57 28.56A27.22 27.22 0 0 1 52.2 42c0 4.9-1.28 9.5-3.63 13.44-.42.85-.21 1.81.64 2.35.86.42 1.82.21 2.35-.64a30.32 30.32 0 0 0 0-30.3c-.43-.85-1.5-1.06-2.35-.64-.85.43-1.06 1.5-.64 2.35Z"></path></svg>',

    ' <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path stroke="#fff" d="M17.44 1.3h-16v16M17.44 83.3h-16v-16M67.44 1.3h16v16M67.44 83.3h16v-16" opacity=".2"></path><path fill="#fff" d="M62.03 34.93A16 16 0 0 0 49.71 22.6a22.34 22.34 0 0 0-4.34-.34v4.58c1.85.03 2.99.11 3.97.37a11.43 11.43 0 0 1 8.08 8.08c.18.68.28 1.44.33 2.45H56.2a10.24 10.24 0 0 0-.52-2.88 9.9 9.9 0 0 0-5.92-5.91c-1.15-.42-2.48-.55-4.4-.59v4.58c.48 0 .9.03 1.3.06.96.08 1.6.23 2.13.5 1 .51 1.82 1.33 2.33 2.33.27.53.42 1.17.5 2.14.03.39.05.81.06 1.3h1.53c-.01-.52-.04-1-.07-1.43a7.06 7.06 0 0 0-.66-2.7 6.86 6.86 0 0 0-3-3 6.93 6.93 0 0 0-2.6-.65v-1.54c.99.07 1.71.2 2.36.43a8.38 8.38 0 0 1 5 5c.34.94.46 2.04.5 3.89h4.57a18 18 0 0 0-.43-4.37 12.95 12.95 0 0 0-9.16-9.16c-.81-.22-1.7-.33-2.84-.38v-1.54c1.03.05 1.8.12 2.5.27a14.48 14.48 0 0 1 11.15 11.15c.22 1.01.28 2.17.3 4.03h1.53c-.02-1.9-.1-3.2-.34-4.34ZM49.7 62.03A16 16 0 0 0 62.04 49.7c.24-1.15.32-2.44.34-4.35H57.8c-.02 1.86-.1 3-.37 3.98a11.43 11.43 0 0 1-8.08 8.08c-.68.18-1.44.28-2.45.33V56.2c1.15-.08 2.06-.23 2.88-.52a9.9 9.9 0 0 0 5.92-5.92c.41-1.15.54-2.48.58-4.4l-1.53-.03v.02H51.7c0 .49-.03.92-.06 1.3a5.59 5.59 0 0 1-.5 2.14 5.33 5.33 0 0 1-2.33 2.33c-.53.27-1.17.42-2.14.5-.38.03-.81.05-1.3.06v1.53c.53-.01 1-.03 1.43-.07a7.07 7.07 0 0 0 2.7-.66 6.86 6.86 0 0 0 3-3c.38-.75.56-1.58.65-2.6h1.54c-.07.99-.2 1.71-.42 2.36a8.38 8.38 0 0 1-5.01 5c-.94.34-2.04.45-3.89.5v4.57a18 18 0 0 0 4.37-.43 12.95 12.95 0 0 0 9.16-9.16c.22-.81.33-1.7.38-2.84h1.54a14.8 14.8 0 0 1-.27 2.5A14.48 14.48 0 0 1 49.4 60.54c-1 .21-2.16.28-4.02.3v1.53c1.9-.02 3.2-.1 4.34-.34ZM34.93 62.03A16 16 0 0 1 22.6 49.7a22.35 22.35 0 0 1-.34-4.35h1.52c.02 1.86.1 3.02.3 4.03a14.48 14.48 0 0 0 11.16 11.15c.7.15 1.47.23 2.5.27v-1.54a13.43 13.43 0 0 1-2.85-.38 12.95 12.95 0 0 1-9.16-9.16 18 18 0 0 1-.43-4.37h4.58c.04 1.85.15 2.95.49 3.89a8.38 8.38 0 0 0 5 5c.65.24 1.37.36 2.37.43v-1.54a6.93 6.93 0 0 1-2.61-.65 6.86 6.86 0 0 1-3-3 7.06 7.06 0 0 1-.66-2.7c-.03-.43-.06-.9-.07-1.43h1.53c0 .49.03.92.06 1.3.08.97.23 1.61.5 2.14.51 1 1.33 1.82 2.33 2.33.53.27 1.17.42 2.14.5.38.03.81.05 1.3.06v4.58c-1.93-.04-3.26-.17-4.4-.58a9.9 9.9 0 0 1-5.92-5.92c-.3-.82-.45-1.73-.53-2.88h-1.54c.06 1.01.15 1.77.33 2.45a11.43 11.43 0 0 0 8.09 8.08c.98.26 2.11.35 3.97.37v4.58c-1.9-.02-3.2-.1-4.34-.34ZM34.93 22.6A16 16 0 0 0 22.6 34.93a22.35 22.35 0 0 0-.34 4.34h4.57c.03-1.86.11-3 .37-3.98a11.43 11.43 0 0 1 8.09-8.08c.67-.18 1.43-.28 2.45-.33v1.54c-1.16.08-2.07.23-2.88.52a9.9 9.9 0 0 0-5.92 5.92c-.42 1.15-.55 2.48-.59 4.4h4.58c0-.48.03-.9.06-1.3.08-.96.23-1.6.5-2.13.51-1 1.33-1.82 2.33-2.33a5.59 5.59 0 0 1 2.14-.5c.38-.03.81-.05 1.3-.06V31.4l-1.43.07a7.07 7.07 0 0 0-2.7.66 6.86 6.86 0 0 0-3 3 6.93 6.93 0 0 0-.65 2.6h-1.54c.07-.99.2-1.71.43-2.35a8.38 8.38 0 0 1 5-5.01c.94-.34 2.04-.45 3.89-.5v-4.57a18 18 0 0 0-4.37.43 12.95 12.95 0 0 0-9.16 9.16c-.22.81-.33 1.7-.38 2.84h-1.53c.04-1.03.12-1.8.27-2.5A14.48 14.48 0 0 1 35.25 24.1c1-.21 2.16-.28 4.02-.3v-1.53c-1.9.03-3.2.1-4.34.34Z"></path><rect width="6.1" height="6.1" x="39.27" y="39.27" stroke="#fff" stroke-width="1.52" rx="2.03"></rect></svg>',

    ' <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 84"><path stroke="#fff" d="M17.44 1.3h-16v16M17.44 83.3h-16v-16M67.44 1.3h16v16M67.44 83.3h16v-16" opacity=".2"></path><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M37.63 50.18a8.17 8.17 0 0 0 4.81 1.64c2.05 0 3.68-.82 4.8-1.64M50.62 37.09v3.27M34.26 37.09v3.27M42.44 37.09v6.55c0 .9-.73 1.63-1.64 1.63M60.44 32.18v-4.9c0-1.82-1.46-3.28-3.27-3.28h-4.91M32.62 24H27.7a3.27 3.27 0 0 0-3.27 3.27v4.91M52.26 60h4.9c1.82 0 3.28-1.47 3.28-3.27v-4.91M24.44 51.82v4.9c0 1.81 1.46 3.28 3.27 3.28h4.9"></path></svg>',
  ];
  let currentSvgIndex = 0;

  // Function to replace SVG with animation
  function replaceSVG() {
    svgContainer.innerHTML = svgs[currentSvgIndex];
    currentSvgIndex = (currentSvgIndex + 1) % svgs.length; // Increment index, loop back to 0 when it reaches the end
    setTimeout(replaceSVG, 300); // Repeat every 3 milliseconds
  }

  // Start the animation
  replaceSVG();
}

function animateCountdown() {
  // Your countdown animation code here

  const updateProgress = (percentage) => {
    const loaderProgress = document.querySelector(".loader>.progress");
    if (loaderProgress) {
      loaderProgress.textContent = percentage + "%";

      // gsap.fromTo(loaderProgress, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.inOut' }); // Adjusted easing function
    } else {
      console.error("Loader progress element not found");
    }
  };

  let progress = 0;

  tl4.to(
    {},
    {
      duration: 5,
      ease: "none",
      onUpdate: function () {
        const currentProgress = Math.round(this.progress() * 100); // Access progress property
        const nextStep = Math.ceil(currentProgress / 33) * 33; // Calculate next step in increments of 33
        progress = Math.min(nextStep, 100); // Ensure progress doesn't exceed 100

        updateProgress(progress);

        gsap.to(".loader>.progress", {
          duration: 0.5,
          translateY: `${100 - progress}%`, // Translate upwards by the remaining percentage
          ease: "power2.out", // Easing function for smooth animation
        });
      },
    }
  );
}

// Run both animations simultaneously
gsap
  .timeline()
  .add(animateSVG()) // Add SVG animation to timeline
  .add(animateCountdown(), 0); // Add countdown animation at the start (0 seconds) of the timeline

var tl = gsap.timeline();

function canvas() {
  const canvas = document.querySelector(".home>.homepage");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 140;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    // img.src = files(i);
    img.src = `https://kzero.com/assets/home/hero/seq/${i + 1}.webp?10`;
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.home`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  }
  // resizeCanvas()
  // images[1].onload = render;

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

  const home = document.querySelector("#home");
  console.log(home);

  ScrollTrigger.create({
    trigger: ".home",
    pin: true,
    start: "top top",
    end: () => "+=" + window.innerHeight * 2,
    scroller: "body",
    onLeave: () => {
      const trigger = ScrollTrigger.getById(".home");
      if (trigger) {
        trigger.kill();
      }
    },
  });

  tl.to(".home>.overlay", {
    scrollTrigger: {
      trigger: ".overlay",
      // pin: true,
      scroller: `body`,
      start: `170% top`,
      end: `250% top`,
      // markers: true,
      scrub: true,
    },
    opacity: 1,
  });

  // ScrollTrigger.create({
  //   trigger: ".overlay",
  //   start: "170% top",
  //   end: () => "+=" + (window.innerHeight * 0.7),
  //   scroller: "body",
  //   onUpdate: (self) => tl.to(self.trigger, { opacity: 1, duration: 0.5, overwrite: "auto" })
  // });

  tl.to(".home>.text", {
    scrollTrigger: {
      trigger: ".text",
      // pin: true,
      scroller: `body`,
      start: `top top`,
      end: `bottom top`,
      // markers: true,
      scrub: true,
    },
    opacity: 0,
  });

  tl.to(`.home>.text2`, {
    scrollTrigger: {
      trigger: ".text2",
      // pin: true,
      scroller: `body`,
      start: `top top`,
      end: `400% top`,
      // markers: true,
      scrub: true,
    },
    top: "-20%",
  });

  tl.to(`.home>.text3`, {
    scrollTrigger: {
      trigger: ".text3",
      // pin: true,
      scroller: `body`,
      start: `top top`,
      end: `400% top`,
      // markers: true,
      scrub: true,
    },
    top: "-20%",
  });

  // ScrollTrigger.batch(".text, .text2, .text3", {
  //   onEnter: (batch) => tl.to(batch, { opacity: 0, duration: 0.5, overwrite: "auto" }),
  //   scroller: "body"
  // });

  // ScrollTrigger.batch(".text2, .text3", {
  //   onEnter: (batch) => tl.to(batch, { top: "-20%", duration: 0.5, overwrite: "auto" }),
  //   scroller: "body"
  // });

  window.addEventListener("resize", resizeCanvas);
  images[1].onload = render;
  resizeCanvas();
}

function canvas2() {
  const canvas = document.querySelector(".breach>.two");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 150;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `https://kzero.com/assets/home/breach/seq/${i}.webp?7`;
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.5,
      trigger: `.breach`,
      start: `top top`,
      end: `250% top`,
      scroller: `body`,
    },
    onUpdate: render,
  });

  // const render = () => {
  //   const img = images[imageSeq.frame];
  //   if (img) scaleImage(img, context);
  // };

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

  tl.to(".blck", {
    scrollTrigger: {
      trigger: ".blck",
      start: "center center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
    scale: 0.5,
  });

  tl.to(".blck>h1", {
    scrollTrigger: {
      trigger: ".blck",
      start: "center center",
      end: "bottom center",
      scrub: true,
      // markers: true,
    },
    opacity: 0,
  });

  tl.to(".breach", {
    scrollTrigger: {
      trigger: ".breach",
      pin: true,
      scroller: `body`,
      start: `top top`,
      end: `350% top`,
      // end: '.phone top'
      // markers:true,
      onLeave: () => {
        const trigger = ScrollTrigger.getById(".breach");
        if (trigger) {
          trigger.kill();
        }
      },
    },
  });

  tl.to([".two", "#hero2>h1"], {
    scrollTrigger: {
      trigger: "body",
      // pin: true,
      scroller: `body`,
      start: `550% top`,
      scrub: 1,
      end: `552% top`,
      // markers:true,
    },
    opacity: 0,
    ease: "power4.in",
  });

  var clutter = "";
  document
    .querySelector(".textarea>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;
      document.querySelector(".textarea>h1").innerHTML = clutter;
    });

  // const clutter = document.querySelector(".textarea > h1");
  // clutter.innerHTML = clutter.textContent
  //   .split("")
  //   .map(char => `<span>${char}</span>`)
  //   .join("");

  tl.add(() => {
    const tl2 = gsap.timeline();

    tl2.to(".textarea>h1>span", {
      color: "#fff",
      stagger: 0.2,
      scrollTrigger: {
        trigger: "body",
        scroller: "body",
        start: "550% top",
        end: "650% top",
        scrub: true,
        // markers: true
      },
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const countdownElement = document.getElementById('countdown');

    function updateCountdownProgress() {
        const scrollProgress = ScrollTrigger.progress.toFixed(2) * 100;
        countdownElement.textContent = `${scrollProgress}%`;
    }

    ScrollTrigger.create({
        onUpdate: updateCountdownProgress,
        end: "bottom bottom",
        scrub: 1
    });
});
}

const canvas3 = () => {
  const canvas = document.querySelector(".phone>.three");
  console.log(canvas);
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  const frameCount = 41;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = ` https://kzero.com/assets/home/benefit/seq/${i}.webp?9`;
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `power4.out`,
    scrollTrigger: {
      scrub: 0.5,
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
    // end: `250% top`,
    end: "+=150%",
    // markers:true
    onLeave: () => {
      const trigger = ScrollTrigger.getById(".phone");
      if (trigger) {
        trigger.kill();
      }
    },
  });

  const animation = gsap.fromTo(".phone>.hero", { opacity: 0 }, { opacity: 1 });

  ScrollTrigger.create({
    trigger: ".phone",
    scroller: "body",
    start: "top top",
    end: "10% top",
    animation: animation,
    scrub: true,
    // markers: true
  });

  const animation2 = gsap.fromTo(
    ".phone>.hero",
    { opacity: 1 },
    { opacity: 0 }
  );

  ScrollTrigger.create({
    trigger: ".phone",
    scroller: "body",
    start: "top top",
    end: ".cards top",
    animation: animation2,
    scrub: true,
    // markers: true
  });

  tl.add(() => {
    const tl2 = gsap.timeline();

    tl2.to(".phone>.three", {
      opacity: 0,
      display: "none",
      scrollTrigger: {
        trigger: ".phone>.hero",
        scroller: "body",
        start: "30% -85%",
        end: "31% top",
        scrub: true,
        // markers: true
      },
    });

    tl2.to(".phone>.lft, .phone>.rgt", {
      opacity: 1,
      ease: "power4.in",
      scrollTrigger: {
        trigger: ".phone>.hero",
        scroller: "body",
        start: "30% -85%",
        end: "31% -86%",
        scrub: true,
        // markers: true
      },
    });

    tl2.to(".phone>.lft>img", {
      transform: `translateX(-50%)`,
      scrollTrigger: {
        trigger: ".phone>.hero",
        scroller: "body",
        start: "120% top",
        end: "180% top",
        scrub: true,
        // markers: true
      },
    });
    tl2.to(".phone>.rgt>img", {
      transform: `translateX(50%)`,
      scrollTrigger: {
        trigger: ".phone>.hero",
        scroller: "body",
        start: "120% top",
        end: "180% top",
        scrub: true,
        // markers: true
      },
    });

    tl2.to(".phone>.lft>.multi,.phone>.rgt>.multi", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".phone>.hero",
        scroller: "body",
        start: "120% top",
        end: "140% top",
        scrub: true,
        // markers: true
      },
    });
  });
};

gsap.to(".carditems", {
  scrollTrigger: {
    trigger: "#cards",
    scroller: "body",
    start: "365% top",
    end: "+=50%",
    scrub: true,
    // pin: true,
    pinType: "fixed",
    pinSpacing: false, // Prevents spacing when pinned
    // markers: true // Add markers for visualization
  },
  transform: `translateX(-50%) rotate(-30deg)`,
});

canvas();
canvas2();
canvas3();
