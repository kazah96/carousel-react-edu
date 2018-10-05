function setCssVariable(property, value) {
    document.documentElement.style.setProperty(property, value);
}
function setCssTransitionSpeed(speed = 1000) {
    setCssVariable(`--transition-speed`, `${speed}ms`);
}

function setCssElementInitPosition(position = { x: -200, y: 0 }) {
    setCssVariable(`--initial-position-x`, `${position.x}px`);
    setCssVariable(`--initial-position-y`, `${position.y}px`);
}

function setCssTransitionPosition(transition = { x: 200, y: 0 }) {
    setCssVariable(`--transition-direction-x`, `${transition.x}px`);
    setCssVariable(`--transition-direction-y`, `${transition.y}px`);
}

function setCssElementSize(size = { width: 50, height: 50 }) {
    setCssVariable(`--element-width`, `${size.width}px`);
    setCssVariable(`--element-height`, `${size.height}px`);
}

export default function (containerId, config = { direction: 2, time: 500 }) {
    const hiddenItemClass = "hidden-element";
    const currentElementClass = "center-element"
    const pusherClass = "pusher";
    const { time, direction } = config;

    this.inTransition = false;

    const container = document.getElementById(containerId);
    if (container == null) throw new Error("Container not found");

    let { width, height } = getComputedStyle(container);

    this.containerWidth = parseInt(width);
    this.containerHeight = parseInt(height);

    setCssTransitionSpeed(time);

    //Config
    // direction: 0-left, 1-up, 2-right, 3-down
    this.setDirection = (direction) => {
        switch (direction) {
            case 0:
                setCssElementInitPosition({ x: this.containerWidth, y: 0 });
                setCssElementSize({ width: this.containerWidth, height: this.containerHeight });
                setCssTransitionPosition({ x: -this.containerWidth, y: 0 });
                break;
            case 1:
                setCssElementInitPosition({ x: 0, y: -this.containerHeight });
                setCssElementSize({ width: this.containerWidth, height: this.containerHeight });
                setCssTransitionPosition({ x: 0, y: this.containerHeight });
                break;
            case 2:
                setCssElementInitPosition({ x: -this.containerWidth, y: 0 });
                setCssElementSize({ width: this.containerWidth, height: this.containerHeight });
                setCssTransitionPosition({ x: this.containerWidth, y: 0 });
                break;
            case 3:
                setCssElementInitPosition({ x: 0, y: this.containerHeight });
                setCssElementSize({ width: this.containerWidth, height: this.containerHeight });
                setCssTransitionPosition({ x: 0, y: -this.containerHeight });
                break;

            default:
        }
    }

    document.addEventListener('keydown', event => {
        if (this.inTransition === false)
            switch (event.keyCode) {
                case 37:
                    this.rotate(0, this.getNextElement());
                    break;
                case 38:
                    this.rotate(3, this.getNextElement());
                    break;
                case 39:
                    this.rotate(2, this.getNextElement());
                    break;
                case 40:
                    this.rotate(1, this.getNextElement());
                    break;
                default:
                    break;
            }
    })

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

    this.rotate = (direction, nextElement) => {
        this.setDirection(direction);

        this.inTransition = true;

        nextElement.classList.add(pusherClass);
        nextElement.classList.add("next-element");
        nextElement.classList.remove(hiddenItemClass);

        this.currentElement.classList.add(pusherClass);

        setTimeout(o => {
            nextElement.classList.remove(pusherClass);
            nextElement.classList.add(currentElementClass);
            this.currentElement.classList.remove(pusherClass);
            this.currentElement.classList.remove(currentElementClass);
            this.currentElement.classList.add(hiddenItemClass);
            this.currentElement = nextElement;
            this.currentElement.classList.remove("next-element");
            this.inTransition = false;
        }, time);

    };

   
    this.array = Array.from(container.children);

    this.array.forEach(item => {
        item.classList.toggle(hiddenItemClass);
        item.classList.toggle("element");
        item.classList.toggle("next-element");
    });

    this.setDirection(0);
    this.currentElement = this.array[0];
    this.currentElement.classList.add(currentElementClass);
    this.currentElement.classList.remove("next-element");
    this.currentElement.classList.toggle(hiddenItemClass);
    
    setInterval(() => {
        if(!this.inTransition)
            this.rotate(direction, this.getNextElement());
    }, 2000);

    container.addEventListener('click', o => {
        if (this.inTransition === false)
            this.rotate(direction, this.getNextElement());
        }
    );

}