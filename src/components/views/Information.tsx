import RevenueInformation from "../fragments/information/Revenue";
import SpendingInformation from "../fragments/information/Spending";
import WaterTankInformation from "../fragments/information/WaterTank";

const DashboardView = () => {
  return (
    <div className="lg:h-screen p-4 flex flex-col gap-5">
      <WaterTankInformation />
      <SpendingInformation />
      <RevenueInformation />
    </div>
  );
};

export default DashboardView;
