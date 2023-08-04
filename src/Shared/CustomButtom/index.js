import classNames from "classnames";
import React from "react";

const CustomButton = ({
  children,
  color = "primary",
  rounded,
  variant = "text",
}) => {
  return (
    <button
      className={classNames(
        "p-2  text-white px-5",
        color === "primary" && "bg-blue-500",
        color === "success" && "bg-green-500",
        color === "secondary" && "bg-purple-500",
        color === "error" && "bg-red-500",
        rounded && "rounded",
        variant === "text" && "bg-transparent text-black",
        variant === "contained" && "",
        variant === "outlined" &&
          "bg-transparent border-2 border-gray-400 text-black"
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
