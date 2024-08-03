import BarGraph from "./BarGraph";
import CustomerFeedback from "./CustomerFeedback";
import DishCard from "./DishCard";
import NetProfitCard from "./NetProfitCard";
import OrderTable from "./OrderTable";
import StatsCard from "./StatsCard";

const Dashboard = ({ activeNav }: any) => {
  return (
    <div className="text-white max-h-[90dvh] m-4 pb-24 md:pb-12  md:mx-12  overflow-y-auto hideScrollbar ">
      <div className="font-semibold lg:text-3xl text-2xl  ">
        {activeNav === 0
          ? "Dashboard"
          : activeNav === 1
          ? "Statistics"
          : activeNav === 2
          ? "Transaction"
          : "Shop"}
      </div>
{/* stats card and netportfolio card */}
      <div className="flex items-stretch flex-col xl:flex-row  justify-between gap-6 align-baseline mt-6">
        <div className="w-full xl:w-2/3">
          <StatsCard />
        </div>
        <div className="w-full xl:w-1/3">
          <NetProfitCard />
        </div>
      </div>
{/* bar and dishes card */}
      <div className="flex items-stretch flex-col xl:flex-row  justify-between gap-6 align-baseline mt-6 h-fit">
        <div className="w-full xl:w-2/3 ">
          <BarGraph/>
        </div>
        <div className="w-full xl:w-1/3 ">
         <DishCard/>
        </div>
      </div>
{/* table and reviews */}
      <div className="flex items-stretch flex-col xl:flex-row  justify-between gap-6 align-baseline mt-6 h-fit">
        <div className="w-full xl:w-2/3 ">
          <OrderTable/>
        </div>
        <div className="w-full xl:w-1/3 ">
         <CustomerFeedback/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
