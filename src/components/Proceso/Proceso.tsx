import Image from "next/image";
import "@/components/Proceso/Proceso.css"

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
                <p className="titulo-proceso">Tú compras, <span className="titulo-resaltado-proceso">Cavia</span> se encarga del resto </p>
                <p className="subtitulo-proceso">Recibe en México con un servicio hecho a tu medida</p>
                <p className="subtitulo-proceso">Your prestige, your essence. delivered to your doorstep in Mexico from anywhere in the world</p>
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

            {/* carrusel mobil **** */}
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