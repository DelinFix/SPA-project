import React from "react";

import {NavLink} from "react-router-dom";

const navs = [
    {path : '/', content : 'Home'},
    {path : '/about', content : 'About'},
    {path : '/contact', content : 'Contact'}
]

const Nav = () => (
    <nav className="bg-purple-600 text-white p-4 shadow">
        <ul className="flex space-x-6 justify-center">
            {navs.map((navItem, index) => (
                <li key={index}>
                    <NavLink to={navItem.path} className={(navData) => navData.isActive ? "border-b-2 border-white" : "" }>
                        {navItem.content}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
)

export default Nav;