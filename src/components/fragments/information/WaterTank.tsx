"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import waterTankInstance from "@/instances/waterTank";
import { formatDate } from "@/utils";
import { confirmAlert, errorAlert, successAlert } from "@/utils/sweetalert";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { GiWaterTank } from "react-icons/gi";

const WaterTankInformation = () => {
  const [loading, setLoading] = useState(false);
  const session: any = useSession();

  const token = session?.data?.token;
  const waterTank = useSelector((state: any) => state.waterTank.data);

  const handleNewProcess = async () => {
    const confirmed: boolean = await confirmAlert("Are you sure you want to start a new process?");

    if (confirmed) {
      setLoading(true);
      try {
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate().toString().padStart(2, "0")}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${currentDate.getFullYear()}`;
        const data = {
          date: formattedDate,
          gallonFill: 0,
          gallonSell: 0,
          volume: 8000,
          revenue: {
            grossProfit: 0,
          },
          spending: {
            salary: 0,
            filter: 0,
            operational: 0,
            tankWater: 0,
            wipes: 0,
            gallonLids: 0,
          },
        };
        const response = await waterTankInstance.addData(data, token);

        successAlert(response.data.message);
      } catch (error) {
        errorAlert("Internal Server Error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-4">
        <h1 className="text-2xl text-white font-bold underline">
          Air Tangki <Badge className="text-lg bg-white text-black ms-4">{formatDate(waterTank?.date)}</Badge>
        </h1>
        {loading ? (
          <Button disabled className="hidden sm:flex p-1 bg-green-700">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button onClick={handleNewProcess} className="hidden sm:flex p-1 px-2 bg-green-500 hover:bg-green-700">
            <GiWaterTank className="text-black text-xl cursor-pointer" />
            <label className="ml-2 text-black font-semibold text-lg hidden sm:flex">Isi Air Tandon</label>
          </Button>
        )}
      </div>
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
