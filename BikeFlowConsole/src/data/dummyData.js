export const stations = [
  {
    id: 1,
    name: "Gateway of India Station",
    location: "Apollo Bandar, Colaba, Mumbai",
    totalDocks: 15,
    availableBikes: 8,
    status: "active"
  },
  {
    id: 2,
    name: "Marine Drive Promenade",
    location: "Netaji Subhash Chandra Bose Road, Mumbai",
    totalDocks: 20,
    availableBikes: 12,
    status: "active"
  },
  {
    id: 3,
    name: "CST Terminal Station",
    location: "Fort, Mumbai",
    totalDocks: 18,
    availableBikes: 0,
    status: "maintenance"
  },
  {
    id: 4,
    name: "Bandra Reclamation Station",
    location: "Bandra West, Mumbai",
    totalDocks: 12,
    availableBikes: 7,
    status: "active"
  },
  {
    id: 5,
    name: "Juhu Beach Station",
    location: "Juhu, Mumbai",
    totalDocks: 16,
    availableBikes: 10,
    status: "active"
  },
  {
    id: 6,
    name: "Linking Road Station",
    location: "Santacruz West, Mumbai",
    totalDocks: 14,
    availableBikes: 5,
    status: "active"
  },
  {
    id: 7,
    name: "Dadar Chowpatty Station",
    location: "Dadar West, Mumbai",
    totalDocks: 10,
    availableBikes: 4,
    status: "active"
  },
  {
    id: 8,
    name: "Powai Lake Station",
    location: "Hiranandani Gardens, Powai, Mumbai",
    totalDocks: 15,
    availableBikes: 3,
    status: "maintenance"
  }
];

export const repairQueue = [
  {
    id: 1,
    bikeId: "BK-101",
    issue: "Flat Tyre",
    reportedAt: "2026-06-08T10:30:00Z",
    priority: "low"
  },
  {
    id: 2,
    bikeId: "BK-105",
    issue: "Brake Failure",
    reportedAt: "2026-06-09T14:15:00Z",
    priority: "high"
  },
  {
    id: 3,
    bikeId: "BK-112",
    issue: "Frame Alignment",
    reportedAt: "2026-06-09T18:45:00Z",
    priority: "medium"
  },
  {
    id: 4,
    bikeId: "BK-108",
    issue: "Chain Broken",
    reportedAt: "2026-06-10T08:00:00Z",
    priority: "high"
  },
  {
    id: 5,
    bikeId: "BK-120",
    issue: "Loose Handlebar",
    reportedAt: "2026-06-10T11:20:00Z",
    priority: "low"
  },
  {
    id: 6,
    bikeId: "BK-115",
    issue: "Pedal Damaged",
    reportedAt: "2026-06-10T15:30:00Z",
    priority: "medium"
  }
];

export const rentalHistory = [
  {
    id: 1,
    bikeId: "BK-102",
    userId: "USR-001",
    stationId: 1,
    rentedAt: "2026-06-10T09:00:00Z",
    returned: true
  },
  {
    id: 2,
    bikeId: "BK-103",
    userId: "USR-002",
    stationId: 2,
    rentedAt: "2026-06-10T10:15:00Z",
    returned: true
  },
  {
    id: 3,
    bikeId: "BK-104",
    userId: "USR-003",
    stationId: 4,
    rentedAt: "2026-06-10T12:00:00Z",
    returned: false
  },
  {
    id: 4,
    bikeId: "BK-106",
    userId: "USR-004",
    stationId: 5,
    rentedAt: "2026-06-10T14:30:00Z",
    returned: true
  },
  {
    id: 5,
    bikeId: "BK-107",
    userId: "USR-005",
    stationId: 7,
    rentedAt: "2026-06-10T16:45:00Z",
    returned: false
  }
];

export const trucks = [
  {
    id: 1,
    name: "Truck Alpha",
    capacity: 10,
    assignedBikes: []
  },
  {
    id: 2,
    name: "Truck Beta",
    capacity: 15,
    assignedBikes: []
  },
  {
    id: 3,
    name: "Truck Gamma",
    capacity: 12,
    assignedBikes: []
  }
];
