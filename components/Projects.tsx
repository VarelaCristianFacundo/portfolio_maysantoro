'use client'

import desperte from "@/images/desperte.png";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ["latin"] });

const music = [
    {
        id: 0,
        title: "Desperté",
        image: desperte,
        alt: "Desperté",
    }
    // {
    //     id: 1,
    //     title: "if i could make it go quiet",
    //     image: makeitGoQuiet,
    //     alt: "if i could make it go quiet",
    // },
    // {
    //     id: 2,
    //     title: "bad idea!",
    //     image: badIDEA,
    //     alt: "bad idea!",
    // },
    // {
    //     id: 3,
    //     title: "chapter 2",
    //     image: chapter2,
    //     alt: "chapter 2",
    // },
    // {
    //     id: 4,
    //     title: "watch you sleep.",
    //     image: watchYouSleep,
    //     alt: "watch you sleep.",
    // },
    // {
    //     id: 5,
    //     title: "we fell in love in october",
    //     image: fellInLoveinOct,
    //     alt: "we fell in love in october",
    // },
    // {
    //     id: 6,
    //     title: "chapter 1",
    //     image: chapter1,
    //     alt: "chapter 1",
    // },
    // {
    //     id: 7,
    //     title: "i wanna be your girlfriend",
    //     image: beYourGirlfriend,
    //     alt: "i wanna be your girlfriend",
    // }
]

function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
        >
            <h3 className="absolute top-24 tracking-[20px] text-[#ddd4c6] text-2xl">
                Single
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-white scrollbar-thumb-[#D1001F]/80">
                {music.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ y: -300, }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-screen flex flex-col space-y-3 items-center justify-center flex-shrink-0 snap-center pt-[40px] sm:pt-[80px] md:pt-[65px] h-screen">
                        <Link target="blank" href="https://open.spotify.com/intl-es/album/7sfjYqeEsBoiwalniMgj25">
                            <div className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg  md:h-124  object-contain cursor-pointer">
                                <Image src={item.image} alt={item.alt} priority className="object-fill" />
                            </div>
                        </Link>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl lg:pt-[32px]">
                            <div className={montserrat.className}>
                                <h4 className="text-2xl font-semibold text-center text-[#ddd4c6] tracking-[2px]">
                                    {item.title}
                                </h4>

                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[#D1001F]/70 left-0 h-[500px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects;