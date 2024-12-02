import { NextResponse } from "next/server";

const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        background: "https://source.unsplash.com/random/1200x630/?inspiration",
    },
    {
        text: "Innovation distinguishes between a leader and a follower.",
        author: "Steve Jobs",
        background: "https://source.unsplash.com/random/1200x630/?leadership",
    },
    {
        text: "Stay hungry, stay foolish.",
        author: "Steve Jobs",
        background: "https://source.unsplash.com/random/1200x630/?motivation",
    },
];

export async function GET() {
    try {
        // Randomly select a quote
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        return NextResponse.json(randomQuote);
    } catch {
        return NextResponse.json(
            { message: "Failed to generate quote" },
            { status: 500 }
        );
    }
}
