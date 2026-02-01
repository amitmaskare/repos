import OrderTable from "./OrderTable";
import Notification from "./Notification";
import Tab from "../../components/Tab";

export default function Order() {
 return (
    <div className="flex h-full gap-4">

      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col gap-4">

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm">
          <Tab />
        </div>

        {/* Orders Table */}
        <div className="flex-1 bg-white rounded-xl p-6 overflow-hidden">
          <OrderTable />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[360px] shrink-0 bg-white rounded-xl shadow-sm flex flex-col">
        <Notification />
      </div>

    </div>
  );

}
