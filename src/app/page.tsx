import ComoFunciona from "@/components/ComoFunciona/ComoFunciona";
import Hero from "@/components/Hero/Hero";
import Proceso from "@/components/Proceso/Proceso";
import Soluciones from "@/components/Soluciones/Soluciones";

export default function Home() {
  return (
    <main >
      <Hero />
      <ComoFunciona />
      <Proceso />
      <Soluciones/>
    </main>

  );
}
