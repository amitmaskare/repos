export const orders = [
  { id: "#ORD-2489", table: "Floor 1 • T-101", time: "12:45 PM", status: "PREPARING", amount: "63.25" },
  { id: "#ORD-2488", table: "Takeaway", time: "12:38 PM", status: "COMPLETED", amount: "24.00" },
  { id: "#ORD-2487", table: "Floor 1 • T-105", time: "12:30 PM", status: "READY", amount: "48.50" },
  { id: "#ORD-2486", table: "Floor 2 • T-204", time: "12:15 PM", status: "PAID", amount: "112.00" }
];

export const notifications = [
  { icon: "🍽", title: "Order Ready", text: "Order #2487 for Table 105 is ready", tag: "KITCHEN" },
  { icon: "💰", title: "Payment Received", text: "Rs.112 received for Order #2486", tag: "BILLING" },
  { icon: "⭐", title: "New Review", text: "Great service and pizza!", tag: "RATINGS" },
  { icon: "📦", title: "Low Stock Alert", text: "Avocados below threshold", tag: "INVENTORY" }
];
