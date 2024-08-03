import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { NetProfitCardDetail } from "../../utils/constant";
import RoundedProgress from "../charts/RoundedProgress";
const NetProfitCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-componentBg  h-full rounded-md whitespace-nowrap"
    >
      <div className="flex items-center justify-between  h-full w-full">
        <div className="flex flex-col align-middle gap-4 xl:items-stretch h-full p-3 md:p-4  justify-between  lg:w-2/3">
          <div className="text-sm font-normal">
            {" "}
            {NetProfitCardDetail?.name}
          </div>
          <div className="text-4xl font-bold">
            {" "}
            ₹{NetProfitCardDetail?.value}
          </div>
          <div className="text-sm text-[#12C290] flex items-center gap-1">
            <ChevronUp className="" fill="#12C290" color="#12C290" />
            {NetProfitCardDetail?.percent} %
          </div>
        </div>
        <div className="m-0 p-0">
          <RoundedProgress />
        </div>
      </div>
    </motion.div>
  );
};

export default NetProfitCard;
