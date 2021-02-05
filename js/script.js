// console.info(document.querySelector('.tabsLinks'))

const   hour = document.querySelector('.h'),
    min = document.querySelector('.m'),                    
    sec = document.querySelector('.s'),
    numberHour = document.querySelector('.hours'),
    numberMinuts = document.querySelector('.minutes'),
    stopHours = document.querySelector('.stopwatch__hours'),          
    stopMinutes = document.querySelector('.stopwatch__minutes'),
    stopSec = document.querySelector('.stopwatch__seconds'),
    stopBTN = document.querySelector('.stopwatch__btn')

console.dir(numberHour)

function clock() {

    const   time = new Date(),
            hours = time.getHours(),
            minutes = time.getMinutes(),
            seconds = time.getSeconds()
    

    hour.style.transform = `rotate(${hours   * 30}deg)`
    min.style.transform = `rotate(${minutes  * 6}deg)`
    sec.style.transform = `rotate(${seconds  * 6}deg)`

    // console.info(hours, minutes, seconds)

    numberHour.innerHTML = hours < 10 ? `0${hours}` : hours
    
    numberMinuts.innerHTML = minutes < 10 ? ` 0${minutes}` : minutes

    setTimeout(clock, 1000)



}

clock()

const tabLinks = document.querySelectorAll('.tabsItem')
const   tabContent = document.querySelectorAll('.tabsContentItem')


for(const key in tabLinks){


    if(typeof tabLinks[key] === 'object')
        tabLinks[key].addEventListener('click', function () { 
            // console.info('Мы нажали на элемент', this.innerText)

            for(let i = 0; i < tabLinks.length; i++){
                tabLinks[i].classList.remove('active')
                tabContent[i].classList.remove('active')
            }
            addActive(this, tabContent[key])

        })
}

function addActive(link, content,stopWatch) { 
    link.classList.add('active')
    content.classList.add('active')

 }


