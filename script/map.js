var map = L.map('map').setView([56.9866054, 24.0799902], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([56.9866054, 24.0799902]).addTo(map)
    .bindPopup('Spilve airport')
    .openPopup();

