import React from 'react';

export default function GPSChecker() {
  return (
    <div>
      <div className="page-title">GPS ID Checker</div>
      <div className="page-subtitle">Verify bike tracking chip against fleet</div>

      <div className="placeholder-container">
        <div className="placeholder-card">
          <div className="placeholder-icon">📡</div>
          <div className="placeholder-badge">Hardware Integration Required</div>
          <h2>GPS Tracking Module</h2>
          <p>
            This feature requires IoT hardware integration including GPS tracking chips installed
            on each bike and a real-time data receiver. This module has been designed and is ready
            for future hardware integration.
          </p>
          <div className="placeholder-reason">
            <h4>Why is this not implemented?</h4>
            <ul>
              <li>IoT hardware integration not covered in curriculum</li>
              <li>Requires physical GPS chips on each bike</li>
              <li>Needs real-time data streaming infrastructure</li>
              <li>Planned for future production version</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
