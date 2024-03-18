import { getDictionary } from "./dictionaries";
import { Locale } from "../../../i18n-config";

import Hero from "@/components/layouts/wrapper/hero.wrapper";
import Departments from "@/components/layouts/wrapper/departments.wrapper";

export default async function Home({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const dict = await getDictionary(lang);
    return (
        <>
            <Hero dict={dict.hero} />
            <Departments dict={dict.departments} />
        </>
    );
}
