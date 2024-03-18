import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { ReactElement } from "react";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Himaprosif - Estungkara",
    description: "himaprosif's website",
};

export async function generateStaticParams() {
    return [{ lang: "en-US" }, { lang: "de" }];
}

export default function Root({
    children,
    params,
}: {
    children: ReactElement;
    params: Params;
}) {
    console.log(params);

    return (
        <html lang={params.lang}>
            <body className={poppins.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
