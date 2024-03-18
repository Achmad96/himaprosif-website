"use client";

import { useRouter } from "next/navigation";
import { useState, MouseEvent, useRef } from "react";

export default function LanguagesController() {
    const [languages, setLanguages] = useState<string | null>("EN");
    const ref = useRef<HTMLDetailsElement | null>(null);
    const router = useRouter();
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        setLanguages(e.currentTarget.textContent);
        ref.current?.removeAttribute("open");
        router.push(e.currentTarget.textContent?.toLowerCase() || "en");
    };
    return (
        <details ref={ref}>
            <summary>{languages}</summary>
            <ul className="rounded-t-none bg-base-100 p-2">
                <li>
                    <a onClick={handleClick}>EN</a>
                </li>
                <li>
                    <a onClick={handleClick}>ID</a>
                </li>
            </ul>
        </details>
    );
}
