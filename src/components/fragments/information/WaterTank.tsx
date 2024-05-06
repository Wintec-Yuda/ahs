"use client";

import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/utils";
import { useSelector } from "react-redux";

const WaterTankInformation = () => {
  const waterTank = useSelector((state: any) => state.waterTank.data);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-white font-bold underline">
        Air Tangki <Badge className="text-lg bg-white text-black ms-4">{formatDate(waterTank?.date)}</Badge>
      </h1>
      <div className="flex flex-col gap-4 md:px-4">
        <div className="w-28 h-20 bg-white flex flex-col gap-2 justify-center items-center rounded">
          <label className="font-bold">Volume Tank</label>
          <Badge className="text-lg">{waterTank?.volume}</Badge>
        </div>
        <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
          <Box label="Galon Isi" value={waterTank?.gallonFill} />
          <Box label="Galon Sisa" value={waterTank?.gallonFill - waterTank?.gallonSell} />
          <Box label="Galon Jual" value={waterTank?.gallonSell} />
        </div>
      </div>
    </section>
  );
};

export default WaterTankInformation;

const Box = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="w-28 h-20 bg-white flex flex-col gap-2 justify-center items-center rounded">
      <label className="font-bold">{label}</label>
      <Badge className="text-lg">{value}</Badge>
    </div>
  );
};
