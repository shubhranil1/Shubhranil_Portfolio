import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setShowMenu(false);
    };

    return (
        <nav className="fixed w-full z-50 bg-dark-100/90 backdrop:blur-sm py-4 px-8 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <button
                        onClick={() => handleScroll("home")}
                        className="text-3xl font-bold text-white cursor-pointer"
                    >
                        Shubhranil <span className="text-purple">Chowdhury</span>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <button onClick={() => handleScroll("home")} className="text-white/80 hover:text-purple">Home</button>
                    <button onClick={() => handleScroll("about")} className="text-white/80 hover:text-purple">About</button>
                    <button onClick={() => handleScroll("skills")} className="text-white/80 hover:text-purple">Skills</button>
                    <button onClick={() => handleScroll("projects")} className="text-white/80 hover:text-purple">Projects</button>
                    <button onClick={() => handleScroll("experience")} className="text-white/80 hover:text-purple">Experience</button>
                    <button onClick={() => handleScroll("contact")} className="text-white/80 hover:text-purple">Contact</button>
                </div>

                {/* Mobile Button */}
                <div className="md:hidden">
                    {showMenu ? (
                        <FaXmark onClick={() => setShowMenu(false)} className="text-2xl cursor-pointer" />
                    ) : (
                        <FaBars onClick={() => setShowMenu(true)} className="text-2xl cursor-pointer" />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {showMenu && (
                <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center">
                    <button onClick={() => handleScroll("home")} className="text-white/80 hover:text-purple">Home</button>
                    <button onClick={() => handleScroll("about")} className="text-white/80 hover:text-purple">About</button>
                    <button onClick={() => handleScroll("skills")} className="text-white/80 hover:text-purple">Skills</button>
                    <button onClick={() => handleScroll("projects")} className="text-white/80 hover:text-purple">Projects</button>
                    <button onClick={() => handleScroll("experience")} className="text-white/80 hover:text-purple">Experience</button>
                    <button onClick={() => handleScroll("contact")} className="text-white/80 hover:text-purple">Contact</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
