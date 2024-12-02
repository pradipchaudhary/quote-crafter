"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#how-it-works", label: "How It Works" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

    useEffect(() => {
        let lastScroll = window.scrollY;

        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const direction = currentScroll > lastScroll ? "down" : "up";

            if (
                direction !== scrollDirection &&
                Math.abs(currentScroll - lastScroll) > 10
            ) {
                setScrollDirection(direction);
            }

            setIsScrolled(currentScroll > 50);
            setIsVisible(direction === "up" || currentScroll < 50);

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollDirection]);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop =
                element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: offsetTop - 80,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.header
            initial={false}
            animate={{
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                duration: 0.4,
                ease: "easeInOut",
            }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <nav
                className={`w-full transition-all duration-500 ${
                    isScrolled
                        ? "bg-black/80 backdrop-blur-sm border-b border-gray-800 shadow-lg py-3"
                        : "bg-transparent py-6"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                    isScrolled
                                        ? "bg-gradient-to-br from-yellow-400 to-yellow-600"
                                        : "bg-white/10 group-hover:bg-white/20"
                                }`}
                            >
                                <span
                                    className={`font-bold transition-colors duration-300 ${
                                        isScrolled ? "text-black" : "text-white"
                                    }`}
                                >
                                    Q
                                </span>
                            </motion.div>
                            <span className="text-xl font-bold text-white">
                                QuoteCrafter
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) =>
                                        scrollToSection(e, link.href)
                                    }
                                    whileHover={{ y: -2 }}
                                    className={`transition-all duration-300 relative group ${
                                        isScrolled
                                            ? "text-gray-300 hover:text-white"
                                            : "text-white/70 hover:text-white"
                                    }`}
                                >
                                    {link.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                                </motion.a>
                            ))}
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    href="/generate"
                                    className={`px-6 py-2.5 rounded-lg transition-all duration-300 ${
                                        isScrolled
                                            ? "bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                                >
                                    Create Quote
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
}
