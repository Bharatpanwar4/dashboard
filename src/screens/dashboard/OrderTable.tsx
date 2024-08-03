import { motion } from "framer-motion";
import { OrderTableDetails } from "../../utils/constant";
import { IOrderTableProps } from "../../utils/types";
import Avatar from "../../component/Avatar";

const OrderTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-componentBg h-full p-3 md:p-4 rounded-md "
    >
      <div className="flex items-center justify-between">
        <p className="xl:text-2xl lg:text-xl text-lg font-semibold ">
          Recent Orders
        </p>
      </div>
      {/* table */}
      {/* web */}
      <div className="hidden sm:flex flex-col my-4 ">
        <div className="grid grid-cols-5 text-sm font-semibold border-b border-[#55565C90] p-2 mr-2">
          <p className="col-span-2">Customer</p>
          <p className="col-span-1">Order No.</p>
          <p className="col-span-1">Amount</p>
          <p className="col-span-1">Status</p>
        </div>
        <div className="max-h-[36dvh] overflow-y-auto">
          {OrderTableDetails?.map((item: IOrderTableProps) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-5 text-sm  border-b last:border-0 border-[#55565C90] p-2 capitalize   hover:shadow-md  hover:shadow-gray-700  mr-2"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <Avatar size={30} />
                  {item.name}
                </div>
                <p className="col-span-1">{item.orderNo}</p>
                <p className="col-span-1">₹ {item.amount}</p>
                <div
                  className={`col-span-1 w-fit flex items-center justify-center rounded-full px-3  ${
                    item.status == "pending"
                      ? " bg-[#273368] text-[#3E68FF]"
                      : item.status == "cancelled"
                      ? " bg-[#613339] text-[#F65D5C]"
                      : "bg-[#175446] text-[#249F7D]"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* mobile */}
      <div className="sm:hidden my-4">
        <div className=" flex flex-col gap-4 max-h-[40dvh] overflow-y-auto">
          {OrderTableDetails?.map((item: IOrderTableProps) => {
            return (
              <div
                key={item.id}
                className="mr-2 text-sm flex flex-col gap-2 border border-[#55565C90] p-2 capitalize   hover:shadow-md  hover:shadow-gray-700 rounded-md hideScrollbar "
              >
                <div className="flex items-center justify-between">
                  <div className=" flex items-center gap-3">
                    <Avatar size={30} />
                    {item.name}
                  </div>
                  <div
                    className={` w-fit flex items-center justify-center rounded-full px-3  ${
                      item.status == "pending"
                        ? " bg-[#273368] text-[#3E68FF]"
                        : item.status == "cancelled"
                        ? " bg-[#613339] text-[#F65D5C]"
                        : "bg-[#175446] text-[#249F7D]"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="">
                    {" "}
                    <span className="text-[#707070]">Order No.</span>{" "}
                    {item.orderNo}
                  </p>
                  <p className="">
                    {" "}
                    <span className="text-[#707070]">Amount</span> ₹{" "}
                    {item.amount}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default OrderTable;
