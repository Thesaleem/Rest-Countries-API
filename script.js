'use strict'

const modeElement = document.querySelector('.mode')
const html = document.querySelector('html')
const index = document.querySelector('.index')
const details = document.querySelector('.detail')
const body = document.querySelector('body')
const filter = document.querySelector('.filter')
const regionEl = document.querySelector('.region-container')
const modeIcon = modeElement.firstElementChild
const modeText = modeElement.lastElementChild

let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false

modeElement.addEventListener('click', (e) => {
    darkMode = !darkMode
    console.log(darkMode);
    const theme = localStorage.setItem('darkMode', `${darkMode}`)
    modeIcon.name = 'moon'
    modeText.textContent = 'Light mode'
    html.classList.toggle('dark')

    if(!html.classList.contains('dark')){
        modeIcon.name = 'moon-outline'
        modeText.textContent = 'Dark mode' 
    }
})

const setTheme = function(){
    const theme = localStorage.getItem('darkMode')

    if (theme === 'true'){
        html.classList.add('dark')
        modeIcon.name = 'moon'
        modeText.textContent = 'Light mode'
    }
    else {
        html.classList.remove('dark')
        modeIcon.name = 'moon-outline'
        modeText.textContent = 'Dark mode' 
    }
}

setTheme()



if(html.classList.contains('index')){
    body.addEventListener('click', (e) => {
        const filter = e.target.closest('.filter')
        if(filter){
            regionEl.classList.toggle('hidden')
    
        }
        else if (!(regionEl.classList.contains('hidden'))){
            regionEl.classList.add('hidden')
        }
    })

}
