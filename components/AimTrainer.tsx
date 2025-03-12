"use client";

import { buttonNumber } from "@/data";
import React, { useState, JSX } from "react";

const AimTrainer = () => {
  const [count, setCount] = useState(0);

  const incriment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Aim</h1>
    </div>
  );
};

export default AimTrainer;
