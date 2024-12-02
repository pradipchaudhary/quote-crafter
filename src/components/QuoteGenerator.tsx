"use client";
import { useState } from "react";
import Image from "next/image";

interface Quote {
    text: string;
    author: string;
    background?: string;
}

export default function QuoteGenerator() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generateQuote = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await fetch("/api/generate-quote");
            const data = await response.json();

            if (!response.ok)
                throw new Error(data.message || "Failed to generate quote");

            setQuote(data);
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Failed to generate quote"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-yellow-500">
                            Quote Generator
                        </h2>
                        <button
                            onClick={generateQuote}
                            disabled={loading}
                            className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 
                                     transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Generating..." : "Generate Quote"}
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {quote && (
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-700">
                            {quote.background && (
                                <Image
                                    src={quote.background}
                                    alt="Quote background"
                                    fill
                                    className="object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <p className="text-2xl font-serif mb-4 text-white">
                                        &ldquo;{quote.text}&rdquo;
                                    </p>
                                    <p className="text-lg text-yellow-500">
                                        - {quote.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {quote && (
                        <div className="mt-6 flex justify-end gap-4">
                            <button
                                onClick={() => {
                                    /* TODO: Implement download */
                                }}
                                className="px-4 py-2 border border-yellow-500 text-yellow-500 
                                         rounded-lg hover:bg-yellow-500/10 transition-colors"
                            >
                                Download
                            </button>
                            <button
                                onClick={() => {
                                    /* TODO: Implement share */
                                }}
                                className="px-4 py-2 border border-yellow-500 text-yellow-500 
                                         rounded-lg hover:bg-yellow-500/10 transition-colors"
                            >
                                Share
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
