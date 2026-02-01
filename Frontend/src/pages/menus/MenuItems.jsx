import MenuItemCard from "./MenuItemCard";

export default function MenuItems() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Main Course</h2>
          <p className="text-sm text-gray-500">
            Manage items and their availability
          </p>
        </div>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg">
          + Add Item
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard soldOut />
      </div>
    </>
  );
}
