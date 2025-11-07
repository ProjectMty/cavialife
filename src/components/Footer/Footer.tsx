"use client";
import "@/components/Footer/Footer.css"
import Image from "next/image";

export default function Footer() {
    return (
        <section className="section-Footer">
            
            <Image
                src="/hero/Logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="logo-Footer"
            />
            <div className="contenedor-vinculos-Footer">
                <a href="#hero" className="vinculo-Footer">Inicio</a>
                <div className="linea-grafica-Footer"/>
                <a href="#ComoFunciona" className="vinculo-Footer">¿Como funciona?</a>
                  <div className="linea-grafica-Footer"/>
                <a href="#Soluciones" className="vinculo-Footer">Soluciones Premium</a>
                  <div className="linea-grafica-Footer"/>
                <a href="#Contacto" className="vinculo-Footer">Contáctanos</a>
                
            </div>
            <div className="contenedor-vinculos-Footer">
               <p className="rights-Footer">2025 Cavia - All rights reserved</p>

            </div>
        </section>
    )
}