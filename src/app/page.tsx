import ComoFunciona from "@/components/ComoFunciona/ComoFunciona";
import Contacto from "@/components/Contacto/Contacto";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Logos from "@/components/Logos/Logos";
import Proceso from "@/components/Proceso/Proceso";
import Soluciones from "@/components/Soluciones/Soluciones";

export default function Home() {
  return (
    <main >
      <Hero />
      <ComoFunciona />
      <Proceso />
      <Soluciones/>
      <Logos/>
      <Contacto/>
      <Footer/>
    </main>

  );
}
