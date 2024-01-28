import Image from "next/image";
import Map from "@/components/map";
import Projects from "@/components/projects";

export default function Home() {
  return (
      <main className={'w-[1480px] mx-auto px-4'} >
        <Projects/>
      </main>
  );
}
