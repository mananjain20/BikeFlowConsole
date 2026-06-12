import React from 'react';
import '../styles/main.css';
import {
  FaChartBar,
  FaSyncAlt,
  FaTools,
  FaSortAmountDown,
  FaMap,
  FaTruck,
  FaSatelliteDish,
  FaRoute,
  FaInfoCircle,
} from 'react-icons/fa';

const menuItems = [
  { icon: <FaChartBar />, label: 'Dashboard' },
  { icon: <FaSyncAlt />, label: 'Rentals' },
  { icon: <FaTools />, label: 'Repair Queue' },
  { icon: <FaSortAmountDown />, label: 'Sort Stations' },
  { icon: <FaMap />, label: 'City Map' },
  { icon: <FaTruck />, label: 'Truck Loader' },
  { icon: <FaSatelliteDish />, label: 'GPS Checker' },
  { icon: <FaRoute />, label: 'Route Planner' },
  { icon: <FaInfoCircle />, label: 'About' },
];

export default function Sidebar({ activePage, setActivePage }) {
  return (
    <nav className="sidebar">
      {menuItems.map(({ icon, label }) => (
        <div
          key={label}
          className={`sidebar-item${activePage === label ? ' active' : ''}`}
          onClick={() => setActivePage(label)}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
      <div style={{ marginTop: 'auto', padding: '16px 20px', borderTop: '1px solid #2d3f53' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }}></span>
          <p style={{ fontSize: '12px', color: 'white', margin: 0 }}>System Online</p>
        </div>
        <p style={{ fontSize: '11px', color: '#718096', marginTop: '6px' }}>8 Stations · 49 Bikes</p>
      </div>
    </nav>
  );
}
