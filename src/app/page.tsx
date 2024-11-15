import QuoteGenerator from "../components/QuoteGenerator";

export default function Home() {
    return (
        <>
            {/* Header  */}
            <header className="text-center py-6 ">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    QuoteCrafter
                </h1>
                <h4 className="text-lg font-medium text-gray-300 mt-2">
                    Crafting inspiration, one quote at a time.
                </h4>
            </header>
            <QuoteGenerator />
        </>
    );
}
