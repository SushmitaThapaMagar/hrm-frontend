import React from "react";

export default function Button({
  name,
  id,
  value = "submit",
  buttonClickEvent,
  buttonType,
}: {
  name: string;
  id: string;
  value?: string;
  buttonClickEvent: Function;
  buttonType: "primary" | "secondary" | "danger";
}) {
  let buttonClass = "";
  switch (buttonType) {
    case "primary":
      buttonClass = "bg-blue-500 text-white/90";
      break;
    case "secondary":
      buttonClass = " bg-slate-100 text-black/90";
      break;
    case "danger":
      buttonClass = " bg-red-400 text-white/90";
      break;
    default:
      buttonClass = " bg-gray-200 text-white/90";
      break;
  }

  return (
    <div className="flex w-full grid-flow-col grid-cols-3 place-content-center">
      <input
        type="button"
        value={value}
        onClick={() => buttonClickEvent()}
        className={`py-1 px-3 rounded-md hover:cursor-pointer ${buttonClass}`}
      />
    </div>
  );
}
