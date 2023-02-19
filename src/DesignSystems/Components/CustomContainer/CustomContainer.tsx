import React from "react";
import MultipleItemContainer from "../../../components/MultipleItemContainer/MultipleItemContainer";

// text-gray-900 border border-gray-300  bg-gray-50
// dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400
const CustomContainer = ({ data }: any) => {
  return (
    <div
      className="customContainer
    text-gray-900 border border-gray-300 
      rounded-lg
      justify-between flex items-center p-5 "
    >
      <div className="flex flex-col shadow-lg  justify-between items-center h-[300px] min-w-[30%] ">
        {/* <div className="">Tatooo</div> */}
        <div className="font-bold text-4xl text-white outline-4 ">
          Hotsale Weekend
        </div>
        <div className="endtime text-white  p-10 text-center w-full bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 rounded-lg">
          <p className="text-2xl"> End at: </p>
          <div className="pt-10">
            <span className="p-2 rounded bg-black font-bold">15</span> :{" "}
            <span className="p-2 rounded bg-black font-bold">Dec</span>
          </div>
        </div>
      </div>
      <MultipleItemContainer data={data} itemsPerView={2} />
    </div>
  );
};

export default CustomContainer;
