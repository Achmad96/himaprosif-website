"use client";
import React from "react";
import { Variants, motion } from "framer-motion";

const heroContentVariants: Variants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            type: "spring",
            duration: 0.3,
            delayChildren: 0.3,
            staggerChildren: 0.3,
            stiffness: 300,
            damping: 50,
        },
    },

    closed: {
        opacity: 0,
        y: "100%",
        transition: {
            type: "spring",
            duration: 0.5,
        },
    },
};

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: { type: "spring", stiffness: 300, damping: 50 },
    },
    closed: { opacity: 0, y: "100%" },
};

export default function HeroContent({ header, body }: any) {
    return (
        <div className="flex w-[30%] flex-col gap-20 max-sm:w-[85%]">
            <div className="overflow-hidden">
                <motion.h1
                    initial={"closed"}
                    animate={"open"}
                    variants={heroContentVariants}
                    className="-translate-y-[50%] text-5xl font-extrabold text-primary"
                >
                    {header.vision}
                </motion.h1>
                <motion.p
                    initial={"closed"}
                    animate={"open"}
                    variants={heroContentVariants}
                    className="py-6"
                >
                    {body.vision}
                </motion.p>
            </div>
            <div>
                <motion.h1
                    initial={"closed"}
                    animate={"open"}
                    variants={heroContentVariants}
                    className="text-5xl font-extrabold text-primary"
                >
                    {header.mission}
                </motion.h1>
                <motion.ul
                    initial={"closed"}
                    animate={"open"}
                    variants={heroContentVariants}
                    className="ml-5 flex flex-col gap-2 py-6"
                >
                    {body.missions.map((mission: string) => (
                        <motion.li variants={itemVariants} key={mission}>
                            {mission}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}
