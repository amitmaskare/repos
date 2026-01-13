import MenuCard from "./MenuCard";

const items = [
  {
    id: 1,
    name: "Classic Burger",
    price: 995,
    time: "20 mins",
    image: "https://picsum.photos/400/300?1",
    desc: "Juicy beef patty with cheddar, lettuce, and tomato.",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 1200,
    qty: 2,
    image: "https://picsum.photos/400/300?2",
    desc: "Tomato sauce, mozzarella di bufala, fresh basil.",
  },
  {
    id: 3,
    name: "Mojito",
    price: 750,
    category: "BEVERAGE",
    image: "https://picsum.photos/400/300?3",
    desc: "White rum, sugar, lime juice, soda water, mint.",
  },
  {
    id: 4,
    name: "Caesar Salad",
    price: 870,
    time: "15 mins",
    image: "https://picsum.photos/400/300?4",
    desc: "Romaine lettuce, croutons, parmesan cheese.",
  },
];

export default function Menu() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
