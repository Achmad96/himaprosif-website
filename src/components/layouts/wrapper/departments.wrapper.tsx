"use client";
import { Noto_Sans } from "next/font/google";
import { motion } from "framer-motion";

import audit from "../../../../public/assets/departments/audit.png";
import bpi from "../../../../public/assets/departments/bpi.png";
import humas from "../../../../public/assets/departments/humas.png";
import msdm from "../../../../public/assets/departments/msdm.png";
import kki from "../../../../public/assets/departments/kki.png";
import pmdb from "../../../../public/assets/departments/pmdb.png";
import pa from "../../../../public/assets/departments/pa.png";
import ti from "../../../../public/assets/departments/ti.png";
import pb from "../../../../public/assets/departments/pb.png";

import Image from "next/image";
import React from "react";

const noto_sans = Noto_Sans({ weight: "800", subsets: ["latin"] });
export default function Departments({ dict }: any) {
    const { header }: any = dict;
    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-primary">
                {header.departments}
            </h1>
            <div className="h-auto w-full ">
                <ul
                    className={`${noto_sans.className} grid h-screen w-full grid-cols-3 place-items-center text-2xl [&>li]:list-none`}
                >
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={audit} alt="audit" priority />
                        </div>
                        <p>AUDITOR</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={bpi} alt="BPI" fill priority />
                        </div>
                        <p>BPI</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-28">
                            <Image src={humas} alt="humas" fill priority />
                        </div>
                        <p>HUMAS</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={msdm} alt="msdm" fill priority />
                        </div>
                        <p>MSDM</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={kki} alt="kki" fill priority />
                        </div>
                        <p>KKI</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={pmdb} alt="pmdb" fill priority />
                        </div>
                        <p>PMDB</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={pa} alt="pa" fill priority />
                        </div>
                        <p>PA</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={ti} alt="ti" fill priority />
                        </div>
                        <p>TI</p>
                    </motion.li>
                    <motion.li
                        whileHover={{
                            scale: 1.1,
                            boxShadow: "0px 0px 75px #044d28",
                        }}
                        className="flex h-52 w-[80%] flex-col items-center justify-center gap-x-3 gap-y-3 rounded-3xl border border-primary"
                    >
                        <div className="relative h-20 w-20">
                            <Image src={pb} alt="pb" fill priority />
                        </div>
                        <p>PB</p>
                    </motion.li>
                </ul>
            </div>
        </section>
    );
}
