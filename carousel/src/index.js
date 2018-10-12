import style from './style.css'; // eslint-disable-line

const elementClass = 'react-edu-carousel__element';
const containerClass = 'react-edu-carousel__container';
const buttonClass = 'react-edu-carousel__button';

const DIRECTION_LEFT = 0;
const DIRECTION_RIGHT = 2;
const DIRECTION_UP = 1;
const DIRECTION_DOWN = 3;

const defaultSpeed = 500;
const defaultIterval = 2000;
const defaultTimingFunction = 'ease-in-out';
const defaultDirection = DIRECTION_RIGHT;


function mouseHandler(contId, onSwipe) {
  const swipeDistance = 100;
  const container = document.getElementById(contId);

  const startPoint = {};

  this.mouseActive = false;

  container.addEventListener('mousedown', (event) => {
    this.mouseActive = true;
    event.preventDefault();

    startPoint.x = event.pageX;
    startPoint.y = event.pageY;
  }, false);

  container.addEventListener('mouseup', () => {
    this.mouseActive = false;
  });

  container.addEventListener('mouseout', () => {
    this.mouseActive = false;
  });

  container.addEventListener('mousemove', (event) => {
    if (!this.mouseActive) return;

    event.preventDefault();
    event.stopPropagation();

    const newPoint = {};
    newPoint.pageX = event.pageX;
    newPoint.pageY = event.pageY;
    const offsetX = newPoint.pageX - startPoint.x;
    const offsetY = newPoint.pageY - startPoint.y;

    if (Math.abs(offsetX) > swipeDistance) {
      if (offsetX > 0) { onSwipe(DIRECTION_RIGHT); }
      if (offsetX < 0) { onSwipe(DIRECTION_LEFT); }
      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;

      return;
    }
    if (Math.abs(offsetY) > swipeDistance) {
      if (offsetY < 0) { onSwipe(DIRECTION_UP); }
      if (offsetY > 0) { onSwipe(DIRECTION_DOWN); }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
    }
  }, false);
}

// класик для обработки свайпа
function touchHandler(contId, onSwipe) {
  const swipeDistance = 100;
  const container = document.getElementById(contId);

  const startPoint = {};

  container.addEventListener('touchstart', (event) => {
    event.preventDefault();
    event.stopPropagation();

    startPoint.x = event.changedTouches[0].pageX;
    startPoint.y = event.changedTouches[0].pageY;
  }, false);

  container.addEventListener('touchmove', (event) => {
    event.preventDefault();
    event.stopPropagation();

    const newPoint = event.changedTouches[0];
    const offsetX = newPoint.pageX - startPoint.x;
    const offsetY = newPoint.pageY - startPoint.y;

    if (Math.abs(offsetX) > swipeDistance) {
      if (offsetX > 0) { onSwipe(DIRECTION_RIGHT); }
      if (offsetX < 0) { onSwipe(DIRECTION_LEFT); }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
      return;
    }
    if (Math.abs(offsetY) > swipeDistance) {
      if (offsetY < 0) { onSwipe(DIRECTION_UP); }
      if (offsetY > 0) { onSwipe(DIRECTION_DOWN); }

      startPoint.x = newPoint.pageX;
      startPoint.y = newPoint.pageY;
    }
  }, false);

  this.remove = () => {
    container.removeEventListener('touchstart');
    container.removeEventListener('touchmove');
  };
}

// класик для обработки клавы
function keyboardHandler(onPress) {
  document.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case 37:
        onPress(DIRECTION_LEFT);
        break;
      case 38:
        onPress(DIRECTION_UP);
        break;
      case 39:
        onPress(DIRECTION_RIGHT);
        break;
      case 40:
        onPress(DIRECTION_DOWN);
        break;
      default:
        break;
    }
  });
}

// чистим транзишены
function clearElementTransition(element) {
  element.style.transitionProperty = '';
  element.style.transitionDuration = '';
  element.style.transitionTimingFunction = '';
}

// устанавливаем транзишены
function setElementTransition(element, speed, timingFunction) {
  element.style.transitionDuration = `${speed}ms`;
  element.style.transitionTimingFunction = timingFunction;
}

