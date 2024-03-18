import Image from "next/image";
import LanguagesController from "../controller/languages.controller";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <div className="relative h-10 w-10">
                    <Image src={"/assets/logo.png"} alt="logo" fill={true} />
                </div>
                <Link
                    href="/#hero"
                    className="btn btn-ghost text-xl font-bold text-primary"
                >
                    Estungkara
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal gap-5 text-base">
                    <li>
                        <Link href={"#"}>Home</Link>
                    </li>
                    <li>
                        <Link href="/#hero">About us</Link>
                    </li>
                    <li>
                        <Link href={"#"}>Works</Link>
                    </li>
                    <li>
                        <LanguagesController />
                    </li>
                </ul>
            </div>
        </div>
    );
}
