import Carousel from 'react-edu-carousel';

const containerId = 'cont';

const f = new Carousel(containerId, // eslint-disable-line 
  {
    auto: true,
    interval: 2000,
    speed: 300,
    direction: 2,
    timingFunction: 'ease-out',
    showButtons: true,
  });

// console.log("ASd")
