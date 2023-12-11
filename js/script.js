// function for searching planet information
function searchPlanet() {
    var planetName = document.getElementById('planetNameInput').value;
    var resultsDiv = document.getElementById('results');
// fetch request to api
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'MBsqjzikHRPol+bHVLSq/w==C4QE9wLFGg2rVL32'
        }
    })
        .then(response => response.json())
        .then(data => {
            displayResults(data);
        });
}
// function for displaying search results
function displayResults(data) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }
// loop through data and create display blocks
    data.forEach(planet => {
        var planetDiv = document.createElement('div');
        planetDiv.className = 'planet-info';
        var imageUrl = `./images/${planet.name}.jpg`;
        planetDiv.innerHTML = `
            <img src="${imageUrl}" alt="Image of ${planet.name}" onerror="this.style.display='none'">
            <p><strong>Name:</strong> ${planet.name}</p>
            <p><strong>Mass:</strong> ${planet.mass || 'N/A'} Jupiters</p>
            <p><strong>Radius:</strong> ${planet.radius || 'N/A'} Jupiters</p>
            <p><strong>Orbital Period:</strong> ${planet.period || 'N/A'} days</p>
            <p><strong>Surface Temperature:</strong> ${planet.temperature || 'N/A'} K</p>`;
        resultsDiv.appendChild(planetDiv);
    });
}
// event listener for pressing enter button
document.getElementById('planetNameInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchPlanet();
    }
});
// event listener for pressing search button
document.getElementById('searchButton').addEventListener('click', searchPlanet);
