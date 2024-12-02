"use client";
import { motion } from "framer-motion";
import { FiLayout, FiZap, FiSliders, FiShare2 } from "react-icons/fi";

const steps = [
    {
        title: "Choose Template",
        description:
            "Select from our curated collection of professional templates.",
        icon: FiLayout,
        color: "blue",
    },
    {
        title: "Generate Quote",
        description: "Use AI to create the perfect quote or input your own.",
        icon: FiZap,
        color: "yellow",
    },
    {
        title: "Customize Design",
        description: "Fine-tune colors, fonts, and layout to match your style.",
        icon: FiSliders,
        color: "purple",
    },
    {
        title: "Share & Export",
        description: "Download or share directly to your favorite platforms.",
        icon: FiShare2,
        color: "green",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/0" />

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Create stunning quote images in four simple steps
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-center group">
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                                    <span className="text-sm font-bold text-gray-400">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-${step.color}-500/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                                >
                                    <step.icon
                                        className={`w-8 h-8 text-${step.color}-500`}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {step.description}
                                </p>

                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-20 left-[60%] w-[calc(100%-20px)] h-[2px] bg-gradient-to-r from-gray-800 to-transparent" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
