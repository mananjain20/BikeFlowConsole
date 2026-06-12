import React from 'react';

export default function RoutePlanner() {
  return (
    <div>
      <div className="page-title">Safe Route Planner</div>
      <div className="page-subtitle">Find safest routes avoiding dangerous areas</div>

      <div className="placeholder-container">
        <div className="placeholder-card">
          <div className="placeholder-icon">🛣️</div>
          <div className="placeholder-badge">Hardware Integration Required</div>
          <h2>Route Planning Module</h2>
          <p>
            This feature requires real-time GPS data and IoT sensor integration to detect road
            conditions and avoid dangerous areas. The UI is designed and ready for future
            implementation.
          </p>
          <div className="placeholder-reason">
            <h4>Why is this not implemented?</h4>
            <ul>
              <li>Requires real-time GPS and IoT sensors</li>
              <li>Dijkstra algorithm needs live road condition data</li>
              <li>Not covered in current curriculum</li>
              <li>Planned for future production version</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
