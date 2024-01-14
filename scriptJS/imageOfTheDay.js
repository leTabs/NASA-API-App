document.addEventListener('DOMContentLoaded', function () {
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
        const infoContainer = document.querySelector('.info-container');


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
