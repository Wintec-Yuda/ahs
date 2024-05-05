import { Badge } from "../ui/badge";

const tanks = {
  id: 1,
  volume: 8000,
  gallons: [
    { product: "Galon Kosong", qty: 100 },
    { product: "Galon Isi", qty: 80 },
    { product: "Galon Laku", qty: 20 },
  ],
};

const DashboardView = () => {
  return (
    <div className="h-[100vh] flex flex-col gap-4 p-4">
      <div className="w-36 h-20 bg-blue-400 flex flex-col gap-2 justify-center items-center rounded">
        <label className="md:text-lg font-bold">Volume Tangki</label>
        <Badge className="text-lg">{tanks.volume}</Badge>
      </div>
      <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
        {tanks.gallons.map((gallon) => (
          <div key={gallon.product} className="w-36 h-20 bg-white flex flex-col gap-2 justify-center items-center rounded">
            <label className="md:text-lg font-bold">{gallon.product}</label>
            <Badge className="text-lg">{gallon.qty}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardView;
