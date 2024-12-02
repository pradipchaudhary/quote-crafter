"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
    FiZap,
    FiLayout,
    FiShare2,
    FiCommand,
    FiGrid,
    FiDownload,
} from "react-icons/fi";

interface Feature {
    title: string;
    description: string;
    icon: IconType;
    gradient: string;
}

const features: Feature[] = [
    {
        title: "AI-Powered Generation",
        description:
            "Create unique and inspiring quotes instantly with our advanced AI technology.",
        icon: FiZap,
        gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
        title: "Smart Templates",
        description:
            "Choose from our collection of professionally designed layouts and styles.",
        icon: FiLayout,
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "Quick Export",
        description:
            "Export and share your quotes directly to any social media platform.",
        icon: FiShare2,
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        title: "Advanced Controls",
        description:
            "Fine-tune every aspect of your quotes with intuitive controls.",
        icon: FiCommand,
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Template Library",
        description:
            "Access a growing library of premium templates and styles.",
        icon: FiGrid,
        gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
        title: "Batch Processing",
        description:
            "Generate and export multiple quotes simultaneously for efficiency.",
        icon: FiDownload,
        gradient: "from-rose-500/20 to-red-500/20",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="relative py-24 -mt-24 overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/90 to-transparent" />

                {/* Animated Orbs */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000" />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
            </div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        Features
                    </motion.span>

                    <motion.h2
                        className="text-4xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Everything You Need
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Create stunning quote images with our powerful features
                    </motion.p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative p-8 rounded-xl border border-gray-800/20 hover:border-yellow-500/20 bg-black/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 mb-6 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                >
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
