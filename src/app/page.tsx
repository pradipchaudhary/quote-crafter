"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuoteSlider from "@/components/QuoteSlider";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <Header />
            <Hero />
            <QuoteSlider />
            <Features />
            <HowItWorks />
            <Pricing />
            <Footer />
        </div>
    );
}
