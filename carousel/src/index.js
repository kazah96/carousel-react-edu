import { containerClass, elementClass } from './consts';
import mouseHandler from './mouseHandler';
import keyboardHandler from './keyboardHandler';
import touchHandler from './touchHandler';
import { generateButtonControl, nextCoords, moveSlides } from './logic';

export default class Carousel {
  constructor(containerId, config = {}) {
    this.direction = (config.direction < 4 && config.direction >= 0)
      ? config.direction : this.defaultDirection;

    this.speed = config.speed > 50
      ? config.speed : this.defaultSpeed;

    this.timingFunction = config.timingFunction || this.defaultTimingFunction;

    this.auto = config.auto || false;

    this.interval = (config.interval > config.speed)
      ? config.interval : config.speed || this.defaultIterval;

    this.array = [];

    this.inTransition = false;

    this.showButtons = config.showButtons || false;

    this.container = document.getElementById(containerId);

    if (this.container == null) throw new Error('Container not found');

    this.container.classList.add(containerClass);

    const { width, height } = getComputedStyle(this.container);

    this.width = width;
    this.height = height;

    this.containerWidth = parseInt(width, 10);
    this.containerHeight = parseInt(height, 10);

    this.array = Array.from(this.container.children);

    this.array.forEach((item) => {
      item.classList.add(elementClass);
      item.style.left = `${this.containerWidth}px`;
      item.style.top = `${this.containerHeight}px`;
    });

    this.array[0].style.left = 0;
    this.array[0].style.top = 0;

    setInterval(() => {
      if (!this.inTransition && this.auto) {
        this.nextSlide(this.direction);
      }
    }, this.interval);

    touchHandler(containerId, direction => this.nextSlide(direction));

    mouseHandler(containerId, direction => this.nextSlide(direction));

    keyboardHandler(direction => this.nextSlide(direction));

    if (this.showButtons) {
      generateButtonControl(containerId,
        { x: this.containerWidth / 2 - 100, y: this.containerHeight - 70 }, {
          nextSlide: rr => this.nextSlide(rr),
          playPause: () => { this.auto = !this.auto; },
        }, this.auto);
    }
  }

  getNextElement() {
    const t = this.array.pop();
    this.array.unshift(t);
    return t;
  }

  getPreviousElement() {
    const t = this.array.shift();
    this.array.push(t);
    return t;
  }


  nextSlide(dir) {
    if (this.inTransition) return;
    const direction = dir === undefined ? this.direction : dir;

    const cfg = {
      ...nextCoords(direction, this.containerWidth, this.containerHeight),
      timingFunction: this.timingFunction,
      speed: this.speed,
    };

    this.inTransition = true;

    if (direction === this.DIRECTION_LEFT || direction === this.DIRECTION_UP) {
      moveSlides(cfg, this.array[0],
        this.getNextElement(), () => { this.inTransition = false; });
    } else {
      const t = this.getPreviousElement();
      moveSlides(cfg, t,
        this.array[0], () => { this.inTransition = false; });
    }
  }
}
