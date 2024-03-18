import Link from "next/link";
import {
    FaXTwitter,
    FaInstagram,
    FaSpotify,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa6";

export default function SocialMedia() {
    return (
        <section className="flex h-fit w-fit flex-col gap-5">
            <div className="flex flex-col font-extrabold">
                <h3 className="text-3xl">HIMAPROSIF</h3>
                <p>KABINET ESTUNGKARA 2024</p>
            </div>
            <div className="flex flex-col gap-3">
                <p>Follow us</p>
                <div className="flex gap-5 pb-10">
                    <Link href={"https://www.instagram.com/himaprosifuinsa/"}>
                        <FaInstagram className="h-10 w-10" />
                    </Link>
                    <Link href={"https://twitter.com/himaprosif"}>
                        <FaXTwitter className="h-10 w-10" />
                    </Link>
                    <Link href={"https://www.tiktok.com/@himaprosif"}>
                        <FaTiktok className="h-10 w-10" />
                    </Link>
                    <Link
                        href={
                            "https://open.spotify.com/show/2xd0mxvjK042bUcIwtfCKn?si=c1f7a1b3b36e498c"
                        }
                    >
                        <FaSpotify className="h-10 w-10" />
                    </Link>
                    <Link href={"https://www.youtube.com/@himaprosifuinsa7486"}>
                        <FaYoutube className="h-10 w-10" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
