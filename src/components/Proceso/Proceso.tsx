import Image from "next/image";
import "@/components/Proceso/Proceso.css"

export default function Proceso() {
    return (
        <section className="section-proceso">

            <div className="contenedor-lineas-proceso">
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso  opacity-0" />
                <div className="graph-linea-proceso" />

                <div className="graph-linea-proceso col-span-5 opacity-0" />
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso  opacity-0" />
                <div className="graph-linea-proceso" />


            </div>

            <div className="absolute inset-0 z-0  flex flex-col justify-end h-[25%]">
                <div className="grid grid-cols-5 h-[10%] ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>

            <div className="contenedor-lineas-proceso translate-y-[98%]">
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso " />
                <div className="graph-linea-proceso " />
                <div className="graph-linea-proceso" />
            </div>


            <div className="contenedor-titulo-proceso">
                <p className="titulo-proceso">Tú compras, <span className="font-semibold text-[55px]">Cavia</span> se encarga del resto </p>
                <p className="subtitulo-proceso">Recibe en México con un servicio hecho a tu medida</p>
                <p className="subtitulo-proceso">Your prestige, your essence. delivered to your doorstep in Mexico from anywhere in the world</p>
            </div>

            <div className="fondo-imagenes-proceso">
                <div className="contenedor-lineas-hero">
                    <div className="graph-linea-hero" />
                    <div className="graph-linea-hero" />
                    <div className="graph-linea-hero" />
                    <div className="graph-linea-hero" />
                    <div className="graph-linea-hero" />

                </div>
            </div>

            <div className="contenedor-lineas-abajo-proceso">
                <div className="graph-linea-proceso opacity-0" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />
                <div className="graph-linea-proceso" />

            </div>
            <div className="absolute inset-0 z-0  flex flex-col justify-end h-[104%]">
                <div className="grid grid-cols-5 h-[10%] ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>

            <div className="contenedor-imagenes-proceso">

                <div></div>

                <Image
                    src="/Proceso/div3-1.png"
                    alt="Logo"
                    width={800}
                    height={615}
                    className="img1-proceso "
                />
                <Image
                    src="/Proceso/div3-2.png"
                    alt="Logo"
                    width={399}
                    height={611}
                    className="img2-proceso"
                />
                <div></div>
                <div></div>
                <Image
                    src="/Proceso/div3-3.png"
                    alt="Logo"
                    width={399}
                    height={310}
                    className="img3-proceso"
                />
                <Image
                    src="/Proceso/div3-4.png"
                    alt="Logo"
                    width={814}
                    height={310}
                    className="img4-proceso "
                />
            </div>
        </section>
    )
}