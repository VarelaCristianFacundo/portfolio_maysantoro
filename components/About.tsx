"use client"

import maysantoro from "@/images/onKeyboard.png";
import { motion } from "framer-motion";
import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {};

function About() {
    return (
        <div className={montserrat.className}>
            <motion.div
                className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 pt-40 h-screen justify-evenly mx-auto items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <h3 className="absolute top-24 sm:top-24 uppercase tracking-[20px] text-[#ddd4c6] text-2xl pb-2">Acerca de mí</h3>

                <motion.div
                    initial={{
                        x: -200,
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="-mb-20  flex-shrink-0 w-56 md:w-60 md:h-92 xl:w-[460px] "
                >
                    <Image src={maysantoro} alt="may santoro" priority className="rounded-full md:rounded-lg object-cover" />
                </motion.div>

                <div className="space-y-10 px-0 md:px-10 text-text-[#ddd4c6] pt-18 sm:pt-2">
                    <h4 className="text-3xl font-semibold"> DONDE {" "}
                        <span className="decoration-text-[#ddd4c6]/50 underline">EMPEZÓ</span>{" "}TODO
                    </h4>
                    <p className="lg:text-lg md:text-xs">Soy Maylen Santoro, una artista, cantante y compositora nacida en la Ciudad de Buenos Aires, Argentina. Mi pasión por la música me llevó a explorar y desenvolverme en géneros como el <span className="decoration-text-[#ddd4c6]/50 font-bold">Soul, Neo Soul, Blues, R&B, Funk y Jazz</span>, entre otros, siempre buscando transmitir emociones auténticas y conectar con quienes me escuchan.
                        <br></br>A lo largo de mi trayectoria, fuí y soy parte de diversas formaciones musicales, cada una aportando experiencias únicas que me enriquecieron como artista. Actualmente, estoy dedicada a desarrollar mi proyecto musical como solista, un sueño que comenzó a tomar forma con el lanzamiento de mi primer single, <span className="decoration-text-[#ddd4c6]/50 font-bold">Desperté</span>, en 2022.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}

export default About;