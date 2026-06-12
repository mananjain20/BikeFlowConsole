# 🚲 BikeFlow Console
BikeFlow Console is a real-time micro-mobility 
bicycle share tracking and management dashboard. 
It monitors dock availability, manages repair queues, 
tracks bike rentals, and optimizes redistribution
across 8 Mumbai city stations. Built as a fully 
functional React prototype demonstrating real-world 
data structures including Stack and Queue, interactive 
maps using Leaflet.js, and clean component-based 
architecture.

Live demo: Coming Soon

A micro-mobility bicycle share tracking and management dashboard for Mumbai city stations. BikeFlow Console demonstrates core data structures and frontend patterns through a compact, production-oriented React app built with Vite.

---

## Project Snapshot

- **Name:** BikeFlow Console
- **Description:** A micro-mobility bicycle share tracking and management dashboard for Mumbai city stations
- **Author:** Manan Jain
- **GitHub:** https://github.com/mananjain20/BikeFlowConsole
- **Live Demo:** Coming Soon

---

## Features

| Feature | Status |
|---|---:|
| Dock Availability Tracker | Implemented |
| Rental Undo Tool (Stack) | Implemented |
| Repair Queue Organizer (Queue) | Implemented |
| Empty Slot Sorter | Implemented |
| City Map Hub | Implemented |
| Redistribution Truck Loader | Implemented |
| GPS ID Checker | Pending (IoT Integration) |
| Safe Route Planner | Pending (IoT Integration) |


## 📋 Feature Details

### 1.  Dock Availability Tracker
Real-time dashboard displaying all 8 Mumbai bike 
stations with available bikes, total docks, and 
current status. Stations are color coded — green 
for active, red for maintenance, and amber for low 
availability.

### 2. Rental Undo Tool
Records every bike rental transaction using a Stack 
data structure. The most recent rental is always on 
top, allowing the operator to safely undo the last 
transaction in case of any error.

### 3. Repair Queue Organizer
Manages all bikes needing repair using a Queue data 
structure. Bikes are added to the end of the queue 
and fixed from the front — ensuring first reported 
is first fixed. Supports high, medium and low priority.

### 4. Empty Slot Sorter
Ranks all stations by number of vacant docks in 
descending order. Helps operators quickly identify 
which stations need bike redistribution the most.

### 5. City Map Hub
Interactive map built with React Leaflet and 
OpenStreetMap showing all 8 station locations 
across Mumbai. Each station marker displays name, 
location, available bikes and current status.

### 6. Redistribution Truck Loader
Smart bike assignment system that loads maintenance 
trucks with bikes for redistribution. Tracks capacity 
of each truck with a visual progress bar and prevents 
overloading.

### 7. GPS ID Checker ⏳
Designed UI for verifying bike GPS tracking chip IDs 
against the entire fleet. Pending IoT hardware 
integration — requires physical GPS chips on each bike.

### 8.  Safe Route Planner ⏳
Designed UI for finding safest routes avoiding 
dangerous areas. Pending IoT and real-time GPS 
data integration — not covered in current curriculum.

---

## Tech Stack

| Client | Notes |
|---|---|
| React.js | Component-driven UI |
| Vite | Fast dev server & build tooling |
| React Leaflet | Map rendering (Leaflet in React) |
| OpenStreetMap | Map tiles and data source |
| React Icons | UI icons |
| JavaScript (ES6) | Language |
| CSS3 | Styling |

---

## Project Structure

```
BikeFlowConsole/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Sidebar.jsx
│  │  ├─ DockAvailability.jsx
│  │  ├─ RentalUndo.jsx
│  │  ├─ RepairQueue.jsx
│  │  ├─ EmptySlotSorter.jsx
│  │  ├─ CityMap.jsx
│  │  ├─ TruckLoader.jsx
│  │  ├─ GPSChecker.jsx
│  │  ├─ RoutePlanner.jsx
	│  └─ ...
│  ├─ styles/
│  │  └─ main.css
│  ├─ data/
│  │  └─ dummyData.js
│  └─ main.jsx
├─ package.json
└─ vite.config.js
```

---

## Setup & Run (Local)

1. Clone the repository

```bash
git clone https://github.com/mananjain20/BikeFlowConsole.git
cd BikeFlowConsole
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

---

## Pending Features & IoT note

Two features are marked as pending due to hardware and real-time data requirements:

- **GPS ID Checker** — requires on-bike GPS hardware or IoT tracking devices to report unit IDs and locations in real time. Integration needs a telemetry pipeline (MQTT/WebSocket), secure device provisioning, and a backend to ingest and normalize telemetry.
- **Safe Route Planner** — for turn-by-turn routing with safety heuristics, we require continuous GPS data, live traffic/incident feeds, and access to routing services that support safety overlays. This feature is designed in UI and ready for backend/hardware integration.

These features are intentionally left as integration-ready UI components so future work can connect them to hardware backends.

---

## Author

Manan Jain — https://github.com/mananjain20
