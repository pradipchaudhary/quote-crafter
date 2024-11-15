"use client";
import { useState } from "react";

// Update the Category type to include the new categories
type Category =
    | "Personal growth"
    | "Success"
    | "Hard work"
    | "Attitude"
    | "Change"
    | "Goals"
    | "Darkness"
    | "Hate"
    | "Random";

export default function QuoteGenerator() {
    const [category, setCategory] = useState<Category | "">(""); // Updated to allow empty string
    const [quote, setQuote] = useState<string>(""); // Generated quote
    const [loading, setLoading] = useState<boolean>(false); // Loading state

    // Updated Categories list
    const categories: Category[] = [
        "Personal growth",
        "Success",
        "Hard work",
        "Attitude",
        "Change",
        "Goals",
        "Darkness",
        "Hate",
        "Random",
    ];

    // Fetch Quote Function
    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/generate-quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ category }),
            });

            const data = await response.json();
            setQuote(data.quote || "No quote found!");
        } catch (error) {
            console.error("Error fetching quote:", error);
            setQuote("Failed to fetch quote.");
        }
        setLoading(false);
    };

    return (
        <section className="w-full h-auto py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
                AI Quote Generator
            </h2>
            <p className="text-gray-300 text-lg mb-8">
                Choose a category or let AI surprise you!
            </p>

            <div className="max-w-md mx-auto">
                {/* Category Dropdown */}
                <select
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-black text-white"
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value as Category | "")
                    } // Ensured type safety here
                >
                    <option value="" className="text-gray-400">
                        Random
                    </option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat} className="text-white">
                            {cat}
                        </option>
                    ))}
                </select>

                {/* Generate Button */}
                <button
                    onClick={fetchQuote}
                    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Quote"}
                </button>

                {/* Quote Display */}
                {quote && (
                    <div className="mt-8 p-4 border border-gray-300 rounded-lg bg-white">
                        <p className="text-gray-800 italic">{quote}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
