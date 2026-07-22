var map = L.map('map').setView([56.9449216,24.0642629], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([56.9449216,24.0642629]).addTo(map)
    .bindPopup('FixPrice')
    .openPopup();