import React from "react";
import heart from "../assets/heart.png";
import lungs from "../assets/lungs.png";
import kidney from "../assets/kidney.png";
import liver from "../assets/liver.png";


const MedicalComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <h1 className="text-7xl font-bold mb-8">P.</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-12">

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
          <img src={heart} alt="Heart Icon" className="w-[450px] h-[250px] saturate-0" />
          <p className="text-5xl pt-24 bg-blur-xl font-semibold">Doctor</p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl shadow-lg overflow-hidden">
          <div className="flex px-10">
          <img src={lungs} alt="Heart Icon" className="w-[390px] saturate-0" />
          <p className="text-5xl pt-24 bg-blur-xl font-semibold">Patient</p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
          <img src={kidney} alt="Heart Icon" className="w-[428px] saturate-0" />
          <p className="text-5xl pt-24 bg-blur-xl font-semibold">Laboratory</p>
          </div>
        </div>

        <div className="flex flex-col bg-[#EFEFEFBD] rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
          <img src={liver} alt="Heart Icon" className="w-[390px] saturate-0" />
          <p className="text-5xl pt-24 bg-blur-xl font-semibold">Pharmacy</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default MedicalComponent;
