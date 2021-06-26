import React from "react";
import { Menubar } from "primereact/menubar";

function Navbar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      url: "/",
    },
    {
      label: "Destinations",
      icon: "pi pi-fw pi-globe",
      items: [
        {
          label: "Malaysia",
        },
        {
          label: "Singapore",
        },
        {
          label: "Thailand",
        },
        {
          label: "South Korea",
        },
      ],
    },
    {
      label: "About",
      icon: "pi pi-fw pi-send",
      url: "about",
    },
    {
      label: "Shop",
      icon: "pi pi-fw pi-shopping-cart",
      url: "shop",
    },
  ];
  return (
    <>
      <Menubar
        className="navbar"
        start={
          <img src="/assets/images/logo.png" width={120} alt="freecity logo" />
        }
        model={items}
      />
      <style jsx global>{`
        .navbar {
          padding: 20px;
          border: none;
          max-width: var(--max-width);
          margin: 0 auto;
          background-color: var(--theme-200);
          display: flex;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
}

export default Navbar;
