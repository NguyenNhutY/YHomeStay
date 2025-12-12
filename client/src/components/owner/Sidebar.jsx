import React, { memo, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import assets from "../../assets/data";

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
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner]);
  return <div>Sidebax</div>;
};

export default memo(Sidebar);
