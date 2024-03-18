import { Noto_Sans } from "next/font/google";

import Image from "next/image";
import React from "react";

const noto_sans = Noto_Sans({ weight: "800", subsets: ["latin"] });
export default function Departments({ dict }: any) {
    const { header }: any = dict;
    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-10">
            <h1 className="text-5xl font-extrabold text-primary">
                {header.departments}
            </h1>
            <div>
                <ul
                    className={`${noto_sans.className} grid grid-cols-3 gap-10 [&>li>p]:text-2xl [&>li]:list-none`}
                >
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/audit.png"}
                                alt="audit"
                                fill
                                priority
                            />
                        </div>
                        <p>AUDITOR</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/bpi.png"}
                                alt="BPI"
                                fill
                                priority
                            />
                        </div>
                        <p>BPI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/humas.png"}
                                alt="humas"
                                fill
                                priority
                            />
                        </div>
                        <p>HUMAS</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/msdm.png"}
                                alt="msdm"
                                fill
                                priority
                            />
                        </div>
                        <p>MSDM</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/kki.png"}
                                alt="kki"
                                fill
                                priority
                            />
                        </div>
                        <p>KKI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/pmdb.png"}
                                alt="pmdb"
                                fill
                                priority
                            />
                        </div>
                        <p>PMDB</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/pa.png"}
                                alt="pa"
                                fill
                                priority
                            />
                        </div>
                        <p>PA</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/ti.png"}
                                alt="ti"
                                fill
                                priority
                            />
                        </div>
                        <p>TI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image
                                src={"/assets/departments/pb.png"}
                                alt="pb"
                                fill
                                priority
                            />
                        </div>
                        <p>PB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
