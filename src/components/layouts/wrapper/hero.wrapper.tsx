import Image from "next/image";

import Estungkara from "../../../../public/assets/estungkara.png";
import HeroContent from "@/components/animations/hero-content.animation";

export default function Hero({ dict }: any) {
    const { header, body }: any = dict;
    return (
        <section
            id="hero"
            className="flex h-screen w-full items-center justify-center gap-52 max-md:flex-col max-sm:gap-0"
        >
            <div className="flex flex-col items-center gap-10">
                <div className="flex w-full flex-col items-center text-center">
                    <h1 className="text-6xl font-extrabold">HIMAPROSIF</h1>
                    <h1 className="w-fit text-3xl font-extrabold text-primary">
                        {header.cabinet}
                    </h1>
                </div>
                <div className="flex items-end">
                    <div className="relative h-[25rem] w-[19.5rem]">
                        <Image
                            src={Estungkara}
                            alt="Estungkara"
                            className="shdw-icon"
                            fill={true}
                            priority
                        ></Image>
                    </div>
                    <div className="flex font-extrabold text-white">
                        <span className="text-7xl">#</span>
                        <p className="w-10 text-3xl">{header.tag}</p>
                    </div>
                </div>
            </div>
            <HeroContent header={header} body={body} />
        </section>
    );
}
