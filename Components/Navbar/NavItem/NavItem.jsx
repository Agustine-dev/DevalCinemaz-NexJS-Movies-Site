// NavItem.js
import React, { useRef } from "react";

const NavItem = ({ searching, tab, isActive }) => {
  const subMenuRef = useRef(null);

  // No need for `setActiveTab` here (passed from Navbar)

  const handleSubMenuToggle = () => {
    if (!searching) {
      // Only toggle if not searching
      subMenuRef.current.classList.toggle("hidden"); // Toggle visibility directly
    }
  };

  return (
    <div className="relative ml-[20px] ">
      <div
        className={`group pr-[20px] mr-[10px]  cursor-pointer dark:text-customWhite text-customDark flex justify-between items-center border-r-[1px] border-slate-600 group-last:border-r-0 ${
          searching ? "hidden" : null
        }`}
        onClick={handleSubMenuToggle}
      >
        {tab.name}
      </div>
      {tab.subMenu.length > 0 && (
        <div
          ref={subMenuRef}
          className={`absolute top-[30px] w-[172px] bg-customWhite dark:bg-customDark dark:text-customWhite text-customDark shadow-md rounded  pt-4 hidden ${
            isActive && !searching ? "" : "hidden" // Show only if active and not searching
          } `}
        >
          {tab.subMenu.map((menu, i) => (
            <div
              key={i}
              className="text-[14px] px-3 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 p-1 rounded "
            >
              {menu}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
