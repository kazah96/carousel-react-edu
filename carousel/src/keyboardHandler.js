import {
  DIRECTION_LEFT, DIRECTION_DOWN, DIRECTION_RIGHT, DIRECTION_UP,
} from './consts';

// класик для обработки клавы
export default function keyboardHandler(onPress) {
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
