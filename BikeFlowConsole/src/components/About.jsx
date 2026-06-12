import React from 'react';

export default function About() {
  return (
    <div className="about-container">
      <div className="page-title">About BikeFlow Console</div>
      <div className="page-subtitle">Project overview and technical details</div>

      <div className="about-card">
        <h2>Project Overview</h2>
        <p>
          BikeFlow Console is a micro-mobility bicycle share tracking and management dashboard built as
          a Final Year React project. It simulates a real-world bike sharing system for Mumbai city,
          demonstrating core data structures and frontend development concepts through 8 key features.
        </p>
      </div>

      <div className="about-card">
        <h2>Technologies Used</h2>
        <div className="tech-tags">
          <div className="tech-tag">React.js</div>
          <div className="tech-tag">Vite</div>
          <div className="tech-tag">React Leaflet</div>
          <div className="tech-tag">OpenStreetMap</div>
          <div className="tech-tag">React Icons</div>
          <div className="tech-tag">JavaScript ES6</div>
          <div className="tech-tag">CSS3</div>
        </div>
      </div>

      <div className="about-card">
        <h2>Features Overview</h2>
        <div className="feature-list">
          <div className="feature-row">
            <div>Dock Availability Tracker</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>Rental Undo Tool (Stack)</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>Repair Queue Organizer (Queue)</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>Empty Slot Sorter</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>City Map Hub</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>Redistribution Truck Loader</div>
            <div className="feature-status-done">Done</div>
          </div>
          <div className="feature-row">
            <div>GPS ID Checker</div>
            <div className="feature-status-pending">Pending</div>
          </div>
          <div className="feature-row">
            <div>Safe Route Planner</div>
            <div className="feature-status-pending">Pending</div>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>Pending Features — Why Not Implemented?</h2>
        <p>
          GPS ID Checker and Safe Route Planner require IoT hardware integration including physical GPS
          tracking chips and real-time data streaming infrastructure. These topics are not covered in
          the current curriculum. Both features have been designed with proper UI and are ready for future
          hardware integration.
        </p>
      </div>
    </div>
  );
}
