const optionsMenu = document.querySelector('.options-menu')
const collectionsWrapper = document.querySelector('.collections-wrapper')
const doc = document.querySelector('html')
const openingImg = document.querySelector('.opening-img')
const openingTextContainer = document.querySelector('.opening-text-container')

const themeImagesArray = [
    "thumbnail-andromeda.jpg",
    "thumbnail-earth.jpg", 
    "thumbnail-supernova.jpg",
    "thumbnail-mercury.jpg",
    "thumbnail-venus.jpg",
    "thumbnail-milky-way.jpg",
    "thumbnail-solar-system.jpg",
    "thumbnail-black-hole.jpg",
    "thumbnail-pulsar.jpg",
    "thumbnail-uranus.jpg",
]
const themeTitleArray = [
    "Andromeda Galaxy", 
    "Planet Earth",
    "Nova Explosions",
    "Planet Mercury",
    "Planet Venus",
    "Milky Way Galaxy",
    "Solar System",
    "Black Holes",
    "Pulsars",
    "Planet Uranus"
]
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
    <img src="images/icons/x-mark.png" alt="x mark, close window" class="x-mark">
    <h1>${themeTitleArray[i]}</h1>
    <hr class="collection-hr"/>
    <section class="collection-${i}-options coll-options">
    </section>
    <img src="images/framedLibraryImgs/thumbnail-andromeda.jpg" class="coll-bg-img" />
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
                <img src="${data.collection.items[i].links[0].href}" />
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
                    <img src="images/icons/x-mark.png" alt="x mark, close window" class="x-mark-02">
                    <h1>${data.collection.items[z].data[0].title}</h1>
        
                    <img src="${data.collection.items[z].links[0].href}" 
                        alt=""
                        class="info-select-img" />
                    <div class="tool-bar">
                        
                    </div>
                    <p class="">${data.collection.items[z].data[0].description}</p>
                    
                    <hr />
                    <span class="info-date">${data.collection.items[z].data[0].date_created}</span>
                    <hr />
        
                </div> 
                `
                infoFramer.style.display = 'block'
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
        console.log(closeBtn[i], i)
        closeBtn[i].addEventListener('click', ()=>{
            bluringFunction('1',0, document.querySelector(`.collection-${i}-container`), 'none')
        })
    }

}

themeElements()


mainFunction('andromeda', 0)
mainFunction('planet-earth', 1)
mainFunction('supernova', 2)
mainFunction('mercury', 3)
mainFunction('venus', 4)
mainFunction('milky-way', 5)
mainFunction('solar-system', 6)
mainFunction('black-hole', 7)
mainFunction('pulsar', 8)
mainFunction('uranus', 9)


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

