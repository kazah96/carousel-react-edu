# REACT-EDU-CAROUSEL 


REACT-EDU-CAROUSEL - штука чтобы двигать картинки влево и даже вправо


### КАК УСТАНОВИТЬ!
 
 Скачать пакет
```sh
$ npm react-edu-carousel
```
Добавить библиотечку в проект.

```sh
import Carousel from 'react-edu-carousel'
```

Добавить стили
```
<link rel="stylesheet" href="react-edu-carousel/main.css">
```

Активировать карусельку
```
const carousel = new Carousel(containerId,
{
    auto: true,
    interval: 2000,
    speed: 300,
    direction: 2, 
    timingFunction: "ease-out",
    showButtons: true
});
```

