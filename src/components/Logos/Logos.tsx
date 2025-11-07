"use client";
import Image from "next/image";
import "@/components/Logos/Logos.css"

export default function Logos() {
    return (
        <section className="section-Logos">

            <div className="contenedor-lineas-Logos">
                <div className="grafico-linea-Logos linea-oculta-Logos" />
                <div className="grafico-linea-Logos " />
                <div className="grafico-linea-Logos" />
                <div className="grafico-linea-Logos " />
                <div className="grafico-linea-Logos" />
                <div className="grafico-linea-Logos" />

            </div>
            <div className="contenedor-lineas-horizontales-Logos">
                <div className="transladar-lineas-horizontales-Logos">
                    <div className="grafico-horizontal-Logos " />
                    <div className="grafico-horizontal-Logos" />
                    <div className="grafico-horizontal-Logos" />
                    <div className="grafico-horizontal-Logos" />
                    <div className="grafico-horizontal-Logos" />
                </div>
            </div>

            <div className="contenedor-logos">

                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Louis.svg"
                        alt="Logo"
                        width={70}
                        height={70}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Chanel.svg"
                        alt="Logo"
                        width={140}
                        height={140}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Loro.svg"
                        alt="Logo"
                        width={200}
                        height={200}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Rolex.svg"
                        alt="Logo"
                        width={160}
                        height={160}
                        className="img-Logos"
                    />
                </div>

                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Cartier.svg"
                        alt="Logo"
                        width={140}
                        height={140}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/YSL.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Givenchy.svg"
                        alt="Logo"
                        width={110}
                        height={110}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">

                    <Image
                        src="/Logos/Valentino.svg"
                        alt="Logo"
                        width={190}
                        height={190}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Alexander.svg"
                        alt="Logo"
                        width={140}
                        height={140}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Hermes.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Golden.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="img-Logos"
                    />
                </div>
                <div className="contenedor-imagen-Logos">
                    <Image
                        src="/Logos/Versace.svg"
                        alt="Logo"
                        width={170}
                        height={170}
                        className="img-Logos"
                    />
                </div>
            </div>

        </section>
    )
}