import {
  DIRECTION_LEFT, DIRECTION_DOWN, DIRECTION_RIGHT, DIRECTION_UP,
} from './consts';

export default function mouseHandler(contId, onSwipe) {
  const swipeDistance = 100;
  const container = document.getElementById(contId);

  const startPoint = {};

  let mouseActive = false;

  container.addEventListener('mousedown', (event) => {
    mouseActive = true;
    event.preventDefault();

    startPoint.x = event.pageX;
    startPoint.y = event.pageY;
  }, false);

  container.addEventListener('mouseup', () => {
    mouseActive = false;
  });

  container.addEventListener('mouseout', () => {
    mouseActive = false;
  });

  container.addEventListener('mousemove', (event) => {
    if (!mouseActive) return;

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
