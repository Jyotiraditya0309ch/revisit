import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ChartBarIcon,
  ShoppingBagIcon,
  CubeIcon,
  ClipboardListIcon,
  CogIcon,
} from '@heroicons/react/outline'; 

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="flex items-center h-16 px-4 bg-slate-800">
        <span className="text-xl font-bold tracking-wide">fastcart</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/dashboard" Icon={ChartBarIcon} label="Dashboard" />
        <NavItem to="/dashboard" Icon={ClipboardListIcon} label="Orders" />
        <NavItem to="/dashboard" Icon={CubeIcon} label="Products" />
        <NavItem to="/dashboard" Icon={ShoppingBagIcon} label="Categories" />
      </nav>
      <div className="p-4">
        <NavItem to="/dashboard" Icon={CogIcon} label="Settings" />
      </div>
    </div>
  );
}

function NavItem({ to, Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-md hover:bg-slate-700 transition-colors ${
          isActive ? 'bg-slate-700' : ''
        }`
      }
    >
      <Icon className="h-5 w-5 mr-3" />
      <span>{label}</span>
    </NavLink>
  );
}

export default Sidebar;
