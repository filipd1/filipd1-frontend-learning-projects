const sectionWrapper = document.querySelector('.section-wrapper-2');
const sectionWrapper2 = document.querySelector('.section-wrapper-3');
const sectionOne = document.querySelector(".model-3");
const sectionTwo = document.querySelector(".model-y");


const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};


new fullpage('#fullPage', {
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Model 3', 'Model Y', 'Model S'],
    showActiveTooltip: true,
    scrollingSpeed: 1000,  
});



// const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             sectionWrapper.classList.add('section-scrolled');
//         } else {
//             sectionWrapper.classList.remove('section-scrolled');
//         }
//     });
// },
// sectionOneOptions);

// const sectionTwoObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             sectionWrapper2.classList.add('section-scrolled');
//         } else {
//             sectionWrapper2.classList.remove('section-scrolled');
//         }
//     });
// },
// sectionOneOptions);

// sectionOneObserver.observe(sectionOne);
// sectionTwoObserver.observe(sectionTwo);