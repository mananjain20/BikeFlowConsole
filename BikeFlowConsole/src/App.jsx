import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DockAvailability from './components/DockAvailability';
import RentalUndo from './components/RentalUndo';
import RepairQueue from './components/RepairQueue';
import EmptySlotSorter from './components/EmptySlotSorter';
import CityMap from './components/CityMap';
import TruckLoader from './components/TruckLoader';
import GPSChecker from './components/GPSChecker';
import RoutePlanner from './components/RoutePlanner';
import About from './components/About';
import './styles/main.css';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');

  return (
    <div className="app-container">
      <Navbar />
      <div className="app-body" style={{ margin: 0, padding: 0 }}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="main-content">
          {activePage === 'Dashboard' ? (
            <DockAvailability />
          ) : activePage === 'Rentals' ? (
            <RentalUndo />
          ) : activePage === 'Repair Queue' ? (
            <RepairQueue />
          ) : activePage === 'Sort Stations' ? (
            <EmptySlotSorter />
          ) : activePage === 'City Map' ? (
            <CityMap />
          ) : activePage === 'Truck Loader' ? (
            <TruckLoader />
          ) : activePage === 'GPS Checker' ? (
            <GPSChecker />
          ) : activePage === 'Route Planner' ? (
            <RoutePlanner />
          ) : activePage === 'About' ? (
            <About />
          ) : (
            <p>Coming Soon</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
