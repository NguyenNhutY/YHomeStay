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
      path: "/owner/add",
      label: "Add ",
      icon: assets.housePlus,
    },
    { path: "/owner/list", label: "List ", icon: assets.list },
    { path: "/owner/inbox", label: "Inbox", icon: assets.list },
    { path: "/owner/analytics", label: "Analytics", icon: assets.list },
    { path: "/owner/staff", label: "Staff", icon: assets.list },
    { path: "/owner/reviews", label: "Reviews", icon: assets.list },

    { path: "/owner/calendar", label: "Calendar", icon: assets.list },
  ];

  useEffect(() => {
    if (!isOwner) navigate("/");
  }, [isOwner]);

  return (
    <div className='flex h-screen bg-neutral-50'>
      {/* Sidebar */}
      <aside className='w-64 bg-white border-r shadow-sm flex flex-col'>
        {/* Logo */}
        <div className='h-16 flex items-center px-6 border-b'>
          <Link to='/owner'>
            <img src={assets.logoImg} className='h-8' />
          </Link>
        </div>

        {/* Nav */}
        <nav className='flex-1 px-4 py-6 space-y-1'>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 px-4 py-2 rounded-lg text-sm
                transition-all
                ${
                  isActive
                    ? "bg-neutral-900 text-white shadow"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                }
                `
              }
            >
              <img src={item.icon} className={`w-5 h-5 ${"opacity-80"}`} />
              <span className='font-medium'>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* User */}
        <div className='px-6 py-4 border-t flex items-center gap-3'>
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox: "w-9 h-9",
              },
            }}
          />
          <span className='text-sm text-neutral-600'>Account</span>
        </div>
      </aside>

      {/* Content */}
      <main className='flex-1 overflow-y-auto p-6'>
        <Outlet />
      </main>
    </div>
  );
};

export default memo(Sidebar);
