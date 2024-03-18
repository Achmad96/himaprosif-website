import { Noto_Sans } from "next/font/google";

import audit from "../../../../public/assets/departments/audit.png";
import bpi from "../../../../public/assets/departments/bpi.png";
import msdm from "../../../../public/assets/departments/msdm.png";
import pa from "../../../../public/assets/departments/pa.png";
import pb from "../../../../public/assets/departments/pb.png";
import kki from "../../../../public/assets/departments/kki.png";
import humas from "../../../../public/assets/departments/humas.png";
import ti from "../../../../public/assets/departments/ti.png";
import pmdb from "../../../../public/assets/departments/pmdb.png";

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
                            <Image src={audit} alt="audit" fill priority />
                        </div>
                        <p>AUDITOR</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={bpi} alt="BPI" fill priority />
                        </div>
                        <p>BPI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={humas} alt="humas" fill priority />
                        </div>
                        <p>HUMAS</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={msdm} alt="msdm" fill priority />
                        </div>
                        <p>MSDM</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={kki} alt="kki" fill priority />
                        </div>
                        <p>KKI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={pmdb} alt="pmdb" fill priority />
                        </div>
                        <p>PMDB</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={pa} alt="pa" fill priority />
                        </div>
                        <p>PA</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={ti} alt="ti" fill priority />
                        </div>
                        <p>TI</p>
                    </li>
                    <li className="flex h-52 w-96 flex-col items-center justify-center gap-5 rounded-3xl border border-primary">
                        <div className="relative h-20 w-20">
                            <Image src={pb} alt="pb" fill priority />
                        </div>
                        <p>PB</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