// устанавливаем поизицию
function setElementPosition(element, x, y) {
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function addButton(containerId, element, position = { x: 0, y: 0 }, onPress) {
  const container = document.getElementById(containerId);
  setElementPosition(element, position.x, position.y);

  element.addEventListener('click', onPress);
  element.addEventListener('touchstart', onPress);

  container.appendChild(element);
}

function generateButtonControl(containerId, position = { x: 0, y: 0 }, onClick = {}, auto = false) {
  const offset = 70;
  const { x, y } = position;

  const leftButton = document.createElement('div');
  leftButton.classList.add(buttonClass);
  leftButton.classList.add(`${buttonClass}-left`);

  const rightButton = document.createElement('div');
  rightButton.classList.add(buttonClass);
  rightButton.classList.add(`${buttonClass}-right`);

  const playPauseButton = document.createElement('div');
  playPauseButton.classList.add(buttonClass);

  playPauseButton.classList.add(
    auto === false ? `${buttonClass}-play` : `${buttonClass}-pause`,
  );

  addButton(containerId, leftButton, { x, y }, () => onClick.nextSlide(0));
  addButton(containerId, rightButton, { x: x + offset * 2, y }, () => onClick.nextSlide(2));

  addButton(containerId, playPauseButton, { x: x + offset, y }, () => {
    playPauseButton.classList.toggle(`${buttonClass}-play`);
    playPauseButton.classList.toggle(`${buttonClass}-pause`);

    onClick.playPause();
  });
}
// двигаем слайды
function moveSlides(
  params = { // дефолт значения
    initX: 200,
    initY: 0,
    destX: -200,
    destY: 0,
    speed: 2000,
    timingFunction: 'ease-out',
  },
  currentElement,
  nextElement, onFinish,
) {
  clearElementTransition(nextElement);
  clearElementTransition(currentElement);
  setElementPosition(nextElement, params.initX, params.initY);

  let t = getComputedStyle(nextElement).left; // грязный хак
  t = getComputedStyle(nextElement).top; // грязный хак
  t.trim();

  setElementTransition(nextElement, params.speed, params.timingFunction);
  setElementTransition(currentElement, params.speed, params.timingFunction);

  setElementPosition(nextElement, 0, 0);

  setElementPosition(currentElement, params.destX, params.destY);

  setTimeout(() => {
    clearElementTransition(nextElement);
    clearElementTransition(currentElement);

    setElementPosition(currentElement, params.initX, params.initY);

    onFinish();
  }, params.speed);
}

// выдаёт координаты для следующего слайдика в зависимости от направления
function nextCoords(direction, width, height) {
  const params = {
    initX: 0,
    initY: 0,
    destX: 0,
    destY: 0,
  };
  switch (direction) {
    case DIRECTION_LEFT:
      params.initX = width;
      params.destX = -width;
      break;
    case DIRECTION_RIGHT:
      params.initX = -width;
      params.destX = width;
      break;
    case DIRECTION_DOWN:
      params.initY = -height;
      params.destY = height;
      break;
    case DIRECTION_UP:
      params.initY = height;
      params.destY = -height;
      break;
    default:
      break;
  }

  return params;
}

export default function Carousel(containerId, config = {}) {
  this.direction = (config.direction < 4 && config.direction >= 0)
    ? config.direction : defaultDirection;

  this.speed = config.speed > 50
    ? config.speed : defaultSpeed;

  this.timingFunction = config.timingFunction || defaultTimingFunction;

  this.auto = config.auto || false;

  this.interval = (config.interval > config.speed)
    ? config.interval : config.speed || defaultIterval;

  this.array = [];

  this.inTransition = false;

  this.showButtons = config.showButtons || false;

  const container = document.getElementById(containerId);
  if (container == null) throw new Error('Container not found');
  container.classList.add(containerClass);

  const { width, height } = getComputedStyle(container);

  this.containerWidth = parseInt(width, 10);
  this.containerHeight = parseInt(height, 10);

  this.getNextElement = () => {
    const t = this.array.pop();
    this.array.unshift(t);
    return t;
  };

  this.getPreviousElement = () => {
    const t = this.array.shift();
    this.array.push(t);
    return t;
  };


  this.nextSlide = (dir) => {
    if (this.inTransition) return;
    const direction = dir === undefined ? this.direction : dir;

    const cfg = {
      ...nextCoords(direction, this.containerWidth, this.containerHeight),
      timingFunction: this.timingFunction,
      speed: this.speed,
    };

    this.inTransition = true;
    if (direction === DIRECTION_LEFT || direction === DIRECTION_UP) {
      moveSlides(cfg, this.array[0],
        this.getNextElement(), () => { this.inTransition = false; });
    } else {
      const t = this.getPreviousElement();
      moveSlides(cfg, t,
        this.array[0], () => { this.inTransition = false; });
    }
  };

  // инициализация;
  this.array = Array.from(container.children);

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
        nextSlide: this.nextSlide,
        playPause: () => { this.auto = !this.auto; },
      }, this.auto);
  }
}
