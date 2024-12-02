"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiMail,
    FiHeart,
} from "react-icons/fi";

const footerLinks = [
    {
        title: "Product",
        links: [
            { name: "Features", href: "#features" },
            { name: "How it Works", href: "#how-it-works" },
            { name: "Pricing", href: "#pricing" },
            { name: "Templates", href: "#templates" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Documentation", href: "/docs" },
            { name: "Blog", href: "/blog" },
            { name: "Support", href: "/support" },
            { name: "API", href: "/api" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
        ],
    },
];

const socialLinks = [
    { icon: FiGithub, href: "https://github.com", label: "GitHub" },
    { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: FiMail, href: "mailto:hello@quotecrafter.com", label: "Email" },
];

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 border-t border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="inline-block group">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <span className="font-bold text-black">
                                        Q
                                    </span>
                                </div>
                                <span className="text-xl font-bold text-white">
                                    QuoteCrafter
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Crafting inspiration, one quote at a time. Create
                            beautiful, shareable quotes in seconds.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500/20 hover:text-yellow-500 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-white mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-yellow-500 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>© 2024 QuoteCrafter.</span>
                            <span className="hidden md:inline">·</span>
                            <span className="flex items-center gap-1">
                                Made with <FiHeart className="text-red-500" />{" "}
                                by Pradip Chaudhary
                            </span>
                        </div>
                        <div className="flex gap-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-400 hover:text-yellow-500 transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
