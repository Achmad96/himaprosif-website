import SocialMedia from "@/components/layouts/footer/social-media.footer";
import Location from "@/components/layouts/footer/location.footer";
import Contact from "@/components/layouts/footer/contact-form.footer";

export default function Footer() {
    return (
        <footer className="flex h-[60dvh] w-full flex-col items-center justify-center gap-5 rounded-t-[3rem] bg-secondary px-32 py-10">
            <main className="flex h-full w-[90%] items-center justify-between border-b max-md:flex-col">
                <SocialMedia />
                <Location />
                <Contact />
            </main>
            <h3 className="text-xl">© 2024 HIMAPROSIF Kabinet Estungkara</h3>
        </footer>
    );
}
