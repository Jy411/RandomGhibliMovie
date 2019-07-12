

function spinIt() {
    console.log('helloWhatthefhcj');

    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    // Get content area
    const contentArea = document.getElementById('mainBox');
    const spinButton = document.getElementById('spinIt');
    const mTitle = document.getElementById('movieTitle');
    const mScore = document.getElementById('movieScore');
    const mDesc = document.getElementById('movieDescription');


    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        const values = Object.values(data);

        const randomMovie = values[parseInt(Math.random() * values.length)];
        console.log(randomMovie);
        mTitle.textContent = randomMovie.title;
        mScore.textContent = 'Rotten Tomatoes: '+randomMovie.rt_score;
        mDesc.textContent = randomMovie.description;

    };

    // Send request
    request.send();

}



