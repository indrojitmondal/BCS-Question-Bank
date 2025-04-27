import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";
const Navbar = () => {
   
    const options = <>
        <li>
            <NavLink
                to="/bangla"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                বাংলা ভাষা ও সাহিত্য
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/english"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                English Language and Literature
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/bangladesh"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                বাংলাদেশ বিষয়াবলি
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/international"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                আন্তর্জাতিক বিষয়াবলি
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/vugol"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                ভূগোল, পরিবেশ ও দুর্যোগ ব্যবস্থাপনা
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/science"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                সাধারণ বিজ্ঞান
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/computer"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                কম্পিউটার ও তথ্য প্রযুক্তি
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/ethics"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                নৈতিকতা, মূল্যবোধ ও সু-শাসন
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/mentalAbility"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                মানসিক দক্ষতা
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/analiticalAbility"
                className={({ isActive }) => isActive ? "font-bold" : ""}
            >
                গাণিতিক যুক্তি
            </NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                             */}
                            <AiOutlineMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {options}
                        </ul>
                    </div>
                 
                    <Link to={'/'} className="btn btn-ghost text-xl">  BCS Question Bank </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>

          
        </div>
    );
};

export default Navbar;