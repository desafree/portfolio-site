gsap.registerPlugin(ScrollTrigger);

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

var rotation = gsap.to('.rotation', { rotate: 360 });
ScrollTrigger.create({
  trigger: '.projects',
  animation: rotation,
  scrub: 1,
  start: 'top 50%',
  end: 'bottom 0%',
});

var tl = gsap.timeline();
tl.from('.item1 .project-description', { x: -2000, ease: 'power2' });
tl.from('.item1 .project-name', { x: 2000, ease: 'power2' }, '<');
tl.from('.item2 .project-description', { x: -2000, ease: 'power2' });
tl.from('.item2 .project-name', { x: 2000, ease: 'power2' }, '<');
tl.from('.item3 .project-description', { x: -2000 });
tl.from('.item3 .project-name', { x: 2000, ease: 'power2' }, '<');
tl.from('.item4 .project-description', { x: -2000, ease: 'power2' });
tl.from('.item4 .project-name', { x: 2000, ease: 'power2' }, '<');

ScrollTrigger.create({
  trigger: '.projects-items',
  animation: tl,
  scrub: 1,
  start: 'top 90%',
  end: 'bottom 90%',
});
