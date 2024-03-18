import Image from "next/image";

import Estungkara from "../../../../public/assets/estungkara.png";

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
                        <p className="w-10 text-3xl">Tumbuh Berdaya</p>
                    </div>
                </div>
            </div>
            <div className="flex w-[30%] flex-col gap-20 max-sm:w-[85%]">
                <div>
                    <h1 className="text-5xl font-extrabold text-primary">
                        {header.vision}
                    </h1>
                    <p className="py-6">{body.vision}</p>
                </div>
                <div>
                    <h1 className="text-5xl font-extrabold text-primary">
                        {header.mission}
                    </h1>
                    <ul className="ml-5 py-6">
                        {body.missions.map((mission: string) => (
                            <li key={mission}>{mission}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
