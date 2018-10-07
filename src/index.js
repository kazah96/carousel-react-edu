const elementClass = "react-edu-carousel__element";
const containerClass = "react-edu-carousel__container";
const buttonClass = "react-edu-carousel__button";

const DIRECTION_LEFT = 0;
const DIRECTION_RIGHT = 2;
const DIRECTION_UP = 1;
const DIRECTION_DOWN = 3;

const defaultSpeed = 500;
const defaultIterval = 2000;
const defaultTimingFunction = "ease-in-out";
const defaultDirection = DIRECTION_RIGHT;

//класик для обработки свайпа
function touchHandler(contId, onSwipe) {
    const swipeDistance = 200;
    let container = document.getElementById(contId);

    let startPoint = {};

    swipeActive = false;

    container.addEventListener('touchstart', function (event) {
        event.preventDefault();
        event.stopPropagation();

        startPoint.x = event.changedTouches[0].pageX;
        startPoint.y = event.changedTouches[0].pageY;

    }, false);

    container.addEventListener('touchmove', function (event) {
        event.preventDefault();
        event.stopPropagation();

        let newPoint = event.changedTouches[0];
        let offsetX = newPoint.pageX - startPoint.x;
        let offsetY = newPoint.pageY - startPoint.y;

        if (Math.abs(offsetX) > swipeDistance) {
            if (offsetX > 0) { onSwipe(DIRECTION_RIGHT); }
            if (offsetX < 0) { onSwipe(DIRECTION_LEFT); }


            startPoint.x = newPoint.pageX;
            startPoint.y = newPoint.pageY;
        }
        if (Math.abs(offsetY) > swipeDistance) {
            if (offsetY < 0) { onSwipe(DIRECTION_UP); }
            if (offsetY > 0) { onSwipe(DIRECTION_DOWN); }

            startPoint.x = newPoint.pageX;
            startPoint.y = newPoint.pageY;

        }


    }, false);

    this.remove = function () {
        container.removeEventListener('touchstart');
        container.removeEventListener('touchmove');
    }
}



// класик для обработки клавы
function keyboardHandler(onPress) {
    document.addEventListener('keydown', event => {
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

//чистим транзишены
function clearElementTransition(element) {
    element.style.transitionProperty = "";
    element.style.transitionDuration = "";
    element.style.transitionTimingFunction = "";
}

//устанавливаем транзишены
function setElementTransition(element, speed, timingFunction) {
    element.style.transitionDuration = `${speed}ms`;
    element.style.transitionTimingFunction = timingFunction;
}

//устанавливаем поизицию
function setElementPosition(element, x, y) {
    element.style.left = x + 'px';
    element.style.top = y + 'px';

}

function addButton(containerId, element, position = { x: 0, y: 0 }, onPress) {
    const container = document.getElementById(containerId);
    setElementPosition(element, position.x, position.y);

    element.addEventListener('click', onPress);

    container.appendChild(element);
}

// двигаем слайды
function moveSlides(
    params = { // дефолт значения
        initX: 200,
        initY: 0,
        destX: -200,
        destY: 0,
        speed: 2000,
        timingFunction: "ease-out"
    },
    currentElement,
    nextElement, onFinish) {

    clearElementTransition(nextElement);
    clearElementTransition(currentElement);
    setElementPosition(nextElement, params.initX, params.initY);

    getComputedStyle(nextElement).left; // грязный хак
    getComputedStyle(nextElement).top; // грязный хак

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
    let params = {
        initX: 0,
        initY: 0,
        destX: 0,
        destY: 0
    }
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
    }

    return params;
}

function Carousel(containerId, config = {}) {
    this.direction = (config.direction < 4 && config.direction >= 0) ? config.direction : defaultDirection;
    this.speed = config.speed > 50 ? config.speed : defaultSpeed;
    this.timingFunction = config.timingFunction || defaultTimingFunction;
    this.auto = config.auto || false;
    this.interval = (config.interval > config.speed) ? config.interval : config.speed || defaultIterval;

    this.array = [];
    this.inTransition = false;

    const container = document.getElementById(containerId);
    if (container == null) throw new Error("Container not found");
    container.classList.add(containerClass);

    let { width, height } = getComputedStyle(container);

    this.containerWidth = parseInt(width);
    this.containerHeight = parseInt(height);

    this.getNextElement = () => {
        let t = this.array.pop();
        this.array.unshift(t);
        return t;
    }

    this.getPreviousElement = () => {
        let t = this.array.shift();
        this.array.push(t);
        return t;
    }


    this.nextSlide = (direction) => {
        if (this.inTransition) return;
        let config = {
            ...nextCoords(direction, this.containerWidth, this.containerHeight),
            timingFunction: this.timingFunction,
            speed: this.speed
        }

        this.inTransition = true;
        if (direction === DIRECTION_LEFT || direction === DIRECTION_UP) {
            moveSlides(config, this.array[0],
                this.getNextElement(), onFinish = o => this.inTransition = false);
        }
        else {
            let t = this.getPreviousElement();
            moveSlides(config, t,
                this.array[0], onFinish = o => this.inTransition = false);
        }
    }

    // инициализация;
    this.array = Array.from(container.children);

    this.array.forEach(item => {
        item.classList.add(elementClass);
        item.style.left = this.containerWidth + 'px';
        item.style.top = this.containerHeight + 'px';
    });

    this.array[0].style.left = 0;
    this.array[0].style.top = 0;


    setInterval(() => {
        if (!this.inTransition && this.auto) {
            this.nextSlide(this.direction);
        }
    }, this.interval);

    touchHandler(containerId, direction => {
        if (!this.inTransition)
            this.nextSlide(direction)
    });

    keyboardHandler(direction => {
        if (!this.inTransition)
            this.nextSlide(direction)
    });

}