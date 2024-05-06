"use client";

import { Badge } from "@/components/ui/badge";
import { formatIDR } from "@/utils";
import { useSelector } from "react-redux";

const RevenueInformation = () => {
  const waterTank = useSelector((state: any) => state.waterTank.data);

  const allSpending = waterTank?.spending || [0];
  const grossProfit = waterTank?.revenue?.grossProfit;
  const spending = Object.values<number>(allSpending).reduce((total: number, current: number) => total + current, 0);

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl text-white font-bold underline">Pemasukan</h1>
      <div className="flex flex-col gap-4 md:px-4">
        <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          <Box label="Laba Kotor" value={grossProfit} />
          <Box label="Laba Bersih" value={grossProfit - spending} />
        </div>
      </div>
    </section>
  );
};

export default RevenueInformation;

const Box = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="w-40 h-24 bg-white flex flex-col gap-2 justify-center items-center rounded">
      <label className="font-bold">{label}</label>
      <Badge className="text-lg">{formatIDR(value)}</Badge>
    </div>
  );
};
