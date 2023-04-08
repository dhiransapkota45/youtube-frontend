import React from "react";

const Loader = () => {
  return (
    <>
      <div className="animate-pulse rounded-lg shadow cursor-pointer ">
        <div className=" w-full h-60 relative bg-slate-600 "></div>
        <div className=" flex px-2 my-2 relative">
          <div className=" w-12 h-12 rounded-full mr-4 overflow-hidden relative bg-slate-600"></div>

          <div className=" bg-slate-600 w-full">
            {/* <div className=" font-bold  bg-slate-600 h-2"></div> */}
          </div>

          <button className="  bg-slate-600  p-2 rounded-full absolute top-2 right-3">
            <div className=" absolute "></div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Loader;

{
  /* <div className=" border-2 rounded-md p-4 max-w-sm w-full mx-auto">
<div className="animate-pulse  flex space-x-4">
  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
  <div className="flex-1 space-y-6 py-1">
    <div className="h-2 bg-slate-700 rounded"></div>
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
    </div>
  </div>
</div>
</div> */
}
