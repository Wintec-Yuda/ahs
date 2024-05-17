import { useSelector } from "react-redux";
import { WaterTanksDataTable } from "../fragments/datatables/waterTanks";

const DashboardView = () => {
  const waterTanks = useSelector((state: any) => state.waterTanks.data);

  const transformedData = waterTanks.map((waterTank: any) => {
    const totalSpending = waterTank.spending.filter + waterTank.spending.gallonLids + waterTank.spending.operational + waterTank.spending.salary + waterTank.spending.tankWater + waterTank.spending.wipes;

    return {
      date: waterTank.date,
      gallonSell: waterTank.gallonSell,
      volume: waterTank.volume,
      spending: totalSpending,
      revenue: waterTank.revenue.grossProfit,
      netProfit: waterTank.revenue.grossProfit - totalSpending,
    };
  });

  return <WaterTanksDataTable data={transformedData} />;
};

export default DashboardView;
