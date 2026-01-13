export const floors = [
  {
    id: 1,
    name: "Floor 1 - Main Hall",
    tablesCount: 12,
    tables: [
      { no: "01", status: "occupied", people: 4, time: "12m ago" },
      { no: "02", status: "free", people: 2 },
      { no: "03", status: "reserved", time: "19:00", name: "Smith" },
      { no: "04", status: "free", people: 6 },
      { no: "05", status: "payment", amount: "Rs. 142.50", note: "Wait." },
    ],
  },
  {
    id: 2,
    name: "Floor 2 - Terrace",
    tablesCount: 8,
    tables: [
      { no: "T1", status: "free", people: 2 },
      { no: "T2", status: "occupied", people: 4, time: "35m ago" },
      { no: "T3", status: "free", people: 2 },
    ],
  },
];

export const notifications = [
  {
    title: "New Order: Table 05",
    message: "Customer requested bill settlement.",
    time: "Just now",
    active: true,
  },
  {
    title: "Kitchen Alert",
    message: 'Dish "Spicy Pasta" is out of stock.',
    time: "5 mins ago",
    active: true,
  },
  {
    title: "Reservation Canceled",
    message: "Table 08 reservation for 8:00 PM canceled by user.",
    time: "1 hour ago",
  },
  {
    title: "System Update",
    message: "Daily sync completed successfully.",
    time: "Yesterday",
  },
];
