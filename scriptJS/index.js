// navigation




// other
const allTools = document.querySelectorAll('.tool')
    
const allDescriptions = document.querySelectorAll('.small-description')

allTools[0].addEventListener('click', ()=>{window.location = 'framedLibrary.html'})
allTools[1].addEventListener('click', ()=>{window.location = 'browseTheApi.html'})
allTools[2].addEventListener('click', ()=>{window.location = 'imageOfTheDay.html'})
allTools[3].addEventListener('click', ()=>{window.location = 'listenTheCosmos.html'})



///////
const slidesContainer = document.querySelector('.img-slides-container')

const slideImages = document.querySelectorAll('.slide-img')

const animationTransitionTime = 2000;
const animationGapTime = 8000;
// mae animationGap time 4000 later 

function slideShowFunc01(){
    slideImages[0].style.opacity = '0'
    slideImages[1].style.opacity = '1'
    setTimeout(()=>{    
        slideImages[1].style.opacity = '0';
        slideImages[2].style.opacity = '1';
        setTimeout(()=>{
            slideImages[2].style.opacity = '0';
            slideImages[3].style.opacity = '1';
            setTimeout(()=>{
                slideImages[3].style.opacity = '0';
                slideImages[4].style.opacity = '1';

                setTimeout(()=>{
                    slideImages[4].style.opacity = '0';
                    slideImages[5].style.opacity = '1';

                    setTimeout(()=>{
                        slideImages[5].style.opacity = '0';
                        slideImages[6].style.opacity = '1';

                        setTimeout(()=>{
                            slideImages[6].style.opacity = '0';
                            slideImages[7].style.opacity = '1';
                            
                            setTimeout(()=>{
                                slideImages[7].style.opacity = '0';
                                slideImages[8].style.opacity = '1';
                                
                                setTimeout(()=>{
                                    slideImages[8].style.opacity = '0';
                                    slideImages[9].style.opacity = '1';
                                    
                                    setTimeout(()=>{
                                        slideImages[9].style.opacity = '0';
                                        slideImages[10].style.opacity = '1';

                                        setTimeout(()=>{
                                            slideImages[10].style.opacity = '0';
                                            slideImages[11].style.opacity = '1';

                                            setTimeout(()=>{
                                                slideImages[11].style.opacity = '0';
                                                slideImages[12].style.opacity = '1';

                                                setTimeout(()=>{
                                                    slideImages[12].style.opacity = '0';
                                                    slideImages[13].style.opacity = '1';

                                                    setTimeout(()=>{
                                                        slideImages[13].style.opacity = '0';
                                                        slideImages[0].style.opacity = '1';
                                        
                                                    }, animationGapTime)
                                                    setTimeout(completeSlideShow, animationGapTime)

                                                }, animationGapTime)
                                            }, animationGapTime)
                                        }, animationGapTime)
                                    }, animationGapTime)
                                }, animationGapTime)
                            }, animationGapTime)
                        }, animationGapTime)
                    }, animationGapTime)
                }, animationGapTime)
            }, animationGapTime)



            // Next update: add some random image options
        }, animationGapTime + animationTransitionTime)

    }, animationGapTime
    )
}
function completeSlideShow(){
    setTimeout(slideShowFunc01, animationGapTime)
}
completeSlideShow()
// [...]




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



// [...]



const searchIcon = document.querySelector('.search-icon')

searchIcon.addEventListener('click', ()=>{
    alert('pop')
})
