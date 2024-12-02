"use client";
import Link from "next/link";
import { FiZap, FiDownload } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="min-h-screen pt-16 relative">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-purple-500/10 blur-3xl animate-pulse-slow" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>
            <div className="relative pt-32 pb-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center justify-center text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 animate-bounce-slow">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                            <span className="text-yellow-500 text-sm font-medium">
                                AI-Powered Quote Generation
                            </span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white max-w-4xl">
                            <div className="space-y-3">
                                <span className="block">Craft Inspiring</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                                    Visual Quotes
                                </span>
                                <span className="block">with AI</span>
                            </div>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                            Transform your ideas into stunning visual quotes
                            using our AI-powered platform. Create, customize,
                            and share beautiful quote images in seconds.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/generate"
                                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-3 rounded-lg hover:from-yellow-400 hover:to-yellow-500 transition-all inline-flex items-center justify-center gap-2 group"
                            >
                                Start Creating
                                <FiZap className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <button className="border border-yellow-500/50 text-yellow-500 px-8 py-3 rounded-lg hover:bg-yellow-500/10 transition-all inline-flex items-center justify-center gap-2">
                                Watch Demo
                                <FiDownload className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
