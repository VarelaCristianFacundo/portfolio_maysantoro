"use client"

import marie from "@/images/maysantoro.png";
import { Montserrat } from 'next/font/google';
import Image from "next/image";
import Link from 'next/link';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {};

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Cantante", "Compositora", "Productora musical", "Artista", "Vocalista"],
        loop: true,
        delaySpeed: 1000
    })
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Link href='/'>
                <Image
                    src={marie}
                    alt='Marie Ulven Ringheim'
                    className="relative rounded-full h-64 w-64 mx-auto object-cover"
                    priority
                />
            </Link>
            <div>
                <div className={montserrat.className}>
                    <h2 className="text-sm text-[#ddd4c6] pt-10 pb-2 tracking-[12px]">May Santoro</h2>

                    <h1 className="text-4xl lg:text-6xl font-semibold tracking-[6px] scroll-px-10 pt-14">
                        <span>{text}</span>
                        <Cursor cursorColor="#F01E2C" />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Hero;