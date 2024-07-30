//adding test comment
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  console.log("working");
  const teamSlider = new Swiper(".swiper.is--teams", {
    slidesPerView: "auto",
    freeMode: true,
  });

  //SPLIT TEXT CODE
  //SPLIT TEXT CODE
  let splitText;
  function runSplit() {
    splitText = new SplitType("[text-split-wf]", {
      types: "lines, words",
      tagName: "span",
      lineClass: "lines-wf",
      wordClass: "words-wf",
    });
  }
  runSplit();

  // â€”â€”â€”â€”â€” Update on window resize
  let windowWidth = $(window).innerWidth();
  window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
      windowWidth = $(window).innerWidth();
      splitText.revert();
      runSplit();
    }
  });

  //gsap set
  $(".subscript-wf").css("position", "absolute");
  gsap.set(".h1-wf", { opacity: 1 });
  gsap.set(".hero-butn-anime", { yPercent: 100 });
  gsap.set(".hero-car-img-wrap", { opacity: 0, x: "20vw" });
  gsap.set(".hero-middle-strip, .hero-line-svg", {
    opacity: 0,
    xPercent: -20,
  });

  //Loader ANIMATION
  const loader_tl = gsap.timeline({
    defaults: {
      ease: "sine.out",
    },
  });
  loader_tl.to(".h1-wf .words-wf", {
    rotateX: 0,
    duration: 0.6,
    stagger: 0.1,
  });

  loader_tl.to(".hero-butn-anime", {
    opacity: 1,
    yPercent: 0,
    duration: 0.6,
  });

  loader_tl.to(
    ".hero-car-img-wrap",
    {
      x: "0vw",
      opacity: 1,
      duration: 1.5,
      ease: "elastic.out(1,0.3)",
    },
    ">-0.6"
  );

  loader_tl.to(
    ".hero-middle-strip, .hero-line-svg",
    {
      opacity: 1,
      xPercent: 0,
      duration: 0.6,
      stagger: 0.15,
    },
    0
  );

  loader_tl.to(
    ".global-arrow-wrap.is--hero-top, .global-arrow-wrap.is--hero-bottom ",
    {
      opacity: 1,
      x: "0rem",
      duration: 0.4,
      stagger: 0.04,
    },
    0.3
  );

  //Main headers
  document
    .querySelectorAll(".global-module-content-wrap")
    .forEach((trigger) => {
      let headings = trigger.querySelectorAll("[headings-anime] .words-wf");
      let paras = trigger.querySelectorAll(".text-20px-wf .lines-wf");
      let header_tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "0% 80%",
          end: "0% 60%",
          toggleActions: "play non none reverse",
          // markers: true,
        },
      });
      header_tl.to(headings, {
        rotateX: 0,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.1,
      });
      header_tl.to(paras, {
        y: "0rem",
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    });

  //GSAP HORIZONTAL SCROLL-
  const horz_tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".horz-trigger-wf",
      start: "5% top",
      end: "bottom bottom",
      scrub: 1.2,
      // markers: true,
      default: {
        ease: "none",
      },
    },
  });

  horz_tl2.to(".horz-track-wf2", {
    xPercent: -100,
  });

  //POPUP CLICK ANIMATION
  //POPUP CLICK ANIMATION
  $(".main-wrapper-wf .cta-button-webflow, .cta-button-webflow.is--nav").on(
    "click",
    function () {
      $(".popup-wrap-wf").css("display", "flex");
    }
  );
  $(".popup-wf-close-butn").on("click", function () {
    $(this).closest(".popup-wrap-wf").css("display", "none");
  });

  //ACCORDIAN CLICK ANIMATION
  //ACCORDIAN CLICK ANIMATION
  $(".faq-answer-wrapper").addClass("is--wf-close");
  $(".faq-question-wrapper").on("click", function () {
    $(this).siblings(".faq-answer-wrapper").toggleClass("is--wf-close");
    console.log("faq");
  });
});
