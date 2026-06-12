import React, { useState } from 'react';
import { stations } from '../data/dummyData';
import Toast from './Toast';

export default function RentalUndo() {
  const [rentalStack, setRentalStack] = useState([]);
  const [selectedStation, setSelectedStation] = useState('');
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success');

  function rentBike() {
    if (!selectedStation) {
      alert('Please select a station');
      return;
    }

    const newRental = {
      id: Date.now(),
      bikeId: 'BK-' + (Math.floor(Math.random() * 900) + 100),
      station: selectedStation,
      userId: 'USR-' + (Math.floor(Math.random() * 99) + 1),
      rentedAt: new Date().toLocaleString(),
    };

    setRentalStack([newRental, ...rentalStack]);
    setSelectedStation('');
    setToast('Bike ' + newRental.bikeId + ' rented successfully!');
    setToastType('success');
    setTimeout(() => setToast(''), 2000);
  }

  function undoRental() {
    setRentalStack(rentalStack.slice(1));
    setToast('Last rental undone successfully!');
    setToastType('error');
    setTimeout(() => setToast(''), 2000);
  }

  return (
    <div className="rental-container">
      <div className="page-title">Rental Management</div>
      <div className="page-subtitle">Rent bikes and undo transactions using Stack</div>

      <div className="rental-form">
        <h3>New Rental</h3>
        <div className="form-row">
          <select
            className="form-select"
            value={selectedStation}
            onChange={(e) => setSelectedStation(e.target.value)}
          >
            <option value="">-- Select a Station --</option>
            {stations.map((station) => (
              <option key={station.id} value={station.name}>
                {station.name}
              </option>
            ))}
          </select>
          <button className="btn-rent" onClick={rentBike}>
            Rent Bike
          </button>
          <button
            className="btn-undo"
            onClick={undoRental}
            disabled={rentalStack.length === 0}
          >
            Undo Last Rental
          </button>
        </div>
      </div>

      <div className="rental-table">
        <h3>Transaction Stack ({rentalStack.length})</h3>
        {rentalStack.length === 0 ? (
          <div className="empty-state">No rentals yet. Rent a bike to begin.</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Bike ID</th>
                <th>User ID</th>
                <th>Station</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rentalStack.map((rental, index) => (
                <tr key={rental.id}>
                  <td>{rental.bikeId}</td>
                  <td>{rental.userId}</td>
                  <td>{rental.station}</td>
                  <td>{rental.rentedAt}</td>
                  <td>
                    {index === 0 && (
                      <span style={{ color: '#E57373', fontWeight: 600, fontSize: '12px' }}>
                        Latest
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Toast message={toast} type={toastType} />
    </div>
  );
}
