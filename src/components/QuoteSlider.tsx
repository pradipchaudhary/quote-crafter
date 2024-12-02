"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoQuote } from "react-icons/go";

interface Quote {
    text: string;
    author: string;
    role: string;
    image: string;
}

const previewQuotes: Quote[] = [
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        role: "Former Prime Minister",
        image: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=400&h=400&fit=crop",
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        role: "Co-founder, Apple Inc.",
        image: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=400&h=400&fit=crop",
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        role: "26th U.S. President",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop",
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        role: "Former First Lady",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    },
];

export default function QuoteSlider() {
    return (
        <section className="relative h-64">
            <div className="relative max-w-[100vw] overflow-hidden h-full flex items-center">
                <div className="flex gap-6 animate-slide px-4">
                    {[...previewQuotes, ...previewQuotes].map((quote, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-shrink-0 w-[400px] group"
                        >
                            <div className="relative h-full">
                                <div className="relative p-6 rounded-xl border border-gray-800/20 hover:border-yellow-500/20 transition-all duration-300">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-500/10 rounded-full flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                                        <GoQuote className="w-3 h-3 text-yellow-500" />
                                    </div>

                                    {/* Quote Text */}
                                    <div className="relative">
                                        <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors line-clamp-3 italic">
                                            &ldquo;{quote.text}&rdquo;
                                        </p>
                                    </div>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800/20">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:ring-2 ring-yellow-500/20 transition-all">
                                            <Image
                                                src={quote.image}
                                                alt={quote.author}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-yellow-500 text-sm font-medium group-hover:text-yellow-400 transition-colors">
                                                {quote.author}
                                            </p>
                                            <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                                                {quote.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
