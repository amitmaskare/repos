// IntegrationsPage.jsx
import MenuTabs from "../../components/Tab";

import PlatformSidebar from "./PlatformSidebar";
import IntegrationCards from "./IntegrationCards";
import Notification from "../order/Notification";

export default function IntegrationsPage() {
    return (
    <div className="flex h-full gap-4 overflow-hidden">

      {/* LEFT MAIN AREA */}
      <div className="flex flex-1 flex-col gap-4 overflow-hidden">

        {/* TOP TABS */}
        <div className="bg-white rounded-xl shadow-sm shrink-0">
          <MenuTabs />
        </div>

        {/* CONTENT AREA */}
        <div className="flex flex-1 gap-4 overflow-hidden">

          {/* CATEGORIES */}
          <div className="w-[280px] shrink-0 bg-white rounded-xl p-4 overflow-y-auto">
            <PlatformSidebar />
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 bg-white rounded-xl p-6 overflow-y-auto">
            <IntegrationCards />
          </div>

        </div>
      </div>

      {/* RIGHT NOTIFICATIONS */}
      <div className="w-[360px] shrink-0 bg-white rounded-xl overflow-y-auto">
        <Notification />
      </div>

    </div>
  );
  
}
