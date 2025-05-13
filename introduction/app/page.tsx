import NavBar from "@/components/NavBar";
import { IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";
import Image from "next/image";
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
    <NavBar />
    <main >
      <section className=" bg-zinc-800 text-center py-8 w-screen">
      <div className={`flex items-center justify-center space-x-8 p-4 ${ibmPlexMono.className}`}>
        
        <div className="flex-1">
        <p className={`text-white rounded-lg  text-lg text-left`}>
          Hi, I'm Thomas Tran. I am a data analyst based in Darwin, NT. I have a passion for analysing data and web development. I love analysing data and using it to tell stories. In my free time, I enjoy learning new technologies and improving my skills.
        </p>
        <div className="flex justify-start mt-4">
          <a 
          href="/projects"
          className="bg-green-400 text-white px-6 py-3  hover:bg-green-600 transition text-lg"
          >
          See My Projects
          </a>
        </div>
        </div>

        <Image
        src="/thomas-img.jpg"
        alt="Thomas Tran"
        width={200}
        height={200}
        className="mt-4 flex-1 object-contain"
        unoptimized
        />
      </div>
      </section>

      <section className="mb-8 bg-gray-100 text-center py-4 w-screen">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Education</h2>
      <div className="flex space-x-8 justify-center items-center  py-4">
        <div>
        <Image
          src="/logos/cdu_logo.png"
          alt="Charles Darwin University"
          width={200}
          height={200}
          className="object-contain"
          unoptimized
          
        />
        <p className="text-lg text-black mt-4">Master of Data Science</p>
        </div>
        <div>
        <Image
          src="/logos/monash_logo.png"
          alt="Monash University"
          width={200}
          height={200}
          className="object-contain"
          unoptimized
        />
        <p className="text-lg text-black ">Bachelor of Computer Science </p>
        <p className="text-lg text-black ">Bachelor of Commerce</p>
        </div>
      </div>
      
      </section>
    </main>
    </>
  );
}