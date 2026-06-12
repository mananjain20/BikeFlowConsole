import React from 'react';
import { stations } from '../data/dummyData';

function getBadgeType(station) {
  if (station.status === 'maintenance') return 'maintenance';
  if (station.availableBikes === 0) return 'maintenance';
  if (station.availableBikes < 4) return 'low';
  return 'active';
}

export default function DockAvailability() {
  const totalStations = stations.length;
  const totalAvailableBikes = stations.reduce((sum, s) => sum + s.availableBikes, 0);
  const underMaintenance = stations.filter(s => s.status === 'maintenance').length;

  return (
    <div>
      <div className="page-title">Dock Availability</div>
      <div className="page-subtitle">Real-time status of all bike stations</div>

      <div className="stats-row">
        <div className="stat-card">
          <h3>{totalStations}</h3>
          <p>Total Stations</p>
        </div>
        <div className="stat-card">
          <h3>{totalAvailableBikes}</h3>
          <p>Available Bikes</p>
        </div>
        <div className="stat-card">
          <h3>{underMaintenance}</h3>
          <p>Under Maintenance</p>
        </div>
      </div>

      <div className="stations-grid">
        {stations.map(station => {
          const badgeType = getBadgeType(station);
          return (
            <div
              key={station.id}
              className={`station-card${station.status === 'maintenance' ? ' maintenance' : ''}`}
            >
              <h4>{station.name}</h4>
              <div className="location">{station.location}</div>
              <div className="bike-count">{station.availableBikes}</div>
              <div className="bike-label">Available Bikes</div>
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#718096' }}>
                Total Docks: {station.totalDocks}
              </div>
              <span className={`status-badge badge-${badgeType}`}>
                {badgeType === 'active' ? 'Active' : badgeType === 'low' ? 'Low Stock' : 'Maintenance'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
