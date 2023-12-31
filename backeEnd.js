// document.addEventListener('DOMContentLoaded', function () {
// const apiKey = 'PCnaFUbdL2cyfZ9dOrSdTzmUCpv8jH7deTK72lpe';

// const factor = 'andromeda'

const mainFunction = function(factor, collectionNum){
    // listName = 0
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
        // 
        // 
        // 
        // 
        
        let = totalItems = 0
        totalItems = (data.collection.items).length
        let sample = ``
        // let topLevel = data.collection.items
        // alert( )
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
            // listName ++

        }}
        catch{}
        // alert(listName)
        // alert((data.collection.items).length)
        // data = ''
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
                    <img src="imgs/x-mark.png" alt="x mark, close window" class="x-mark-02">
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

mainFunction('andromeda', 1)
mainFunction('planet-earth', 2)
mainFunction('supernova', 3)
mainFunction('mercury', 4)
mainFunction('venus', 5)
mainFunction('milky-way', 6)
mainFunction('solar-system', 7)
mainFunction('black-hole', 8)
mainFunction('pulsar', 9)
mainFunction('uranus', 10)
// });
