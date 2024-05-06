import { Badge } from "@/components/ui/badge";

const tanks = {
  id: 1,
  volume: 8000,
  gallons: [
    { product: "Galon Kosong", qty: 100 },
    { product: "Galon Isi", qty: 80 },
  ],
};

const WaterTankInformation = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-white font-bold underline">Air Tangki</h1>
      <div className="flex flex-col gap-4 md:px-4">
        <div className="w-28 h-20 bg-blue-400 flex flex-col gap-2 justify-center items-center rounded">
          <label className="font-bold">Volume Tank</label>
          <Badge className="text-lg">{tanks.volume}</Badge>
        </div>
        <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
          {tanks.gallons.map((gallon) => (
            <div key={gallon.product} className="w-28 h-20 bg-white flex flex-col gap-2 justify-center items-center rounded">
              <label className="font-bold">{gallon.product}</label>
              <Badge className="text-lg">{gallon.qty}</Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WaterTankInformation