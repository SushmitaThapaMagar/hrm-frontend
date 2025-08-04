import React from "react";

export default function InputLabel({ label = "" }) {
  return (
    <div>
      <label className="text-xs mt-2 text-gray-600">{label}</label>
    </div>
  );
}
