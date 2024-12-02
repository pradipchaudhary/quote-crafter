"use client";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

interface PricingPlan {
    name: string;
    description: string;
    price: number;
    popular: boolean;
    features: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        name: "Basic",
        description: "Perfect for getting started",
        price: 0,
        popular: false,
        features: [
            "100 quotes per month",
            "5 templates",
            "Basic customization",
            "Standard export formats",
            "Email support",
        ],
    },
    {
        name: "Pro",
        description: "Best for professionals",
        price: 29,
        popular: true,
        features: [
            "Unlimited quotes",
            "All templates",
            "Advanced customization",
            "All export formats",
            "Priority support",
            "Custom backgrounds",
            "Remove watermark",
        ],
    },
    {
        name: "Enterprise",
        description: "For large teams",
        price: 99,
        popular: false,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "API access",
            "Custom templates",
            "Dedicated support",
            "Analytics dashboard",
            "Custom branding",
        ],
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
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
                        Simple Pricing
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Choose the perfect plan for your needs
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative glass p-8 rounded-xl ${
                                plan.popular
                                    ? "border-2 border-yellow-500 scale-105"
                                    : "border border-gray-800"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-400">
                                    {plan.description}
                                </p>
                                <div className="mt-6">
                                    <span className="text-5xl font-bold text-white">
                                        ${plan.price}
                                    </span>
                                    <span className="text-gray-400 ml-2">
                                        /month
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <div
                                        key={featureIndex}
                                        className="flex items-center text-gray-300"
                                    >
                                        <FiCheck className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-3 rounded-lg font-medium transition-all ${
                                    plan.popular
                                        ? "bg-yellow-500 text-black hover:bg-yellow-400"
                                        : "border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
                                }`}
                            >
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
