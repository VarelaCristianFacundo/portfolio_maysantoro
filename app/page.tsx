import About from "@/components/About";
import EmbedArtist from "@/components/EmbedArtist";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import mariaInRed from "@/images/maysantoro.png";
import Image from "next/image";
import Link from "next/link";

// type Props = {
//   socials: Social[];
// };


async function Home() {

  return (
    <div className="bg-[#400000] text-[#ddd4c6] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id='hero' className="snap-center">
        <Hero />
      </section>

      <section id='about' className="snap-center">
        <About />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id='embedArtist' className='snap-center'>
        <EmbedArtist />
      </section>


      <Link href="#hero">
        <footer className="sticky bottom-8 w-full cursor-pointer pb-[90px]">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={mariaInRed}
              alt="Girl in Red"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export default Home;