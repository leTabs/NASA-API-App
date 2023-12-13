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
        const apodContainer = document.getElementById('apod-container');


        const htmlContent = `
        <div class="info-container">
            <p>- Image Of The Day, By NASA-</p>
            <h1>${data.title}</h1>
            <p class="explanation">${data.explanation}</p>
            <p class="date">${data.date}</p>
        </div>
        <div class="right-div">
            <img class="small-img"src=${data.url} />
            <div class="hidden-img">
            <p>Original dimentions image</p>
            <h2>${data.title}</h2>
                <img class="big-img" src=${data.url} />
            </div>
        </div>
        `;
        apodContainer.innerHTML = htmlContent;
    }

});
