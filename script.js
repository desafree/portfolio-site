let box = document.querySelector('.project-box');
let width = box.offsetWidth;

var boxWidth = width,
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
