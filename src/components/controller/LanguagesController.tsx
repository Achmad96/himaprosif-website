"use client";

import { useState, MouseEvent, useRef } from "react";

export default function LanguagesController() {
    const [languages, setLanguages] = useState<string | null>("EN");
    const ref = useRef<HTMLDetailsElement | null>(null);
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        setLanguages(e.currentTarget.textContent);
        ref.current?.removeAttribute("open");
    };
    return (
        <details ref={ref}>
            <summary>{languages}</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
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
