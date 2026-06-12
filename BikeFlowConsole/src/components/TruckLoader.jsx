import React, { useState } from 'react';
import { trucks } from '../data/dummyData';
import Toast from './Toast';

export default function TruckLoader() {
  const [truckList, setTruckList] = useState(trucks);
  const [selectedTruck, setSelectedTruck] = useState('');
  const [bikeToAdd, setBikeToAdd] = useState('');
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success');

  function assignBike() {
    if (!selectedTruck || !bikeToAdd.trim()) {
      alert('Please select truck and enter bike ID');
      return;
    }

    const truckId = Number(selectedTruck);
    const updatedTruckList = truckList.map((truck) => {
      if (truck.id === truckId) {
        if (truck.assignedBikes.length >= truck.capacity) {
          alert('Truck is full');
          return truck;
        }
        return {
          ...truck,
          assignedBikes: [...truck.assignedBikes, bikeToAdd.trim()],
        };
      }
      return truck;
    });

    setTruckList(updatedTruckList);
    setBikeToAdd('');
    setToast('Bike ' + bikeToAdd + ' assigned to truck!');
    setToastType('success');
    setTimeout(() => setToast(''), 2000);
  }

  function clearTruck(truckId) {
    const updatedTruckList = truckList.map((truck) => {
      if (truck.id === truckId) {
        return {
          ...truck,
          assignedBikes: [],
        };
      }
      return truck;
    });
    setTruckList(updatedTruckList);
    setToast('Truck cleared successfully!');
    setToastType('error');
    setTimeout(() => setToast(''), 2000);
  }

  return (
    <div className="truck-container">
      <div className="page-title">Redistribution Truck Loader</div>
      <div className="page-subtitle">Assign bikes to trucks for redistribution</div>

      <div className="truck-actions">
        <h3>Assign Bike to Truck</h3>
        <div className="form-row">
          <select
            className="form-select"
            value={selectedTruck}
            onChange={(e) => setSelectedTruck(e.target.value)}
          >
            <option value="">-- Select a Truck --</option>
            {truckList.map((truck) => (
              <option key={truck.id} value={truck.id}>
                {truck.name} (Capacity: {truck.capacity})
              </option>
            ))}
          </select>
          <input
            type="text"
            className="form-select" // using form-select class style for consistent input look
            placeholder="Enter Bike ID e.g. BK-101"
            value={bikeToAdd}
            onChange={(e) => setBikeToAdd(e.target.value)}
            style={{ flex: 1 }}
          />
          <button className="btn-rent" onClick={assignBike}>
            Assign Bike
          </button>
        </div>
      </div>

      <div className="truck-grid">
        {truckList.map((truck) => {
          const assignedCount = truck.assignedBikes.length;
          const capacityPercent = Math.min(100, (assignedCount / truck.capacity) * 100);

          return (
            <div key={truck.id} className="truck-card">
              <h3>{truck.name}</h3>
              <div className="truck-stats">
                <span>
                  {assignedCount} / {truck.capacity} bikes
                </span>
                <span>{Math.round(capacityPercent)}% Full</span>
              </div>
              <div className="truck-capacity-bar">
                <div
                  className="truck-capacity-fill"
                  style={{ width: `${capacityPercent}%` }}
                />
              </div>

              <div className="truck-bikes-list">
                {truck.assignedBikes.length === 0 ? (
                  <span style={{ fontSize: '13px', color: '#a0aec0', fontStyle: 'italic' }}>
                    No bikes assigned
                  </span>
                ) : (
                  truck.assignedBikes.map((bike, index) => (
                    <span key={index} className="bike-tag">
                      {bike}
                    </span>
                  ))
                )}
              </div>

              <div style={{ marginTop: '20px' }}>
                <button
                  className="btn-undo"
                  onClick={() => clearTruck(truck.id)}
                  disabled={truck.assignedBikes.length === 0}
                  style={{ width: '100%' }}
                >
                  Clear Truck
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Toast message={toast} type={toastType} />
    </div>
  );
}
