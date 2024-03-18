import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex h-screen w-full items-center justify-center gap-24 max-md:flex-col max-sm:gap-0">
            <div className="flex flex-col items-center gap-10">
                <div className="w-full text-center">
                    <h1 className="text-6xl font-extrabold">HIMAPROSIF</h1>
                    <h1 className="w-fit text-3xl font-extrabold text-primary">
                        KABINET ESTUNGKARA 2024
                    </h1>
                </div>
                <div className="relative h-[25rem] w-[19.5rem]">
                    <Image
                        src="/assets/estungkara.png"
                        alt="Estungkara"
                        className=""
                        fill={true}
                    ></Image>
                </div>
            </div>
            <div className="flex w-[30%] flex-col gap-20 max-sm:w-[85%]">
                <div>
                    <h1 className="text-5xl font-extrabold text-primary">
                        Vision
                    </h1>
                    <p className="py-6">
                        Making HIMAPROSIF the main pillar of students in the
                        Information Systems Study Program which aims to create
                        an active, creative and innovative organization in order
                        to create a generation that is professional, religious
                        and qualified to contribute to society.
                    </p>
                </div>
                <div>
                    <h1 className="text-5xl font-extrabold text-primary">
                        Mission
                    </h1>
                    <ul className="ml-5 py-6">
                        <li>
                            Building relationships internally and externally to
                        </li>
                        <li>
                            create a good social environment and a sense of
                            family.
                        </li>
                        <li>
                            Increasing the spirit of gathering on familial and
                        </li>
                        <li>
                            religious grounds Building creativity and innovation
                        </li>
                        <li>
                            that actively seeks solutions to the needs of the
                        </li>
                        <li>Information Systems Study Program. Creating a</li>
                        <li>
                            comfortable space for expression for students with
                            the
                        </li>
                        <li>principles of openness and mutual tolerance.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
