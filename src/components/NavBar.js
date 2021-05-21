import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to="/" 
                        exact
                        activeClassName="text-blue-300 bg-gray-800"
                        className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest">
                        Stern Looks
                    </NavLink>
                    <NavLink 
                        to="/about"
                        activeClassName="text-blue-300 bg-gray-800"
                        className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest">
                        About
                    </NavLink>
                    <NavLink 
                        to="/posts"
                        activeClassName="text-blue-300 bg-gray-800"
                        className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink 
                        to="/projects"
                        activeClassName="text-blue-300 bg-gray-800"
                        className="inflex-flex items-center py-3 px-3 my-4 rounded text-white hover:text-blue-500 text-xl font-bold cursive tracking-widest">
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-4">
                    <SocialIcon url="https://www.instagram.com/sternlooks/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.instagram.com/stern_looks/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar
