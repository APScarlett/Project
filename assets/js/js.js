document.addEventListener('DOMContentLoaded', function () {
    const searchBtn = document.querySelector('.search-btn');
    const cityInput = document.querySelector('.city-input');
    const currentWeather = document.querySelector('.current-weather');
    const details = document.querySelector('.details');
    const weatherCards = document.querySelectorAll('.weather-cards .card');

    // Function to fetch concert information
    function fetchConcertInfo(artistName) {
        // You can replace this placeholder function with your actual logic to fetch concert information from an API or database
        // For demonstration purposes, let's just display a simple message
        const concertInfo = [
            "Concert 1: Date and Venue",
            "Concert 2: Date and Venue",
            "Concert 3: Date and Venue",
            "Concert 4: Date and Venue",
            "Concert 5: Date and Venue"
        ];
        return concertInfo;
    }

    // Function to update the UI with concert information
    function updateUI(concertInfo) {
        details.innerHTML = `<h2>${cityInput.value} Events</h2>`;
        weatherCards.forEach((card, index) => {
            card.textContent = concertInfo[index];
        });
    }

    // Event listener for the search button
    searchBtn.addEventListener('click', function () {
        const artistName = cityInput.value.trim();
        if (artistName !== '') {
            const concertInfo = fetchConcertInfo(artistName);
            updateUI(concertInfo);
        } else {
            alert('Please enter an artist name.');
        }
    });
});
