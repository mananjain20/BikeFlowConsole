# 🚲 BikeFlow Console

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

---

If you'd like, I can also generate a short CONTRIBUTING guide, setup a basic issue/PR template, or create a small demo script to populate dummy data. Just tell me which you'd prefer.
