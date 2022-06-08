gsap.registerPlugin(ScrollTrigger);

// let box = document.querySelector('.project-box');
// let width = 1000;

var boxWidth = 800,
  totalWidth = boxWidth * 4, //  * n of boxes
  boxes = document.querySelectorAll('.box'),
  dirFromLeft = '+=' + totalWidth,
  dirFromRight = '-=' + totalWidth;

var mod = gsap.utils.wrap(0, totalWidth);

function marquee(which, time, direction) {
  gsap.set(which, {
    x: function (i) {
      return i * boxWidth;
    },
  });
  var action = gsap.timeline().to(which, {
    x: direction,
    modifiers: {
      x: (x) => mod(parseFloat(x)) + 'px',
    },
    duration: time,
    ease: 'none',
    repeat: -1,
  });
  return action;
}

var master = gsap.timeline().add(marquee(boxes, 25, dirFromLeft), 1);

// var rotation = gsap.to('.rotation', { rotate: 360, borderColor: 'orange' });
// ScrollTrigger.create({
//   trigger: '.projects',
//   animation: rotation,
//   scrub: 1,
//   start: 'top 50%',
//   end: 'bottom 0%',
// });

// function returnTranslationBasedOnScreen() {
//   if (window.innerWidth <= 1000) {
//     return -2000;
//   }
//   return 2000;
// }

// var tl = gsap.timeline();
// tl.from('.item1 .project-description', { x: -2000, ease: 'power2' });
// tl.from(
//   '.item1 .project-name',
//   { x: returnTranslationBasedOnScreen, ease: 'power2' },
//   '<'
// );
// tl.from('.item2 .project-description', { x: -2000, ease: 'power2' });
// tl.from(
//   '.item2 .project-name',
//   { x: returnTranslationBasedOnScreen, ease: 'power2' },
//   '<'
// );
// tl.from('.item3 .project-description', { x: -2000, ease: 'power2' });
// tl.from(
//   '.item3 .project-name',
//   { x: returnTranslationBasedOnScreen, ease: 'power2' },
//   '<'
// );
// tl.from('.item4 .project-description', { x: -2000, ease: 'power2' });
// tl.from(
//   '.item4 .project-name',
//   { x: returnTranslationBasedOnScreen, ease: 'power2' },
//   '<'
// );

// ScrollTrigger.create({
//   trigger: '.projects-items',
//   animation: tl,
//   scrub: 2,
//   start: 'top 90%',
//   end: 'bottom 90%',
// });

// -moz-transform": "matrix(1, 0, 0, 1, -75, 0)"

// const getTransformXValue = (index, target) => {
//   var style = window.getComputedStyle(target);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   let [translateX, translateY] = [matrix.m41, matrix.m42];
//   if (translateX == -112.5 && translateY == 0) {
//     console.log('1');
//     return '0%';
//   } else if (translateX == 0 && translateY == -18.375) {
//     console.log('1');
//     return '75%';
//   } else if (translateX == 112.5 && translateY == 0) {
//     console.log('1');
//     return '0%';
//   } else if (translateX == 0 && translateY == 18.375) {
//     console.log('1');
//     return '-75%';
//   }
// };

// const getTransformYValue = (index, target) => {
//   console.log('start');
//   var style = window.getComputedStyle(target);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   let [translateX, translateY] = [matrix.m41, matrix.m42];
//   console.log(translateX, translateY);
//   if (translateX == -112.5 && translateY == 0) {
//     console.log('1');
//     return '-75%';
//   } else if (translateX == 0 && translateY == -18.375) {
//     console.log('1');
//     return '0%';
//   } else if (translateX == 112.5 && translateY == 0) {
//     console.log('1');
//     return '75%';
//   } else if (translateX == 0 && translateY == 18.375) {
//     console.log('1');
//     return '0%';
//   }
// };

// var socialRotation = gsap.timeline({ repeat: -1 });

// socialRotation.to(
//   '.social-route .item1',
//   {
//     x: getTransformXValue,
//     y: getTransformYValue,
//     duration: 2,
//     ease: 'linear',
//   },
//   '<'
// );
// socialRotation.to(
//   '.social-route .item2',
//   {
//     x: getTransformXValue,
//     y: getTransformYValue,
//     duration: 2,
//     ease: 'linear',
//   },
//   '<'
// );
// socialRotation.to(
//   '.social-route .item3',
//   {
//     x: getTransformXValue,
//     y: getTransformYValue,
//     duration: 2,
//     ease: 'linear',
//   },
//   '<'
// );
// socialRotation.to(
//   '.social-route .item4',
//   {
//     x: getTransformXValue,
//     y: getTransformYValue,
//     duration: 2,
//     ease: 'linear',
//   },
//   '<'
// );

// socialRotation.play();

// const routeContainer = document.querySelector('.social-route');
// routeContainer.addEventListener('mouseenter', () => {
//   console.log('enter');
//   socialRotation.pause();
// });

// routeContainer.addEventListener('mouseleave', () => {
//   console.log('leave');
//   socialRotation.resume();
// });
