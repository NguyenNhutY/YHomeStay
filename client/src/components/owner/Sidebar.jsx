import React, { memo, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import assets from "../../assets/data";
import { UserButton } from "@clerk/clerk-react";

const Sidebar = () => {
  const { navigate, isOwner } = useAppContext();

  const navItems = [
    { path: "/owner", label: "Dashboard", icon: assets.dashboard },
    {
      path: "/owner/add-property",
      label: "Add Property",
      icon: assets.housePlus,
    },
    { path: "/owner/list-property", label: "List Property", icon: assets.list },
  ];

  useEffect(() => {
    if (!isOwner) navigate("/");
  }, [isOwner]);

  return (
    <div className='flex h-screen bg-neutral-100 bg-linear-to-r from [#fffbee] to-white'>
      <div className='mx-auto max-w-[1440px] flex flex-col md:flex-row'>
        <div className='w-64 bg-white shadow-xl max-md:flexCenter sm:m-3 md:mid-w-[20%] md:mid-h-[97vh] rounded-xl justify-between border-r px-6 py-8 flex flex-col gap-10 mx-auto max-w[1440px]  md:flex-row'>
          <div className='flex items-center j flex-col bg-white-col md:pt-5'>
            <div className='flex flex-1 p-3 lg:pl-8'>
              <Link to='/owner'>
                <img src={assets.logoImg} className='h-10' />
              </Link>
            </div>
            <div className='md:hidden flex items-center gap-3 md:bg-primary rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10'>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-[42px] h-[42px]",
                  },
                }}
              />
            </div>
          </div>

          <nav className='flex flex-col md:gap-4 gap-y-8 md:mt-4'>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className='  flex items-center gap-3 text-neutral-700 hover:text-black hover:bg-neutral-100 px-3 py-2 rounded-xl transition'
              >
                <img src={item.icon} className='w-5 h-5 opacity-70' />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <div className='md:hidden flex items-center gap-3 md:bg-primary rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10'>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-[42px] h-[42px]",
            },
          }}
        />
      </div>
      <div className='flex-1 overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default memo(Sidebar);
