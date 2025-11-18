import React from 'react';

interface InfoCardProps {
  label: string;
  value: string;
  subValue?: string;
  icon: React.ReactNode;
  bgColor: string;
  rotate?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ label, value, subValue, icon, bgColor, rotate = 'rotate-0' }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-6 border-4 border-pop-black shadow-hard transform transition-transform hover:scale-105 ${bgColor} ${rotate}`}>
      <div className="mb-2 text-pop-black">
        {icon}
      </div>
      <h3 className="font-comic text-xl uppercase mb-1">{label}</h3>
      <p className="text-2xl font-bold text-center leading-tight">{value}</p>
      {subValue && <p className="text-sm mt-1 font-medium opacity-90">{subValue}</p>}
    </div>
  );
};