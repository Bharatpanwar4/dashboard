import { motion } from "framer-motion";
import { customerFeedbackDetails } from "../../utils/constant";
import Avatar from "../../component/Avatar";
import StarRating from "../../component/StarRating";

const CustomerFeedback = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-componentBg h-full p-3 md:p-4 rounded-md "
    >
      <div className="flex items-center justify-between">
        <p className="xl:text-2xl lg:text-xl text-lg font-semibold ">
          Customer's Feedback
        </p>
      </div>

      <div className="my-4 flex flex-col gap-4 max-h-[40dvh] overflow-y-auto">
        {customerFeedbackDetails?.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col gap-2 border-b border-[#55565C90] p-2"
            >
              <div className=" flex items-center gap-3">
                <Avatar size={30} />
                {item.name}
              </div>

              <StarRating rating={item.rating} />
              <div className="text-sm text-slate-400">{item.review}</div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CustomerFeedback;
