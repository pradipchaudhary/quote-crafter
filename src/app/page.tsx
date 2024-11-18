import QuoteGenerator from "../components/QuoteGenerator";

export default function Home() {
    return (
        <>
            {/* Header  */}
            <header className="text-center py-8 text-gray-300">
                <div className="max-w-[1080px] mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl">QuoteCrafter</h1>
                        <nav>
                            <ul className="flex gap-10">
                                <li>
                                    <a href="#">Price</a>
                                </li>
                                <li>
                                    <a href="#">Login</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            {/* Hero Section  */}

            <section className="text-white py-20 h-[88vh] flex justify-center items-center">
                <div className="container mx-auto px-6 text-center">
                    {/* <!-- Hero Title --> */}
                    <h1 className="text-5xl font-extrabold mb-4">
                        # <span className="text-yellow-400">QuoteCrafter</span>
                    </h1>

                    {/* <!-- Hero Tagline --> */}
                    <h2 className="text-3xl font-semibold mb-6">
                        Crafting inspiration, one quote at a time.
                    </h2>

                    {/* <!-- Horizontal Line --> */}
                    <hr className="w-32 mx-auto border-t-4 border-white mb-8" />

                    {/* <!-- Project Description --> */}
                    <div className="text-lg max-w-3xl mx-auto">
                        <p className="text-gray-400">
                            <strong>QuoteCrafter</strong> is an innovative web
                            application designed to generate motivational quotes
                            and transform them into visually stunning graphics.
                            The platform combines automation, design, and
                            personalization to create professional-grade quote
                            images featuring beautiful backgrounds and optional
                            author portraits.
                        </p>
                    </div>
                </div>
            </section>

            {/* <QuoteGenerator /> */}
        </>
    );
}
