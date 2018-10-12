import Carousel from '../../carousel/build/index'
//import Carousel from 'react-edu-carousel'

console.log(Carousel);
const containerId = "cont";
const carousel = new Carousel(containerId,
{
    auto: true,
    interval: 2000,
    speed: 300,
    direction: 2, 
    timingFunction: "ease-out",
    showButtons: true
});

// console.log("ASd")
