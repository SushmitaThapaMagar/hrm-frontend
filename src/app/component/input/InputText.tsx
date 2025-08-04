"use client";
import React from "react";

export default function InputText({
  type,
  name,
  id,
  placeholder,
  value,
  onChangeInput,
}: {
  type: "text" | "password";
  name: string;
  id: string;
  placeholder: string;
  value: string;
  onChangeInput: Function;
}) {
  return (
    <div className="pb-4">
      <input
        name={name}
        placeholder={placeholder}
        id={id}
        // value={value}
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
        className="w-full border border-gray-900 h-9 rounded-md px-2"
      />
    </div>
  );
}
