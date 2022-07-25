export const initMapa = () => {
    
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([51.5, -0.09]).addTo(map);
    marker.bindPopup("<b>Bike Store</b><br>Florencio Varela").openPopup();
    L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);
}