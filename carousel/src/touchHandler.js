import {
  DIRECTION_LEFT, DIRECTION_DOWN, DIRECTION_RIGHT, DIRECTION_UP,
} from './consts';

// класик для обработки свайпа
export default function touchHandler(contId, onSwipe) {
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
}
