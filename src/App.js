import React from "react";

const App = () => {
  return (
    <div className="p-0 m-0 w-full h-screen">
      <div
        className="flex flex-col w-full items-center h-[70%] bg-[rgba(255,255,0)]
        pt-10 gap-4"
      >
        <h1 className="text-3xl font-semibold text-white">Pinak Idea Lab</h1>
        <div
          className="flex w-[70px] h-[70px] rounded-full bg-gray-700 opacity-[0.8]
          items-center justify-center text-3xl"
        >
          : )
        </div>
      </div>
      <div className="w-full h-[30%] bg-[rgba(0,0,255)]">
        <div className="flex justify-center perspective">
          <div className="cube mt-[-7.5px]">
            <div className="front"></div>
            {/* <div className="back"></div> */}
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            {/* <div className="bottom"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
