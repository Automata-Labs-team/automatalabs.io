import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Automata Labs",
    description: "Open Source AI tools for everyone",
    icons: {
        icon: `/icon.svg`,
    }
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Analytics />
            <body
                className={`antialiased ${space.className}`}
            >
                {children}
            </body>
        </html>
    );
}
