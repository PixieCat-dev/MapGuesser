const mapDatabase = [{
        link: 'https://pixiecat-dev.github.io/MapGuesser/maps/ww1.png',
        Time: ['world war I', 'world war 1', 'ww1', '1918'],
    },
    {
        link: 'https://tile.loc.gov/image-services/iiif/service:gmd:gmd5:g5700:g5700:ct001356/full/pct:25/0/default.jpg',
        Time: ['21st century', '2006'],
    },
    {
        link: 'https://omniatlas-1598b.kxcdn.com/media/img/articles/subst/europe/europe19910906.png',
        Time: ['1991', 'soviet collapse'],
    },
    {
        link: 'https://omniatlas-1598b.kxcdn.com/media/img/articles/complete/europe/europe18120316.jpg',
        Time: ['napoleonic wars', '1812', 'XIX', 'Napoleonic Wars'],
    },
    {
        link: 'https://pixiecat-dev.github.io/MapGuesser/maps/ww2.png',
        Time: ['ww2', 'world war 2', 'world war II', '1939'],
    },
];

let currentMap;

function getRandomMap() {
    const randomIndex = Math.floor(Math.random() * mapDatabase.length);
    return mapDatabase[randomIndex];
}

function loadNewMap() {
    currentMap = getRandomMap();
    const mapImage = document.getElementById('map-image');
    mapImage.src = currentMap.link;
    mapImage.alt = `Map from the ${currentMap.Time}`;
    document.getElementById('result').textContent = '';
}

window.onload = function() {
    loadNewMap();
    document.getElementById('guess-form').addEventListener('submit', function(e) {
        e.preventDefault();
        checkGuess();
        loadNewMap();
    });
};

function checkGuess() {
    const userGuess = document.getElementById('Time-guess').value.toLowerCase();
    const correctAnswers = Array.isArray(currentMap.Time) ? currentMap.Time.map(answer => answer.toLowerCase()) : [currentMap.Time.toLowerCase()];

    if (correctAnswers.includes(userGuess)) {
        document.getElementById('correct-message').style.display = 'block';
        setTimeout(() => {
            loadNewMap();
            document.getElementById('correct-message').style.display = 'none';
        }, 2000);
    } else {
        document.getElementById('wrong-message').style.display = 'block';
        setTimeout(() => {
            loadNewMap();
            document.getElementById('wrong-message').style.display = 'none';
        }, 2000);
    }

    document.getElementById('submit-button').disabled = true;

    document.getElementById('Time-guess').value = '';
}

const helpButton = document.getElementById('help-button');

helpButton.addEventListener('click', function() {
    window.location.href = 'help.html';
});
