import React from 'react';
import logo3 from '../../assets/logo1.png';

const Copyright = () => {
  return (

      <div className="flex flex-row-reverse justify-between items-center gap-2 bg-[#EEECEC]">
        <img src={logo3} alt="Radius Logo" className="h-8" />
        <p className="text-left mt-4 text-white">© 2024 Indian Tire Distributors, Inc. All Rights Reserved.</p>
      </div>

  );
};

export default Copyright;
