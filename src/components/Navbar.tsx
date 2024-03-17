import Image from "next/image";
import LanguagesController from "./controller/LanguagesController";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-10">
            <div className="flex-1">
                <Image
                    src={"/assets/logo.png"}
                    alt="logo"
                    width={50}
                    height={50}
                />
                <a className="btn btn-ghost text-xl text-[#01A54F]">
                    Estungkara
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal text-base gap-5 font-bold">
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>About us</a>
                    </li>
                    <li>
                        <a>Works</a>
                    </li>
                    <li>
                        <LanguagesController />
                    </li>
                </ul>
            </div>
        </div>
    );
}
