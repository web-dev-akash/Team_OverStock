import React from "react";
import { Link, Navigate } from "react-router-dom";

export const Navbar = () => {
  const links = [
    {
      path: "/",
      title: "HOME",
    },
  ];
  return (
    <div
      style={{
        textAlign: "left",
        margin: "40px 40px 0 40px",
        border: "1px solid",
        width: "fit-content",
        padding: "5px 10px",
      }}
    >
      {links.map((item) => (
        <div key={item.path}>
          <Link
            to={item.path}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
            }}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};
