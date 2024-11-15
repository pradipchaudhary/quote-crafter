import type { NextApiRequest, NextApiResponse } from "next";

// Define the structure of the request body
interface QuoteRequestBody {
    category: string;
}

// Define the structure of the response body
interface QuoteResponse {
    quote: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<QuoteResponse | { error: string }>
) {
    const { category }: QuoteRequestBody = req.body;

    // Define the available categories for validation
    const validCategories = [
        "Personal growth",
        "Success",
        "Hard work",
        "Attitude",
        "Change",
        "Goals",
        "Darkness",
        "Hate",
    ];

    // Validate category input
    if (category && !validCategories.includes(category)) {
        return res.status(400).json({ error: "Invalid category" });
    }

    try {
        // Example: OpenAI API integration or another API
        const apiResponse = await fetch("https://api.example.com/quote", {
            method: "POST",
            headers: {
                Authorization: `Bearer YOUR_API_KEY`, // Replace with your actual API key
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                prompt: category
                    ? `Generate an inspiring quote about ${category}.`
                    : "Generate a random inspiring quote.",
            }),
        });

        if (!apiResponse.ok) {
            throw new Error("Failed to fetch quote from external API");
        }

        const apiData = await apiResponse.json();

        // Safely access the quote or fallback to a default message
        const quote =
            apiData.choices?.[0]?.text?.trim() ||
            "AI could not generate a quote.";

        res.status(200).json({ quote });
    } catch (error) {
        console.error("Error fetching quote:", error);
        res.status(500).json({ error: "Failed to generate quote." });
    }
}
