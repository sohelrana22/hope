import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex items-center justify-center  my-10">
        <Loader type="ThreeDots" color="#4ABCD7" height={80} width={80} />
      </div>
    </>
  );
};

export default Spinner;
