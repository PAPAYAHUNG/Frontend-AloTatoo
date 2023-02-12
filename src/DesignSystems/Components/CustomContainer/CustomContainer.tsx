import React from "react";
import MultipleItemContainer from "../../../components/MultipleItemContainer/MultipleItemContainer";

const CustomContainer = ({ data }: any) => {
  return (
    <div className="customContainer  bg-gray-300 rounded-lg  justify-between flex items-center p-5 ">
      <div className="flex flex-col justify-between items-start h-[300px]">
        <div>Tatooo</div>
        <div className="text-4xl  font-bold ">Hotsale Weekend</div>
        <div className="endtime ">
            
        End at: {'   '}
        <span className="p-2 rounded bg-black font-bold" >15</span> :  <span className="p-2 rounded bg-black font-bold" >Dec</span>
        </div>
      
      </div>
      <MultipleItemContainer data={data} />
    </div>
  );
};

export default CustomContainer;
