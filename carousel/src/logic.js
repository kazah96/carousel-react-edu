import {
  buttonClass, DIRECTION_LEFT, DIRECTION_DOWN, DIRECTION_RIGHT, DIRECTION_UP,
} from './consts';

export function clearElementTransition(element) {
  element.style.transitionProperty = '';
  element.style.transitionDuration = '';
  element.style.transitionTimingFunction = '';
}

// устанавливаем транзишены
export function setElementTransition(element, speed, timingFunction) {
  element.style.transitionDuration = `${speed}ms`;
  element.style.transitionTimingFunction = timingFunction;
}

// устанавливаем поизицию
export function setElementPosition(element, x, y) {
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

export function addButton(containerId, element, position = { x: 0, y: 0 }, onPress) {
  const container = document.getElementById(containerId);
  setElementPosition(element, position.x, position.y);

  element.addEventListener('click', onPress);
  element.addEventListener('touchstart', onPress);

  container.appendChild(element);
}

export function generateButtonControl(containerId,
  position = { x: 0, y: 0 },
  onClick = {},
  auto = false) {
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
export function moveSlides(
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

export function nextCoords(direction, width, height) {
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
