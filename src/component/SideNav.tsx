import { ChartBar, House, LayoutDashboard, LogOut, ShoppingBag, Wallet } from "lucide-react";
import { ISidebarListProps } from "../utils/types";
import { useState } from "react";

const SideNav = ({activeNav, setActiveNav}:any) => {
  // const [activeNav, setActiveNav] = useState<Number>(0);
  const SidebarList: ISidebarListProps[] = [
    {
      id: 0,
      label: "name",
      iconName: <House />,
    },
    {
      id: 1,
      label: "stats",
      iconName: <ChartBar/>,
    },
    {
      id: 2,
      label: "wallet",
      iconName: <Wallet />,
    },
    {
      id: 3,
      label: "shop",
      iconName: <ShoppingBag/>,
    },
  ];
  return (
<>
<div className="hidden md:block w-fit bg-componentBg h-[100dvh] ">
      <div className="py-6 flex items-center justify-center">
        <LayoutDashboard className="w-8 h-8 fill-primaryColor text-primaryColor" />
      </div>

<div className="flex flex-col gap-6">
        {SidebarList?.map((item) => {
          return (
            <div
              key={item.label}
              onClick={()=>setActiveNav(item.id)}
              className={`px-4 py-2 cursor-pointer text-icontext hover:text-white ${item.id === activeNav ? 'border-l-4 border-primaryColor text-primaryColor hover:text-primaryColor' :'border-l-4 border-transparent' }`}
            >
              {item.iconName}
            </div>
          );
        })}
      </div>

<div className="fixed bottom-6 flex items-center justify-center left-0 px-4  cursor-pointer text-icontext hover:text-white ">
    <LogOut/>
</div>

      
    </div>


{/* mobile */}
    <div className=" bg-black mt-4 w-[100dvw] md:hidden fixed bottom-0 shadow-2xl shadow-slate-200  z-40 ">

<div className="bg-componentBg flex items-center justify-center gap-6">
<div className="flex items-center justify-around gap-6 mt-1 pt-2">
        {SidebarList?.map((item) => {
          return (
            <div
              key={item.label}
              onClick={()=>setActiveNav(item.id)}
              className={`px-4 py-2 cursor-pointer text-icontext hover:text-white ${item.id === activeNav ? 'border-b-4 border-primaryColor text-primaryColor hover:text-primaryColor' :'border-l-4 border-transparent' }`}
            >
              {item.iconName}
            </div>
          );
        })}
      </div>

      <div className=" mt-3 pt-2 py-2 flex items-center justify-center  px-4  cursor-pointer text-icontext hover:text-white ">
    <LogOut/>
</div>
</div>
    </div>

</>

    
  );
};

export default SideNav;
