document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'PCnaFUbdL2cyfZ9dOrSdTzmUCpv8jH7deTK72lpe';

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    
    const infoContainer = document.querySelector('.info-container');
    infoContainer.innerHTML = `
    <div class="loading-screen">
    <div class="inner-wrapper">
      <div class="loading-circle"></div>
    <p>Loading</p>

    </div>
    `

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            updateDOM(data);
        })
        .catch(error => {
            
            console.error('Error fetching data from NASA API:', error);
        });

    function updateDOM(data) {


        const htmlContent = `
        <div class="text-wrapper">
            <h1>${data.title}</h1>
            <p class="explanation">${data.explanation}</p>
            <hr />
            <p class="date">${data.date}</p>
            <hr />
        </div>
        <div class="img-wrapper">
            <img class="today-img"src=${data.url} />
            <button class="full-img-btn">View Original Sized Image </button>
        </div>
            `;
        infoContainer.innerHTML = htmlContent;
        const fullImgSizeContainer = document.querySelector('.full-img-size-container')
        fullImgSizeContainer.innerHTML += `
        <h3>${data.title}</h3>
        <img src="${data.url}" class="original-sized-img"/>
        <hr />
    `

        document.querySelector('.full-img-btn').addEventListener('click', ()=>{
            document.querySelector('html').addEventListener('keydown', function(event){
                if(event.key = 'Escape'){fullImgSizeContainer.style.display = 'none'}
            })
            fullImgSizeContainer.style.display = 'block'
        })
        document.querySelector('.x-mark').addEventListener('click', ()=>{
            fullImgSizeContainer.style.display = 'none'
        })



        const pageBackground = document.querySelector('.page-background')
        pageBackground.innerHTML +=    `
        <img src="${data.url}" class="bg-img" />`
    }

});

// NOTIFICATION FUNCTIONALITY

const notificationContainer = document.querySelector('.notification')
let randomTic = Math.floor(Math.random()*100)
console.log(randomTic)
if(randomTic >= 95){
    notificationContainer.style.display = 'block'
    setTimeout(()=>{
        notificationContainer.style.top = "-12%"
    }, 15000)
}
notificationContainer.addEventListener('click', ()=>{
    notificationContainer.style.top = "-12%"

})
