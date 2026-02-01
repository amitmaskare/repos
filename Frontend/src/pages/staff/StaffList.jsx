import StaffCard from "./StaffCard";

export default function StaffList() {
  return (
    <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Servers</h2>
          <p className="text-sm text-gray-500">
            Manage floor staff and duty status
          </p>
        </div>

        <button className="bg-[#FF7A18] text-white px-4 py-2 rounded-lg">
          + Add Staff Member
        </button>
      </div>

      <div className="flex gap-4">
        <StaffCard name="Elena Rodriguez" emp="EMP-2024-042" active />
        <StaffCard name="Marcus Chen" emp="EMP-2024-058" active />
        <StaffCard name="Sarah Jenkins" emp="EMP-2023-112" />
      </div>
    </div>
  );
}
