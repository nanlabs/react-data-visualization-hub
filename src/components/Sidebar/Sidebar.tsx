import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { IoBarChartSharp, IoPieChartSharp, IoPieChartOutline } from 'react-icons/io5';
import { FaChartLine, FaUncharted } from 'react-icons/fa';

const SideBar = () => {
  const Menus = [
    { title: 'Highcharts', icon: <IoBarChartSharp />, path: '/highcharts' },
    { title: 'Recharts', icon: <IoPieChartSharp />, path: '/recharts' },
    { title: 'ReactCharts', icon: <IoPieChartOutline />, path: '/reactcharts' },
    { title: 'TradingView', icon: <FaChartLine />, path: '/tradingview' },
    { title: 'ApexChart', icon: <FaUncharted />, path: '/apexcharts' },
  ];

  return (
    <div className={`w-72 bg-dark-purple h-screen p-10 relative duration-300 border-r border-gray-400`}>
      <div className="inline-flex">
        <img className="h-8 w-auto mr-3" src="/icons/logo.svg" alt="nanlabs" />
        <h1 className={`text-gray-900 origin-left font-medium text-2xl duration-300`}>Data Viz Hub</h1>
      </div>
      <ul>
        {Menus.map((menu, index) => (
          <>
            <Link to={menu.path} className="flex items-center w-full">
              <li
                key={index}
                className={`text-gray-700 text-sm flex items-center gap-x-4   cursor-pointer p-1 hover:bg-light-white rounded-md mt-9`}
              >
                <span className="text-2xl block float-left">{menu.icon ? menu.icon : <MdDashboard />}</span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && 'hidden '}`}>{menu.title}</span>
              </li>
            </Link>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
