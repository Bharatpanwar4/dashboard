import { ChevronDown } from 'lucide-react';
import BarChart from '../charts/BarChart';
import { motion } from 'framer-motion';

const BarGraph = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-componentBg h-full p-3 md:p-4 rounded-md"
    >
      <div className="flex items-center justify-between">
        <p className="xl:text-2xl lg:text-xl text-lg font-semibold">Activity</p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="bg-[#4B4D51] flex items-center gap-2 text-sm px-2 py-0.5 rounded-full cursor-pointer"
        >
          Weekly
          <ChevronDown />
        </motion.div>
      </div>

   

      <BarChart />
    </motion.div>
  );
};

export default BarGraph;
