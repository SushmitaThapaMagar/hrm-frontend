"use client";
import React, { useState } from "react";
import LoginBox from "./part/Loginbox";

export default function page() {
  return (
    <div className="h-screen w-full bg-slate-200 flex place-content-center">
      <LoginBox />
    </div>
  );
}
