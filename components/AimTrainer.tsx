"use client";

import React, { useState } from "react";

const AimTrainer = () => {
  const [count, setCount] = useState(0);
  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex w-[70vw] h-[70vh] border border-black">
        <button
          title="Click target"
          aria-label="Click target"
          className={`h-10 w-10 bg-black absolute left-72`}
          onClick={incriment}
        />
        <h1>{count}</h1>
      </div>
    </div>
  );
};

export default AimTrainer;
