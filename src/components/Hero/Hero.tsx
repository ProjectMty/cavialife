
import "@/components/Hero/Hero.css"
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="section-hero">

            <div className="contenedor-lineas-hero">
                <div className="graph-linea-hero"/>
                 <div className="graph-linea-hero"/>
                 <div className="graph-linea-hero"/>
                 <div className="graph-linea-hero"/>
                 <div className="graph-linea-hero"/>
                 
            </div>
            <Image
                src="/hero/Logo.svg"
                alt="Logo"
                width={100}
                height={300}
                className="logo-hero"
            />

            <Image
                src="/hero/Model.png"
                alt="Logo"
                width={1900}
                height={1200}
                className="img-hero"
            />
            <div className="contenedor-titulo-hero">
                <p className="title-hero">Indulge <br /> your essence</p>
            </div>


        </section>
    )
}