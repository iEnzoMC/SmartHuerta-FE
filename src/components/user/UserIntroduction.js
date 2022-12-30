import React from "react";
import { toast, Toaster } from "react-hot-toast";

export const UserIntroduction = () => {
  toast("Preciona doble click en la pantalla para registrar tu casa", {
    duration: Infinity,
    position: "top-center",
    // Styling
    style: {},
    className: "",
    icon: "🏠",
    iconTheme: {
      primary: "#000",
      secondary: "#fff",
    },
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
