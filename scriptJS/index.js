// [TOOL ELEMENTS, LISTENERS]
const allTools = document.querySelectorAll('.tool')
    
const allDescriptions = document.querySelectorAll('.small-description')

allTools[0].addEventListener('click', ()=>{window.location = 'framedLibrary.html'})
allTools[1].addEventListener('click', ()=>{window.location = 'browseTheApi.html'})
allTools[2].addEventListener('click', ()=>{window.location = 'imageOfTheDay.html'})
allTools[3].addEventListener('click', ()=>{window.location = 'listenTheCosmos.html'})

// [...]


// [OPENING IMAGE SLIDE SHOW]

const imageNameArray = [
    "pexels-aviv-perets-3274903.jpg",
    "pexels-francesco-ungaro-998641.jpg",
    "pexels-joonas-kääriäinen-239107.jpg",
    "pexels-pixabay-87009.jpg",
    "pexels-johan-de-beer-5476413.jpg",
    "saturn-rings.jpg",
    "pexels-pixabay-2150.jpg",
    "pexels-pixabay-41951.jpg",
    "pexels-robert-gruszecki-11657224.jpg",
    "pexels-spacex-23793.jpg",
    "pexels-jeremy-müller-11101908.jpg",
    "pexels-scott-lord-16880954.jpg",
    "pexels-stefan-stefancik-91216.jpg",
    "pexels-scott-lord-16880956.jpg"
]

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Call the shuffle function
shuffleArray(imageNameArray);
console.log(imageNameArray)

const slidesContainer = document.querySelector('.img-slides-container')
const slideImages = document.querySelectorAll('.slide-img')


for(let i= 0; i< 14;i++){
    slideImages[i].src = `images/openingSlidesImgs/${imageNameArray[i]}`
}

console.log(slideImages)
  
  


const animationTransitionTime = 2000; //find a better solution
const animationGapTime = 8000;



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
                                                        console.log('cicle done')
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
        }, animationGapTime)

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


// .search-blocking-curten, 
// .search-curten,
// .search-results-div


const searchIcon = document.querySelector('.search-icon')
const navSearchBar = document.querySelector('.nav-search-bar')
const searchBlockingCurtne = document.querySelector('.search-blocking-curten')
const searchCurten = document.querySelector('.search-curten')
const searchResultsDiv = document.querySelector('.search-results-div')
const searchResultsCloseBtn = document.querySelector('.search-results-close-btn')
const searchResultsMiddle = document.querySelector('.search-results-middle')

function searchResultsDisplay(state){
    searchResultsMiddle.style.height = '50vh'
    searchBlockingCurtne.style.display = `${state}`
    searchCurten.style.display = `${state}`
    searchResultsDiv.style.display = `${state}`

}
function showResults(){
    // make a loading animation here later 
    searchResultsMiddle.innerHTML = `
    <div class="loading-screen">
    <div class="inner-wrapper">
      <div class="loading-circle"></div>
    <p>Loading</p>
  </div>
    `
    document.querySelector('.search-input-value').innerHTML = `${navSearchBar.value}`
    searchResultsDisplay('block')
    let inputContent = navSearchBar.value
    inputContent = inputContent.trim()
    inputContent = inputContent.replace(' ', '-')
    getData(inputContent)
}

function getData(factor){
    const apiUrl = `https://images-api.nasa.gov/search?q=${factor}`

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        totalItems = (data.collection.items).length
        updateDOM(data);
    })
    .catch(error => {
        console.error('Error fetching data from NASA API:', error);

    });

function updateDOM(data) {
    if((data.collection.items).length === 0 ){
        searchResultsMiddle.innerHTML = `<p class="no-results">No results were found </p>`
        searchResultsMiddle.style.height = '15vh'
    }else{
        structuringData(data)
    }
}
}

function structuringData(data){
    let counter = (data.collection.items).length
    let sample = ''
    try{
    for(let i = 0; i < counter; i++){
        sample += `<h2>${data.collection.items[i].data[0].title}</h2>`
    }
}catch{}

searchResultsMiddle.innerHTML = `${sample}`
}


searchIcon.addEventListener('click', ()=>{
    // searchResultsDisplay('block')
    showResults()
})

navSearchBar.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        
        searchResultsDiv.style.top = '50%'
        showResults()
        document.querySelector('html').addEventListener('keydown', function(event){
            if(event.key === 'Escape'){
                searchResultsDiv.style.top = '160%'
                setTimeout(()=>{searchResultsDisplay('none')}, 1000)
                
                // remember to remove the event listener
            }
        })
    }
})


searchResultsCloseBtn.addEventListener('click', ()=>{
    searchResultsDisplay('none')
})



// data.url


const apiKey = 'PCnaFUbdL2cyfZ9dOrSdTzmUCpv8jH7deTK72lpe';

const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        updateDOM(data);
    })
    .catch(error => {
        
        console.error('Error fetching data from NASA API:', error);
    });

function updateDOM(data) {

    const imageContainer = document.querySelector('.tools-bg-img')
    imageContainer.src = `${data.url}`
    // imageContainer.innerHTML = `<img src="${data.url}" alt="add context later"/>`

    // document.querySelector('.exp').innerHTML =  `<img src="${data.url}" alt="add context later"/>`

};
