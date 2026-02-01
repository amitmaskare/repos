import { orders } from "../../data/OrderData";
import StatusBadge from "./StatusBadge";

export default function OrderTable() {
  return (
    <>
      <div className="orders-header">
        <h2>Recent Orders</h2>
        <div>
          <button className="btn-outline">Export CSV</button>
          <button className="btn-primary">New Manual Order</button>
        </div>
      </div>

      <table className="orders-table">
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>TABLE / MODE</th>
            <th>TIME</th>
            <th>STATUS</th>
            <th>AMOUNT</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.table}</td>
              <td>{order.time}</td>
              <td>
                <StatusBadge status={order.status} />
              </td>
              <td>Rs. {order.amount}</td>
              <td className="eye">👁</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
