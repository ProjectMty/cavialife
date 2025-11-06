"use client";
import Image from "next/image";
import "@/components/Proceso/Proceso.css"
import ZoomAnimate from "@/animate/ZoomAnimate";
import ShowAnimate from "@/animate/ShowAnimate";

export default function Proceso() {
    return (
        <section className="section-proceso">

            <div className="contenedor-lineas-proceso">
                <div className="graph-linea-proceso linea-oculta" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso linea-oculta" />
                <div className="graph-linea-proceso  linea-oculta" />
                <div className="graph-linea-proceso" />

                <div className="graph-linea-proceso separacion-linea-proceso" />
                <div className="graph-linea-proceso linea-oculta" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso linea-oculta" />
                <div className="graph-linea-proceso  linea-oculta" />
                <div className="graph-linea-proceso" />

            </div>

            <div className="contenedor-extra-1">
                <div className="grid grid-cols-5 h-[10%] ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>

            <div className="contenedor-lineas-proceso transladar-y-proceso">
                <div className="graph-linea-proceso-2 opacity-0" />
                <div className="graph-linea-proceso-2" />
                <div className="graph-linea-proceso-2 " />
                <div className="graph-linea-proceso-2 " />
                <div className="graph-linea-proceso-2" />
            </div>


            <div className="contenedor-titulo-proceso">
                <ShowAnimate
                    delay={0.2}
                    lines={[
                        <p key={1} className="titulo-proceso">Tú compras, <span className="titulo-resaltado-proceso">Cavia</span> se encarga del resto </p>,
                        <p key={2} className="subtitulo-proceso">Recibe en México con un servicio hecho a tu medida</p>,
                        <p key={3} className="subtitulo-proceso">Your prestige, your essence. delivered to your doorstep in Mexico from anywhere in the world</p>,

                    ]}>

                </ShowAnimate>
            </div>

            <div className="fondo-imagenes-proceso">
                <div className="contenedor-lineas-img">
                    <div className="graph-linea-img" />
                    <div className="graph-linea-img" />
                    <div className="graph-linea-img" />
                    <div className="graph-linea-img" />
                    <div className="graph-linea-img" />

                </div>
            </div>

            <div className="contenedor-lineas-abajo-proceso contenedor-extra-2">
                <div className="graph-linea-proceso opacity-100" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />

            </div>
            <div className="contenedor-abajo-horizontal-proceso">
                <div className="grid grid-cols-5 h-[10%] ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>


            <div className="contenedor-imagenes-proceso">

                <div></div>
                <div className="col-span-2">
                    <ZoomAnimate scale={1.03}>
                        <Image
                            src="/Proceso/div3-1.png"
                            alt="Logo"
                            width={800}
                            height={615}
                            className="img1-proceso "
                        />
                    </ZoomAnimate>
                </div>
                <ZoomAnimate scale={1.03}>
                    <Image
                        src="/Proceso/div3-2.png"
                        alt="Logo"
                        width={399}
                        height={611}
                        className="img2-proceso"
                    />
                </ZoomAnimate>
                <div></div>
                <div></div>
                <ZoomAnimate scale={1.03}>
                    <Image
                        src="/Proceso/div3-3.png"
                        alt="Logo"
                        width={399}
                        height={310}
                        className="img3-proceso"
                    />
                </ZoomAnimate>
                <div className="col-span-2">
                    <ZoomAnimate scale={1.03}>
                        <Image
                            src="/Proceso/div3-4.png"
                            alt="Logo"
                            width={814}
                            height={310}
                            className="img4-proceso "
                        />
                    </ZoomAnimate>
                </div>

            </div>
        </section>
    )
}