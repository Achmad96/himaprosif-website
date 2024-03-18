import Image from "next/image";
import LanguagesController from "./controller/languages.controller";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <div className="relative h-10 w-10">
                    <Image src={"/assets/logo.png"} alt="logo" fill={true} />
                </div>
                <a className="btn btn-ghost text-xl font-bold text-primary">
                    Estungkara
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-5 text-base">
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
