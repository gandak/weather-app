"use client";
import { useState } from "react";
import { LeftSide } from "./components/LeftSide";
import { RightSide } from "./components/RightSide";

export default function Home() {
  return (
    <div className="flex justify-between">
      <LeftSide />
      <RightSide />
    </div>
  );
}
