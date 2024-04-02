import React from "react";
import { Button } from "../ui/button";

const routes = [
  {
    name: "Find Work",
    id: "find-work",
  },
  {
    name: "Find Talent",
    id: "find-talent",
  },
  {
    name: "Articles",
    id: "articles",
  },
  {
    name: "About Us",
    id: "about-us",
  },
  {
    name: "Contact Us",
    id: "contact-us",
  },
];

export default function NavbarRoutes() {
  return (
    <div className="lg:flex gap-1 hidden items-center">
      {routes.map((route) => (
        <Button
          variant="link"
          key={route.id}
          className="text-white font-medium text-base"
        >
          {route.name}
        </Button>
      ))}
    </div>
  );
}
