document.getElementById('favoritesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('popup').style.display = 'flex';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function closeSite() {
    window.close();
}

