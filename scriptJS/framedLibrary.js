const optionsMenu = document.querySelector('.options-menu')
const collectionsWrapper = document.querySelector('.collections-wrapper')
const doc = document.querySelector('html')
const openingImg = document.querySelector('.opening-img')
const openingTextContainer = document.querySelector('.opening-text-container')

const themeImagesArray = [
    "thm-solar-system.jpg",
    "thm-mercury.jpg",
    "thm-venus.jpg",
    "thm-earth.jpg",
    "thm-lunar.jpg",
    "thm-mars.jpg",
    "thm-jupiter.jpg",
    "thm-saturn.jpg",
    "thm-uranus.jpg",
    "thm-neptune.jpg",
    "thm-sun.jpg",
    "thm-pluto.jpg",
    "thm-milky-way.jpg",
    "thm-andromeda.jpg",
    "thm-meteor.jpg",
    "thm-black-hole.jpg",
    "thm-nebula.jpg",
    "thm-supernova.jpg"
]
const themeTitleArray = [
    "Solar System",
    "Planet Mercury",
    "Planet Venus",
    "Planet Earth",
    "Moon",
    "Planet Mars",
    "Planet Jupiter",
    "Planet Saturn",
    "Planet Uranus",
    "Planet Neptune",
    "Sun",
    "Pluto",
    "Milky Way Galaxy",
    "Andromeda",
    "Meteors",
    "Black Holes",
    "Nebula",
    "Supernova"
]


// 

let themeSamples =``
for(let i = 0; i < themeTitleArray.length; i++){
    themeSamples += `
    <div class="theme collection-${i}">
    <img 
        src="images/framedLibraryImgs/${themeImagesArray[i]}" 
        alt="Thumbail Theme Image, ${themeTitleArray[i]}" 
        class="theme-thumbnail"/>
    <h3 class="theme-title">${themeTitleArray[i]}</h3>
    </div>
    `
}
optionsMenu.innerHTML = `${themeSamples}`

let themeStructure = ``
for(let i = 0; i < themeTitleArray.length; i++){
    themeStructure += `
    <div class="collection-${i}-container coll-container">
    <img src="images/icons/x-mark.png" alt="X mark" class="x-mark">
    <h1>${themeTitleArray[i]}</h1>
    <hr class="collection-hr"/>
    <section class="collection-${i}-options coll-options">
    </section>
    <img src="images/framedLibraryImgs/sec-bg-img.jpg" class="coll-bg-img" alt="Space background image"/>
    </div>
    `
}
collectionsWrapper.innerHTML = `${themeStructure}`
const mainFunction = function(factor, collectionNum){
    let apiUrl = `https://images-api.nasa.gov/search?q=${factor}`
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => { 
        updateDOM(data);
        addEventListenersToSamples(data)
    })
    .catch(error => {
        console.error('Error fetching data from NASA API:', error);
    });
    
    function updateDOM(data) {        
        let = totalItems = 0
        totalItems = (data.collection.items).length
        let sample = ``
        try{
        for(let i = 0; i < totalItems; i++){
            sample += ` 
            <div class="sample item-${i}-${factor}">           
                <img src="${data.collection.items[i].links[0].href}" alt="Image of interest, thumbnail version"/>
                <div class="sample-title-wrapper">
                    <h2>${data.collection.items[i].data[0].title}</h2>
                </div>
                <br />
            </div>
            `
        }}
        catch{}
        const collection01 = document.querySelector(`.collection-${collectionNum}-options`);
        collection01.innerHTML = `${sample}`
        }
        function addEventListenersToSamples(data) {

            const infoFramer  = document.querySelector('.general-frame-info-container')
            const samples = document.querySelectorAll('.sample');
            for(let z = 0; z < totalItems; z++){
        
            document.querySelector(`.item-${z}-${factor}`).addEventListener('click', ()=>{
                infoFramer.innerHTML = `
                <div class="andromeda-galaxy-info-window info-window">
                    <img src="images/icons/x-mark.png" alt="X mark, close window" class="x-mark-02">
                    <h1>${data.collection.items[z].data[0].title}</h1>
        
                    <img src="${data.collection.items[z].links[0].href}" 
                        alt="Image of interest, main version"
                        class="info-select-img" />
                    <div class="tool-bar">
                        
                    </div>
                    <p class="">${data.collection.items[z].data[0].description}</p>
                    
                    <hr />
                    <span class="info-date">${data.collection.items[z].data[0].date_created}</span>
                    <hr />
        
                </div> 
                `
                console.log(data.collection.items[z].links[0].href)
                infoFramer.style.display = 'block'
                infoFramer.scrollTop = 0
                document.querySelector('.x-mark-02').addEventListener('click', ()=>{
                    infoFramer.style.display = 'none'
                })
        
            })
            
        }
        }

}

// make a list on each iteration and then use that list's length to add event listener to all the windows


// });



function themeElements(){
    
// theme elements




const bluringFunction  = function(opacityDegree, blurDegree, focusedElement, state){
    // openingImg.style.filter = `blur(${blurDegree}px)`
    openingImg.style.opacity = opacityDegree
    openingTextContainer.style.filter = `blur(${blurDegree}px)`
    optionsMenu.style.filter = `blur(${blurDegree}px)`

    focusedElement.style.filter = 'blur(0px)'
    focusedElement.style.display= `${state}`

    }

    const allInfoFrames =  document.querySelectorAll('.coll-container')
   
    for(let i = 0; i < allInfoFrames.length ; i++){
        // alert(i+1)
        document.querySelector(`.collection-${i}`).addEventListener('click', ()=>{
            bluringFunction('0.8',20,
            document.querySelector(`.collection-${i}-container`) , 
            'block')
        })
    }

    const closeBtn = document.querySelectorAll('.x-mark');

    for(let i = 0; i<closeBtn.length ; i++){
        closeBtn[i].addEventListener('click', ()=>{
            bluringFunction('1',0, document.querySelector(`.collection-${i}-container`), 'none')
        })
    }

}

themeElements()




const allCollContainers = document.querySelectorAll('.coll-container')

//  document.querySelector('.general-frame-info-container').style.display == 'block'
//      document.querySelector('.general-frame-info-container').style.display = 'none'
// 
function escapeWindowClose(){
    if(document.querySelector('.general-frame-info-container').style.display == 'block'){
        document.querySelector('.general-frame-info-container').style.display = 'none'
    }else{
        for(let i = 0; i< allCollContainers.length; i++){
            openingImg.style.opacity = 1
            openingTextContainer.style.filter = `blur(0)`
            optionsMenu.style.filter = `blur(0)`
        
            // focusedElement.style.filter = 'blur(0px)'
            allCollContainers[i].style.display= `none`
    }
}
}
doc.addEventListener('keydown', function(event){
    if(event.key =='Escape'){escapeWindowClose()}})



mainFunction('solar-system', 0)
mainFunction('mercury', 1)
mainFunction('venus', 2)
mainFunction('planet-earth', 3)
mainFunction('lunar', 4)
mainFunction('planet-mars', 5)
mainFunction('jupiter', 6)
mainFunction('saturn', 7)
mainFunction('uranus', 8)
mainFunction('planet-neptune', 9)
mainFunction('sun', 10)
mainFunction('pluto', 11)
mainFunction('milky-way', 12)
mainFunction('andromeda', 13)
mainFunction('meteor', 14)
mainFunction('black-hole', 15)
mainFunction('nebula', 16)
mainFunction('supernova', 17)
