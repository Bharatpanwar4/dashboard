import { BellDot, Mail, Search, Settings } from "lucide-react";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full bg-componentBg py-4">
      <div className="flex items-center justify-between mx-4 md:mx-12">
        {/* search */}
        <div className="flex items-center relative">
          <Search className="text-white absolute left-2 w-4 md:w-6 " />
          <input
            type="text"
            placeholder="Search"
            className="glassbg  w-32 md:w-fit  text-white text-sm outline-0 border border-[#7E7F83] placeholder:text-[#7E7F83] rounded-md pl-8 md:pl-10 py-2"
          />
        </div>

        {/* other setting icon */}
        <div className="flex items-center justify-end gap-3 md:gap-8">
          <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
            <Mail className="xl:w-5 xl:h-5 w-4 h-4" />
          </div>
          <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
            <Settings className="xl:w-5 xl:h-5 w-4 h-4" />
          </div>

          <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
            <BellDot className="xl:w-5 xl:h-5 w-4 h-4" />
          </div>

          {/* <div className="flex items-center justify-center rounded-full bg-iconBg text-icontext p-2 cursor-pointer hover:text-white ">
        <CircleUserRound  className="xl:w-5 xl:h-5 w-4 h-4"/>
    </div> */}
          <Avatar size={32} />
        </div>
      </div>
    </div>
  );
};

export default Header;
