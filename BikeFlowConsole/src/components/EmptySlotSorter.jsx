import React from 'react';
import { stations } from '../data/dummyData';

export default function EmptySlotSorter() {
  // Create sorted array by empty slots (totalDocks - availableBikes) in descending order
  const sortedStations = [...stations].sort((a, b) => {
    const emptyA = a.totalDocks - a.availableBikes;
    const emptyB = b.totalDocks - b.availableBikes;
    return emptyB - emptyA;
  });

  return (
    <div>
      <div className="page-title">Empty Slot Sorter</div>
      <div className="page-subtitle">Stations ranked by most vacant spots</div>

      <div className="sort-table-container">
        <h3>Stations by Vacancy</h3>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Station Name</th>
              <th>Location</th>
              <th>Total Docks</th>
              <th>Available Bikes</th>
              <th>Empty Slots</th>
            </tr>
          </thead>
          <tbody>
            {sortedStations.map((station, index) => {
              const emptySlots = station.totalDocks - station.availableBikes;
              return (
                <tr key={station.id}>
                  <td>
                    <div className="rank-number">{index + 1}</div>
                  </td>
                  <td>{station.name}</td>
                  <td>{station.location}</td>
                  <td>{station.totalDocks}</td>
                  <td>{station.availableBikes}</td>
                  <td>{emptySlots}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
