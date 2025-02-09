"use client"

import { motion } from "framer-motion";
import { Montserrat } from 'next/font/google';
import { SocialIcon } from 'react-social-icons';

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {};

function Header({ }: Props) {
    return (
        <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -500,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center">
                <SocialIcon
                    url="https://www.youtube.com/@maysantoro"
                    fgColor="#ddd4c6"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.instagram.com/maysantoro/"
                    fgColor="#ddd4c6"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.tiktok.com/@maysantoro"
                    fgColor="#ddd4c6"
                    bgColor="transparent"
                />
                {/* <SocialIcon 
                url="https://x.com/_maysantoro_"
                fgColor="#ddd4c6"
                bgColor="transparent"
            /> */}
                {/* <SocialIcon 
                url="https://www.facebook.com/maysantoro/"
                fgColor="#ddd4c6"
                bgColor="transparent"
            /> */}
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center text-[#ddd4c6] cursor-pointer">
                <SocialIcon
                    className="cursor-pointer"
                    fgColor="#ddd4c6"
                    bgColor="transparent"
                    url="https://open.spotify.com/intl-es/artist/6ObwluZSrj3FxKRuH7JBau"
                />
                <SocialIcon
                    className="cursor-pointer"
                    fgColor="#ddd4c6"
                    bgColor="transparent"
                    url="https://music.apple.com/us/artist/may-santoro/1647251352"
                />
                {/* <SocialIcon 
                className="cursor-pointer"
                fgColor="#ddd4c6"
                bgColor="transparent"
                url="https://soundcloud.com/lyfsuxx"
            /> */}
                {/* <Link href="https://us.shopmaysantoro.com/" className='pl-6'>
                    <div className={montserrat.className}>
                        <p className="lowercase hidden md:inline-flex text-sm tracking-[4px] text-[#ddd4c6]">shop</p>
                    </div>
                </Link> */}


            </motion.div>
        </header>
    )
}

export default Header;