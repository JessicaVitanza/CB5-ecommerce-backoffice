import {
    GrHomeRounded,
    GrCatalog,
    GrGamepad,
    GrUser,
    GrCart
  } from "react-icons/gr";
  
  export const navBarLinks = [
    {
      id: 1,
      label: "Home",
      route: "home",
      icon: <GrHomeRounded />,
    },
    {
      id: 2,
      label: "Categories",
      route: "categories",
      icon: <GrCatalog />,
    },
    {
      id: 3,
      label: "Prodocuts",
      route: "products",
      icon: <GrGamepad />,
    },
    {
      id: 4,
      label: "Orders",
      route: "orders",
      icon: <GrCart />,
    },
    {
      id: 5,
      label: "User",
      route: "users",
      icon: <GrUser />,
    },
  ];