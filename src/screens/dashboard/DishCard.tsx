import { motion } from "framer-motion";
import { IDishCardProps } from "../../utils/types";
import { DishesCardDetail } from "../../utils/constant";
import { ChevronRight } from "lucide-react";

const DishCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-componentBg h-full p-3 md:p-4 lg:py-10 rounded-md"
    >
      <div className="flex flex-col  gap-4 lg:gap-8 ">
        {DishesCardDetail?.map((item: IDishCardProps) => {
          return (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="rounded-full p-4 hover:opacity-70"
                  style={{ background: item.iconbg, color: item.col }}
                >
                  {item.icon}
                </div>
                <p className="text-sm lg:text-base font-medium">{item.name}</p>
              </div>
              <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
                <ChevronRight className="xl:w-5 xl:h-5 w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default DishCard;
