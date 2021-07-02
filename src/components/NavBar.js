import React from "react";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Badge } from "@material-ui/core";
import { ShoppingBasket } from "@material-ui/icons";

const NavBar = ({ totalItems }) => {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-blue-300 bg-gray-800"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold title tracking-widest"
          >
            Stern Looks
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-300 bg-gray-800"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest"
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            activeClassName="text-blue-300 bg-gray-800"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/shop"
            activeClassName="text-blue-300 bg-gray-800"
            className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest"
          >
            Merchandise
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-4">
          <SocialIcon
            url="https://www.instagram.com/sternlooks/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <IconButton
            component={NavLink}
            to="/cart"
            aria-label="Show Cart Items"
            style={{ height: 35, width: 35 }}
          >
            <Badge badgeContent={totalItems}>
              <ShoppingBasket
                to="/cart"
                color="secondary"
                class="material-icons-round"
                style={{ height: 35, width: 35 }}
              />
            </Badge>
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
