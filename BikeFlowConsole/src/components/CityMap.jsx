import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { stations } from '../data/dummyData';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const coordsMap = {
  1: { lat: 18.9220, lng: 72.8347 },
  2: { lat: 18.9438, lng: 72.8231 },
  3: { lat: 18.9398, lng: 72.8354 },
  4: { lat: 19.0544, lng: 72.8405 },
  5: { lat: 19.0883, lng: 72.8264 },
  6: { lat: 19.0607, lng: 72.8362 },
  7: { lat: 19.0178, lng: 72.8478 },
  8: { lat: 19.1197, lng: 72.9051 }
};

const stationsWithCoords = stations.map(station => ({
  ...station,
  ...coordsMap[station.id]
}));

export default function CityMap() {
  const totalStations = stations.length;

  return (
    <div>
      <div className="page-title">City Map Hub</div>
      <div className="page-subtitle">All bike stations across Mumbai</div>

      <div className="map-container">
        <div style={{ fontSize: '14px', color: '#718096' }}>
          Showing {totalStations} active stations across the network
        </div>
        <div className="map-wrapper">
          <MapContainer
            center={[19.0760, 72.8777]}
            zoom={12}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stationsWithCoords.map((station) => (
              <Marker key={station.id} position={[station.lat, station.lng]}>
                <Popup>
                  <div style={{ minWidth: '150px' }}>
                    <strong style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>
                      {station.name}
                    </strong>
                    <div style={{ fontSize: '12px', color: '#718096', marginBottom: '4px' }}>
                      {station.location}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '6px' }}>
                      Available Bikes: {station.availableBikes} / {station.totalDocks}
                    </div>
                    <span
                      className={`status-badge badge-${
                        station.status === 'maintenance'
                          ? 'maintenance'
                          : station.availableBikes === 0
                          ? 'maintenance'
                          : station.availableBikes < 4
                          ? 'low'
                          : 'active'
                      }`}
                      style={{ display: 'inline-block' }}
                    >
                      {station.status === 'maintenance'
                        ? 'Maintenance'
                        : station.availableBikes === 0
                        ? 'Maintenance'
                        : station.availableBikes < 4
                        ? 'Low Stock'
                        : 'Active'}
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
