const upperWrapper = document.querySelector('.upper-wrapper')
const upperTitle = document.querySelector('.upper-title')
const input = document.querySelector('.search-bar')
const btn  = document.querySelector('.search-btn')
const searchResultsContainter = document.querySelector('.search-results');
const prevSearch = document.querySelector('.recent-search-history')
const prevSearchDiv = document.querySelector('.recent-search-history-div')

let searchCounter = 0
let inputSearches = []

let inputContent
function getInputContent(){
    inputContent = input.value
    inputContent = inputContent.trim()
    return inputContent = inputContent.replace(' ', '-')
}


input.addEventListener('keypress', function(event){
    if(event.keyCode === 13){

        showResults()
    }
})

btn.addEventListener('click', ()=>{

    showResults()
})

const showResults =function(){
    prevSearchDiv.style.left = '-40%'
    getInputContent()
    searchCounter++





    if(searchCounter >= 1){
        prevSearch.style.top = '1%'
        prevSearch.style.display = 'block'
    }
    // 
    upperTitle.style.fontSize = '3rem'
    searchResultsContainter.style.top = '55%'
    upperWrapper.style.top = '15%'
    // 
    for(let i = 0; i < inputSearches.length; i++){
        if(inputContent == inputSearches[i]){
           // return
        }
        else{
            // alt
        }
        
    }
    inputSearches.push(inputContent)
    // 
    if(inputContent == ''){return alert('Empty attempt search.\nPlease type before searching')}
    else{
    searchResultsContainter.innerHTML = `
    <div class="loading-screen">
    <div class="inner-wrapper">
      <div class="loading-circle"></div>
    <p>Loading</p>
    </div>
    `
    getData(inputContent);
    searchResultsContainter.scrollTop = 0;}

}

prevSearch.addEventListener('click', ()=>{
    let prevSearchesElements = ``
    for(let i = 0; i < inputSearches.length; i++){
        prevSearchesElements += `
            <p class="history-search">${inputSearches[i].replace('-', ' ')}<p>
        `
    }
    prevSearchesElements += `<button class="recent-searches-close-btn">close</button>`
    prevSearchDiv.innerHTML = `
    <h4>Latest Searches</h4>
    <div class="searches-wrapper">
        ${prevSearchesElements}
    </div>`
    searchResultsContainter.scrollTop = 0;
    prevSearch.style.top = '-10%'
    // setTimeout(historyElementsFunc(), 1000)
    historyElementsFunc()        
    prevSearchDiv.style.left = '1%' 
    prevSearchDiv.style.display = 'block'
})

function historyElementsFunc(){
    const allPrevSearches = document.querySelectorAll('.history-search')
    const recentSearchesCloseBtn = document.querySelector('.recent-searches-close-btn')
    prevSearchDiv.style.display = 'block'
    for(let i = 0; i < allPrevSearches.length; i++){
        // alert(allPrevSearches[i].textContent)

        allPrevSearches[i].addEventListener('click', ()=>{
            prevSearch.style.top = '1%'
            prevSearchDiv.style.left = '-40%'

        let prevInputSearch = allPrevSearches[i].textContent
        input.value = prevInputSearch.replace('-', ' ')
        setTimeout(getData(prevInputSearch), 1000)
        

        })
    }
    recentSearchesCloseBtn.addEventListener('click', ()=>{
        // prevSearchDiv.style.display = 'none'    
    prevSearchDiv.style.left = '-40%' 
    // prevSearchDiv.style.display = 'block'
    prevSearch.style.top = '1%'
    })
}



const getData = function(factor){
    
const apiUrl = `https://images-api.nasa.gov/search?q=${factor}`

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        totalItems = (data.collection.items).length
        updateDOM(data);
    })
    .catch(error => {
        console.error('Error fetching data from NASA API:', error);
        return alert('Something went wrong.\nCheck your internet connection')

    });

function updateDOM(data) {
    if((data.collection.items).length === 0 ){
        searchResultsContainter.innerHTML = `<p class="no-results">No results were found </p>`
    }else{
        structuringData(data)
    }


}

// text manager function (used up to)
const textManager = function(textString){
    let letterLimit = 25
    if(textString.length > letterLimit){
        textString = textString.slice(0, letterLimit) + ` [...]` 
    return textString
    }else{
return textString}
}

const structuringData = function(data){
    
    let sample = ``
    try{
    for(let i = 0; i < (data.collection.items).length; i++){
        sample += `
        <div class="search-sample">
            <div class="search-img-btn-wrapper">
                <img class="search-sample-img" src=${data.collection.items[i].links[0].href}
                alt="Info Image, Couldn't Load" />
            </div>
            <div class="search-text-wrapper">
                <h1 class="search-sample-title">${data.collection.items[i].data[0].title}</h1>
                
                <p class="search-sample-description">${textManager(data.collection.items[i].data[0].description)}</p>
                <hr />
                <div class="search-date-btn-wrapper">
                    <p class="search-sample-date">${data.collection.items[i].data[0].date_created}</p>
                    <button class="sample-open-btn-${i}">Open</button>
                </div>
            </div>
        </div>
        `
    }

}catch{}




    const htmlContent = `
    <div class="info-container">
    ${sample}
    </div>
    `;
    searchResultsContainter.innerHTML = htmlContent;
    

    const popInfoWindow = document.querySelector('.pop-info-window')


    try{
        for(let j = 0; j <(data.collection.items).length ; j++ ){
            document.querySelector(`.sample-open-btn-${j}`).addEventListener('click', function(){

                popContent =`
                    <h2>${data.collection.items[j].data[0].title}</h2>
                    <p>${data.collection.items[j].data[0].description}</p>
                    <img src="${data.collection.items[j].links[0].href}" class="current-img"/>
                    <hr />
                    <p>${data.collection.items[j].data[0].date_created}</p>
                    <hr />
                `

                popContent += `<img src="images/icons/x-mark.png" class="x-mark-04"/>`
                popInfoWindow.innerHTML = `${popContent}`


                document.querySelector('.x-mark-04').addEventListener('click', ()=>{openInfoWindow('none')})
                document.querySelector('html').addEventListener('keydown', function(event){
                    if(event.key == 'Escape'){
                        openInfoWindow('none')
                    }
                })
                openInfoWindow('block')
                
            })
        }
    }catch{}

const openInfoWindow = function(state){
    popInfoWindow.style.display = `${state}`
}}}

//



// future upadate could include recent history search 
