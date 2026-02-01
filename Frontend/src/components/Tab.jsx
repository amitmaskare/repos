import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  Utensils,
  Users,
  Puzzle,
  Star
} from "lucide-react";

const tabs = [
  { label: "Orders", path: "/orders", icon: ClipboardList },
  { label: "Menu", path: "/menus", icon: Utensils },
  { label: "Staff", path: "/staff", icon: Users },
  { label: "Inventory", path: "/inventory", icon: Users },
  { label: "Integrations", path: "/integrations", icon: Puzzle },
  { label: "Ratings & Reviews", path: "/rating", icon: Star },
];

const OrdersHeader = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-3 shadow-sm">
      <div className="flex items-center gap-2">
        {tabs.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
              ${isActive
                ? "bg-orange-50 text-orange-600"
                : "text-gray-500 hover:bg-gray-100"}`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default OrdersHeader;
