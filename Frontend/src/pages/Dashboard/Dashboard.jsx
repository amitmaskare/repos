import React from "react";
import { floors, notifications } from "../../data/dashboardData";
import Header from "../../components/Header";
import TableCard from "../../components/TableCard";
import Notifications from "../../components/Notifications";

const Dashboard = () => {
  return (
    <>
   <section className="flex-1 flex flex-col overflow-hidden">
    {floors.map((floor) => (
      <div key={floor.id} className="mb-14">
        
        {/* Floor Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {floor.name}
            </h2>
            <span className="px-3 py-1 rounded-full bg-gray-200 text-sm text-gray-700">
              {floor.tablesCount} Tables
            </span>
          </div>

          <button className="text-primary font-semibold flex items-center gap-1">
            Manage Floor <span>✎</span>
          </button>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {floor.tables.map((table, i) => (
            <TableCard key={i} table={table} />
          ))}
        </div>
      </div>
    ))}
  </section>
    <Notifications data={notifications} />
   
    </>
  );
};

export default Dashboard;
