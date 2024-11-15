import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "QuoteCrafter - Crafting Inspiration, One Quote at a Time",
    description:
        "Discover inspirational quotes and craft your own. QuoteCrafter is your go-to source for daily motivation.",
    openGraph: {
        type: "website",
        url: "https://www.quotecrafter.com/",
        title: "QuoteCrafter - Crafting Inspiration, One Quote at a Time",
        description:
            "Discover inspirational quotes and craft your own. QuoteCrafter is your go-to source for daily motivation.",
        images: [
            {
                url: "https://www.quotecrafter.com/images/meta-image.png",
                width: 1200,
                height: 630,
                alt: "QuoteCrafter Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@YourTwitterHandle",
        title: "QuoteCrafter - Crafting Inspiration, One Quote at a Time",
        description:
            "Discover inspirational quotes and craft your own. QuoteCrafter is your go-to source for daily motivation.",
        images: ["https://www.quotecrafter.com/images/meta-image.png"],
    },
    viewport: "width=device-width, initial-scale=1.0",
    keywords: [
        "quotes",
        "inspiration",
        "QuoteCrafter",
        "motivational quotes",
        "craft quotes",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
