import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState("home");

    const sections = ["home", "about", "skills", "projects", "experience", "contact"];

    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            setActive(id);
        }
        setShowMenu(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, 
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const navBtnClass = (id) =>
        `cursor-pointer hover:text-purple transition ${active === id ? "text-purple" : "text-white/80"
        }`;

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
                    <div className='w-4 h-4 bg-purple rounded-full'></div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-10">
                    <button onClick={() => handleScroll("home")} className={navBtnClass("home")}>
                        Home
                    </button>
                    <button onClick={() => handleScroll("about")} className={navBtnClass("about")}>
                        About
                    </button>
                    <button onClick={() => handleScroll("skills")} className={navBtnClass("skills")}>
                        Skills
                    </button>
                    <button onClick={() => handleScroll("projects")} className={navBtnClass("projects")}>
                        Projects
                    </button>
                    <button onClick={() => handleScroll("experience")} className={navBtnClass("experience")}>
                        Experience
                    </button>
                    <button onClick={() => handleScroll("contact")} className={navBtnClass("contact")}>
                        Contact
                    </button>
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
                    <button onClick={() => handleScroll("home")} className={navBtnClass("home")}>
                        Home
                    </button>
                    <button onClick={() => handleScroll("about")} className={navBtnClass("about")}>
                        About
                    </button>
                    <button onClick={() => handleScroll("skills")} className={navBtnClass("skills")}>
                        Skills
                    </button>
                    <button onClick={() => handleScroll("projects")} className={navBtnClass("projects")}>
                        Projects
                    </button>
                    <button onClick={() => handleScroll("experience")} className={navBtnClass("experience")}>
                        Experience
                    </button>
                    <button onClick={() => handleScroll("contact")} className={navBtnClass("contact")}>
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
