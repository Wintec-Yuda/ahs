import { Badge } from "@/components/ui/badge";
import { formatIDR } from "@/utils";

const spending = {
  gallonLids: 100000,
  wipes: 50000,
  operational: 200000,
  tankWater: 500000,
  filter: 15000,
  salary: 400000,
};

const SpendingInformation = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-white font-bold underline">Pengeluaran</h1>
      <div className="flex flex-col gap-4 md:px-4">
        <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          <Box label="Tutup Gallon" value={spending.gallonLids} />
          <Box label="Tisu" value={spending.wipes} />
          <Box label="Operasional" value={spending.operational} />
          <Box label="Air Tangki" value={spending.tankWater} />
          <Box label="Filter" value={spending.filter} />
          <Box label="Gaji" value={spending.salary} />
        </div>
      </div>
    </section>
  );
};

export default SpendingInformation;

const Box = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="w-40 h-24 bg-white flex flex-col gap-2 justify-center items-center rounded">
      <label className="font-bold">{label}</label>
      <Badge className="text-lg">{formatIDR(value)}</Badge>
    </div>
  );
};
