import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-blue-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
                        Stern Looks
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-blue-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
                        About
                    </NavLink>
                    <NavLink 
                        to="/posts"
                        activeClassName="text-blue-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/projects"
                        activeClassName="text-blue-300"
                        className="inflex-flex items-center py-6 px-3 mr-4 text-white hover:text-blue-500 text-4xl font-bold cursive tracking-widest">
                        Projects
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
