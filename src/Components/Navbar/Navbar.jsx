import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Header } from "../Header/Header";

export const Navbar = () => {
  const links = [
    {
      path: "/",
      title: "HOME",
    },
  ];
  return (
    <div>
      <Header />
    </div>
  );
};
