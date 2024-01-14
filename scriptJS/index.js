// navigation




// other
const allTools = document.querySelectorAll('.tool')
    
const allDescriptions = document.querySelectorAll('.small-description')

allTools[0].addEventListener('click', ()=>{window.location = 'framedLibrary.html'})
allTools[1].addEventListener('click', ()=>{window.location = 'browseTheApi.html'})
allTools[2].addEventListener('click', ()=>{window.location = 'imageOfTheDay.html'})
allTools[3].addEventListener('click', ()=>{window.location = 'listenTheCosmos.html'})

const slidesContainer = document.querySelector('.img-slides-container')

const slideImages = document.querySelectorAll('.slide-img')

slideImages[0].style.right = '0';
const timeGapAnimation = 4000
const waitingFunc = function(){
    slideImages[1].style.right = '12.8%';
    slideImages[2].style.right = '12.8%';
    slideImages[3].style.right = '12.8%';
    setTimeout(waitingFunc02, timeGapAnimation * 2) // + transiotion time
}
const waitingFunc02 = function(){
    slideImages[2].style.right = '19.1%';
    slideImages[3].style.right = '19.1%';
}
const ex = function(){
    slideImages[0].style.right = '6.4%';
    slideImages[1].style.right = '6.4%';
    slideImages[2].style.right = '6.4%';
    slideImages[3].style.right = '6.4%';
    
    setTimeout(waitingFunc, timeGapAnimation * 2)
}

// setTimeout(ex, timeGapAnimation * 2) 
// commented to stop animation sequence 

const musicPlayBtn = document.querySelector('.music-play-btn')
const musicPauseBtn = document.querySelector('.music-pause-btn')


let backgroundAudio = document.querySelector('#bg-audio')



let volumeDegree = 0.05
backgroundAudio.volume = volumeDegree


musicPlayBtn.addEventListener('click', ()=>{
    backgroundAudio.pause()
    musicPlayBtn.style.display = 'none'
    musicPauseBtn.style.display = "inline"

})
musicPauseBtn.addEventListener('click', ()=>{
    backgroundAudio.play()
    musicPlayBtn.style.display = 'inline'
    musicPauseBtn.style.display = "none"
})

const volumeIncreseBtn = document.querySelector('.inc')
const volumeDecreseBtn = document.querySelector('.dec')
const volumeDisplay = document.querySelector('.volume-display')
// alert(3)
// let volumeRoundedValue = Math.round(volumeDegree * 100)

volumeIncreseBtn.addEventListener('click', ()=>{
    if(volumeDegree >= 0.96){ volumeDegree = 0.95} 
    volumeDegree = volumeDegree + 0.05
    volumeDisplay.textContent =  `${Math.round(volumeDegree * 100)}%`
    backgroundAudio.volume = volumeDegree
})

volumeDecreseBtn.addEventListener('click', ()=>{
    volumeDegree = volumeDegree - 0.05
    if(volumeDegree < 0){volumeDegree = 0}
    volumeDisplay.textContent =  `${Math.round(volumeDegree * 100)}%`
    backgroundAudio.volume = volumeDegree 
})
