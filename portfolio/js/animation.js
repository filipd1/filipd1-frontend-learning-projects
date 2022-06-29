if (window.innerWidth >= 1080) {

  const tl = gsap.timeline({defaults: {duration: 0.75, ease: Power1.easeOut}});

  tl.fromTo('header', {opacity: 0, y: -150}, {opacity: 1, y: 0});

  tl.fromTo('.hero-text-container', {opacity: 0, x: -150}, {opacity: 1, x: 0});
  tl.fromTo('.hero-svg', {opacity: 0, y: 150}, {opacity: 1, y: 0});
  tl.fromTo('.hero-img', {opacity: 0, y: -140}, {opacity: 1, y: 0}, '<');
  tl.fromTo('.switch', {opacity: 0}, {opacity: 1});

  // tl.fromTo('.featured-img', {opacity: 0, x: 50}, {opacity: 1, x: 0});
  // tl.fromTo('#txt', {opacity: 0, x: -50}, {opacity: 1, x: 0}, '<');

  // tl.fromTo('#txt1', {opacity: 0, x: -50}, {opacity: 1, x: 0});
  // tl.fromTo('#img1', {opacity: 0, x: 100}, {opacity: 1, x: 0}, '<');

  // tl.fromTo('#txt2', {opacity: 0, x: 50}, {opacity: 1, x: 0});
  // tl.fromTo('#img2', {opacity: 0, x: -100}, {opacity: 1, x: 0}, '<');

  // tl.fromTo('#txt3', {opacity: 0, x: -50}, {opacity: 1, x: 0});
  // tl.fromTo('#img3', {opacity: 0, x: 100}, {opacity: 1, x: 0}, '<');


  const scrollOffset = 400;
  const scrollElementImg1 = document.getElementById("img1");
  const scrollElementTxt1 = document.getElementById("txt1");

  const scrollElementTxt2 = document.getElementById("txt2");
  const scrollElementImg2 = document.getElementById("img2");

  const scrollElementTxt3 = document.getElementById("txt3");
  const scrollElementImg3 = document.getElementById("img3");

  const scrollElementTxt4 = document.getElementById("txt4");
  const scrollElementImg4 = document.getElementById("img4");

  const scrollElementCard1 = document.getElementById("card1");
  const scrollElementCard2 = document.getElementById("card2");
  const scrollElementCard3 = document.getElementById("card3");
  
  const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    );
  };

  
  const handleScrollAnimation = () => {
    if (elementInView(scrollElementImg1, scrollOffset)) {
      scrollElementImg1.style.animation = 'appear 700ms ease-in';
      scrollElementTxt1.style.animation = 'appearReverse 700ms ease-in';
      scrollElementImg1.style.opacity = '1';
      scrollElementTxt1.style.opacity = '1';
    }

    if (elementInView(scrollElementImg2, scrollOffset)) {
      scrollElementImg2.style.animation = 'appear 700ms ease-in';
      scrollElementTxt2.style.animation = 'appearReverse 700ms ease-in';
      scrollElementImg2.style.opacity = '1';
      scrollElementTxt2.style.opacity = '1';
    }

    if (elementInView(scrollElementImg3, scrollOffset)) {
      scrollElementImg3.style.animation = 'appearReverse 700ms ease-in';
      scrollElementTxt3.style.animation = 'appear 700ms ease-in';
      scrollElementImg3.style.opacity = '1';
      scrollElementTxt3.style.opacity = '1';
    }

    if (elementInView(scrollElementImg4, scrollOffset)) {
      scrollElementImg4.style.animation = 'appear 700ms ease-in';
      scrollElementTxt4.style.animation = 'appearReverse 700ms ease-in';
      scrollElementImg4.style.opacity = '1';
      scrollElementTxt4.style.opacity = '1';
    }

    if (elementInView(scrollElementCard1, scrollOffset)) {
      scrollElementCard1.style.animation = 'appearReverse 700ms ease-in';
      scrollElementCard1.style.opacity = '1';

      scrollElementCard2.style.animation = 'appearDown 1s ease-in';
      scrollElementCard2.style.opacity = '1';

      scrollElementCard3.style.animation = 'appear 700ms ease-in';
      scrollElementCard3.style.opacity = '1';
    }

  }
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })
}