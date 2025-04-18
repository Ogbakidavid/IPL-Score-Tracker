import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
    { name: "Home", path: "/live-score"},
    { name: "Schedule", path: "/schedule"},
    { name: "Teams", path: "/teams"},
    { name: "Stats", path: "/stats"},
    { name: "Player", path: "/news"},
    ];

    const toggleMenu=() => {
    setIsOpen(!isOpen)};

    return(
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-[40px]">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="h-[18px] w-[18px] bg-blue-400 rounded-full flex items-center justify-center p-3">
                            <span className="text-[12px] text-white font-bold">IPL</span>
                        </div>
                        <span className="text-black font-bold text-sm">Score Tracker</span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-6">
                        {links.map((items, index) => (
                            <Link key={index} to={links.path} className="text-sm font-medium transition-color hover:text-blue-600">
                                {items.name}
                            </Link>
                        ))}
                    </div>
                    {/* Mobile  */}
                    <button className="md:hidden p-2 rounded-sm text-gray-700 hover:bg-gray-100"
                    onClick={toggleMenu}>
                        {isOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>

                {/* Mobile navLinks  */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t">
                        <div className="flex flex-col space-y-8">
                            {links.map((items, index) => (
                                <Link 
                                to={links.path} 
                                key={index} 
                                className={`text-sm text-black font-medium transition-colors hover:text-blue-600`} 
                                >
                                    {items.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;