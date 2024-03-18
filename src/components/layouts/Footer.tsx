import SocialMedia from "@/components/layouts/footer/social-media.footer";
import Location from "@/components/layouts/footer/location.footer";
import Contact from "@/components/layouts/footer/contact-form.footer";

export default function Footer() {
    return (
        <footer className="flex h-[50dvh] w-full justify-center rounded-t-[3rem] bg-secondary px-32 py-10">
            <main className="flex h-full w-[90%] items-center justify-between border-b">
                <SocialMedia />
                <Location />
                <Contact />
            </main>
        </footer>
    );
}
