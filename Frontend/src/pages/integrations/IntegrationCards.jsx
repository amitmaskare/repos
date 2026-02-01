import PlatformCard from "./PlatformCard";

export default function IntegrationCards() {
  return (
    <div className="flex-1 bg-[#FBFCFE] p-6 overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold">
            Food Delivery Platforms
          </h2>
          <p className="text-sm text-gray-500">
            Manage external delivery service connections and sync
          </p>
        </div>

        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow">
          Link New Integration
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-[720px]">
        <PlatformCard
          name="Uber Eats"
          status="CONNECTED"
          color="green"
        />
        <PlatformCard
          name="DoorDash"
          status="CONNECTED"
          color="green"
        />
        <PlatformCard
          name="Zomato"
          status="DISCONNECTED"
          color="gray"
        />
        <PlatformCard
          name="Swiggy"
          status="SETUP REQUIRED"
          action
        />
      </div>
    </div>
  );
}
