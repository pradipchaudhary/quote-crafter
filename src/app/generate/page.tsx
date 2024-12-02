"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiShare2, FiRefreshCw } from "react-icons/fi";
import Link from "next/link";

interface Quote {
    text: string;
    author: string;
    background?: string;
}

export default function GeneratePage() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(false);

    const generateQuote = async () => {
        try {
            setLoading(true);
            const response = await fetch("/api/generate-quote");
            const data = await response.json();
            setQuote(data);
        } catch (error) {
            console.error("Failed to generate quote:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            {/* Header */}
            <div className="fixed top-0 w-full bg-black/30 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                            <span className="font-bold text-black">Q</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                            QuoteCrafter
                        </span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="pt-32 px-4 container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Generate Your Quote
                    </h1>
                    <p className="text-gray-400">
                        Create beautiful, shareable quotes in seconds
                    </p>
                </motion.div>

                {/* Quote Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-gray-800">
                        {quote ? (
                            <div className="absolute inset-0 flex items-center justify-center p-12 bg-black/40">
                                <div className="text-center">
                                    <p className="text-3xl font-serif mb-6 text-white">
                                        &ldquo;{quote.text}&rdquo;
                                    </p>
                                    <p className="text-xl text-yellow-500">
                                        - {quote.author}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <p className="text-gray-400">
                                    Your quote will appear here
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-4"
                >
                    {/* Generate Button */}
                    <button
                        onClick={generateQuote}
                        disabled={loading}
                        className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black rounded-lg font-semibold hover:from-yellow-400 hover:to-yellow-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <FiRefreshCw className="w-5 h-5 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <FiRefreshCw className="w-5 h-5" />
                                Generate Quote
                            </>
                        )}
                    </button>

                    {/* Action Buttons */}
                    {quote && (
                        <div className="flex gap-4">
                            <button className="flex-1 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2">
                                <FiDownload className="w-5 h-5" />
                                Download
                            </button>
                            <button className="flex-1 py-3 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2">
                                <FiShare2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
