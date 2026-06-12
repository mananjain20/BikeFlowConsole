import React, { useState } from 'react';
import { repairQueue } from '../data/dummyData';
import Toast from './Toast';

export default function RepairQueue() {
  const [queue, setQueue] = useState(repairQueue);
  const [bikeId, setBikeId] = useState('');
  const [issue, setIssue] = useState('');
  const [priority, setPriority] = useState('low');
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState('success');

  function addToQueue() {
    if (!bikeId || !issue) {
      alert('Please fill all fields');
      return;
    }

    const newRepair = {
      id: Date.now(),
      bikeId,
      issue,
      priority,
      reportedAt: new Date().toLocaleString(),
    };

    setQueue([...queue, newRepair]);
    setBikeId('');
    setIssue('');
    setPriority('low');
    setToast('Bike added to repair queue!');
    setToastType('info');
    setTimeout(() => setToast(''), 2000);
  }

  function fixFirst() {
    setQueue(queue.slice(1));
    setToast('First bike marked as fixed!');
    setToastType('success');
    setTimeout(() => setToast(''), 2000);
  }

  return (
    <div className="queue-container">
      <div className="page-title">Repair Queue</div>
      <div className="page-subtitle">Manage bike repairs in order they were reported</div>

      <div className="add-repair-form">
        <h3>Report New Repair</h3>
        <div className="form-row">
          <input
            className="form-select"
            type="text"
            placeholder="Bike ID e.g. BK-101"
            value={bikeId}
            onChange={(e) => setBikeId(e.target.value)}
          />
          <input
            className="form-select"
            type="text"
            placeholder="Issue e.g. Flat Tyre"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          />
          <select
            className="form-select"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="btn-rent" onClick={addToQueue}>
            Add to Queue
          </button>
        </div>
      </div>

      <div className="queue-list">
        <h3>Repair Queue ({queue.length})</h3>
        {queue.length === 0 ? (
          <div className="empty-state">No bikes in repair queue</div>
        ) : (
          queue.map((item, index) => (
            <div key={item.id} className="queue-item">
              <div className="queue-item-left">
                <div className="queue-number">{index + 1}</div>
                <div className="queue-item-info">
                  <h4>{item.bikeId}</h4>
                  <p>{item.issue} &bull; {item.reportedAt}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className={`priority-badge priority-${item.priority}`}>
                  {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                </span>
                {index === 0 && (
                  <button className="btn-fix" onClick={fixFirst}>
                    Fix Now
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <Toast message={toast} type={toastType} />
    </div>
  );
}
