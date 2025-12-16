import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

// Custom icon for markers
const customIcon = new L.Icon({
    iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
    shadowSize: [50, 64],
    shadowAnchor: [4, 62],
});

// List of locations
const locations = [
    { name: "CAR DOCTORS", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "CHHABRA TYRE", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "FAST TRACK DISTRIBUTORS PRIVATE LIMITED", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "S S TYRES", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "WHEEL MASTER TYRES", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "WHEELS WORLD", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "WHEELS XPERT", state: "Haryana", position: [29.0588, 76.0856] },
    { name: "JAYAMMA ENTERPRISES", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "N.S.CAR DETAILING", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "RAJ MOTORS", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "SHRI BALAJI", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "SRI MARUTHI AUTOMOBILES AND GARAGE", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "VAHAN", state: "Karnataka", position: [15.3173, 75.7139] },
    { name: "POM ENTERPRISES", state: "Kerala", position: [10.8505, 76.2711] },
    { name: "SALASAR TYRES AND SALES", state: "Maharashtra", position: [19.7515, 75.7139] },
    { name: "TYRE EXPRESS OSMANABAD", state: "Maharashtra", position: [19.7515, 75.7139] },
    { name: "TYRE KING TRADING PRIVATE LIMITED", state: "Maharashtra", position: [19.7515, 75.7139] },
    { name: "ELITE MOTORS", state: "Rajasthan", position: [27.0238, 74.2179] },
    { name: "SHREE ENTERPRISES", state: "Rajasthan", position: [27.0238, 74.2179] },
    { name: "ROORKEE TYRE AND SERVICE", state: "Uttarakhand", position: [30.0668, 79.0193] }
];

const Location = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 md:p-8 lg:p-16">
                <div className="mb-8 p-4 md:p-8 border border-gray-200 rounded-lg mt-20">
                    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "60vh", width: "100%" }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        {locations.map((location, idx) => (
                            <Marker key={idx} position={location.position} icon={customIcon}>
                                <Popup>
                                    {location.name}<br />{location.state}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
                <div className="list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {locations.map((location, idx) => (
                        <div key={idx} className="location p-4 border border-gray-200 rounded-lg">
                            <strong>{location.name}</strong><br />
                            {location.state}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Location;
