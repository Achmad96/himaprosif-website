import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Himaprosif - Estungkara",
    description: "himaprosif's website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
