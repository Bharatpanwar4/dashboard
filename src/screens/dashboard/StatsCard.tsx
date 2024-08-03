import { ChevronDown, ChevronUp } from "lucide-react";
import { StatsCardDetails } from "../../utils/constant";
import { motion } from "framer-motion";

const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {StatsCardDetails?.map((item) => {
        return (
          <motion.div
            key={item.name}
            className="col-span-1 bg-componentBg p-3 md:p-4 rounded-md whitespace-nowrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex md:flex-col justify-between items-center sm:justify-start sm:items-start gap-1">
              <motion.div
                className={`p-2 lg:p-3  flex items-center justify-center w-fit rounded-xl`}
                style={{ backgroundColor: item.bgIcon }}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className="w-5 h-5 flex items-center justify-center"
                  style={{ color: item.col }}
                >
                  {item.icon}
                </div>
              </motion.div>
              <div className="text-sm">{item.name}</div>
            </div>

            <div className="flex items-center justify-between mt-3 lg:mt-6">
              <p className="font-semibold text-2xl lg:text-3xl xl:text-4xl">
                {item.number}
              </p>
              <div className="text-sm">
                <p className="flex items-center">
                  {item.positive ? (
                    <ChevronUp className="" fill="#12C290" color="#12C290" />
                  ) : (
                    <ChevronDown fill="#AD5A5B" color="#AD5A5B" />
                  )}
                  {item.percentage} %
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default StatsCard;
