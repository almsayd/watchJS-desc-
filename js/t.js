const   watchBtn = document.querySelector('.stopwatch__btn'), /* Подключение Кнопка запуска секундомера */
        secondWatch = document.querySelector('.stopwatch__seconds'), /* Подкючение секунд секундомера */
        minutesWatch = document.querySelector('.stopwatch__minutes'), /* Подключение минут секундомера */
        hoursWatch = document.querySelector('.stopwatch__hours'), /* Подключение часов секундомера */
        seconfInfo = document.querySelector('.tabsLink__span'); /* ПОдключение span'а для показа запуска секундомера
                                                                Принимает на себя класы работы:
                                                                active - Секундомер запущен
                                                                active_clear - Секундомер остановлен но данные не сброшены */
        
watchBtn.addEventListener('click', function () { 
    if (this.innerHTML == 'start') { /* если при клике есть старт то делай это: */
        this.innerHTML = 'stop'; /* сначала вместо 'start' вставить 'stop'*/
        seconfInfo.classList.add('active'); /* далее добавить в элемент показа работы секундомера класс 'active' */
        let i = 0;
        setTimeout(() => stopWatch(this, i), 1000) /* перезапуск каждую секунду, stopWatch- это функция,написанная ниже */

    } else if (this.innerHTML == 'stop') { /* а если в watchBtn написано 'stop' то делай это: */
        seconfInfo.classList.remove('active'); /* убрать класс active со спана показа запуска секундомера */
        seconfInfo.classList.add('active_clear'); /* добавить класс active_clear в спан показа запуска секундомера */
        this.innerHTML = 'clear'; /* вставить  clear вместо stop в button'е watchBtn */
    } else { /* если ниодно условие не подошло то делай это: (проще говоря,стереть все) */
        seconfInfo.classList.remove('active_clear'); /* убрать со спана класс active_clear */
        secondWatch.innerHTML = 0; 
        minutesWatch.innerHTML = 0; /* очистить все показатели времени(секунды, минуты, часы) */
        hoursWatch.innerHTML = 0;
        this.innerHTML = 'start'; /* вернуть start в button stopWatch */
    }
})
function stopWatch(el, i) { /* функция,принимающая два значения el и i */
    if (el.innerHTML == 'stop') { /*  если в содержимом el есть stop то делай это:  */
        if (i == 60) { /* если значение i равно 60 то делай это (переход на минуты => часы (счет времени)): */
            i = 0; /* отсчет секунд с нуля */
            secondWatch.innerHTML = i /* отсчет секунд с нуля */
            if (minutesWatch.innerHTML == 59) {  /* если значение в минутах равно 59 то делай это: */
                minutesWatch.innerHTML = 0; /* онулирование минут */
                hoursWatch.innerHTML++; /* и +1 к часам(время) */
            } else {
                minutesWatch.innerHTML++ /* +1 к минутам */
            }
        } else { /* если же не равно к stop то: */
            i++ /* добавляй 1 к секундам stopWatch */
            secondWatch.innerHTML = i; /* и приравнивай значение i  к секундам в html коде */
        }
        setTimeout(() => stopWatch(el, i), 1000); /* повтор функции каждую секунду */
    } 
} 