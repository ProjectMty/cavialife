"use client";
import Image from "next/image";
import "@/components/Soluciones/Soluciones.css"

export default function Soluciones() {
    const enviarWhatsApp = () => {
        const numero = "12107747644";
        const mensaje = "Hola, quiero más información";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };
    return (
        <section className="section-soluciones">

            <div className="contenedor-lineas-soluciones">
                <div className="graph-linea-soluciones opacity-0" />
                <div className="graph-linea-soluciones" />
                <div className="graph-linea-mitad-soluciones " />
                <div className="graph-linea-mitad-soluciones " />
                <div className="graph-linea-soluciones" />

            </div>

            <div className="contenedor-lineas-horizontal-soluciones">
                <div className="contenedor-hor-soluciones ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>

            <div className="contenedor-titulo-soluciones">
                <p className="titulo-soluciones">SOLUCIONES PREMIUM</p>
            </div>

            <div className="contenedor-inf-soluciones">
                <div></div>
                <div className="cuandro-inf-soluciones">
                    <p className="titulo-inf-soluciones">Package Concierge</p>
                    <p>Recibimos tus compras, gestionamos la importación a México y
                        entregamos con nuestro servicio White Glove Delivery, en cualquier parte del
                        país. Tú compras, Cavia se encarga del resto.
                    </p>
                </div>
                <div className="cuandro-inf-soluciones">
                    <p className="titulo-inf-soluciones">Personal Shopping</p>
                    <p>Nuestros Lifestyle Specialist se encargan de todo. Realizan tus compras personalmente,
                        las empacan con empaque de lujo y gestionan la importación a México. Recibes nuestro servicio
                        White Glove Delivery en cualquier parte del país.
                    </p>
                </div>
                <div className="cuandro-inf-soluciones">
                    <p className="titulo-inf-soluciones">The Satin Midi Skirt</p>
                    <p>Cavia unlike cualquier otro servicio.
                        Disfruta la verdadera unboxin experience:
                        Abrir una caja de CAVIA es una experiencia premium en cada detalle.
                        La envoltura, los aromas y la presentación... simplemente inigualables.
                    </p>
                </div>
            </div>

            <div className="contenedor-boton-soluciones">
                <button className="boton-cotiza-soluciones"
                    onClick={enviarWhatsApp}>Cotiza Ahora</button>
            </div>

            <div className="fondo-imagenes-soluciones"></div>
            <div className="contenedor-inf-soluciones">
                <div></div>
                <Image
                    src="/Soluciones/div5-1.png"
                    alt="Logo"
                    width={1270}
                    height={462}
                    className="img-soluciones "
                />
            </div>

            <div className="contenedor-lineas-abajo-soluciones">
                <div className="graph-linea-soluciones opacity-0" />
                <div className="graph-linea-soluciones" />
                <div className="graph-linea-soluciones opacity-0" />
                <div className="graph-linea-soluciones opacity-0" />
                <div className="graph-linea-soluciones" />
            </div>
            <div className="contenedor-lineas-abajo2-soluciones">
                <div className="graph-linea-soluciones opacity-0" />
                <div className="graph-linea-soluciones" />
                <div className="graph-linea-soluciones" />
                <div className="graph-linea-soluciones" />
                <div className="graph-linea-soluciones" />
            </div>
            <div className="absolute inset-0 z-0  flex flex-col justify-end h-[110%]">
                <div className="grid grid-cols-5 h-[1%] ">
                    <div className="graph-linea-horizontal-proceso opacity-0" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                    <div className="graph-linea-horizontal-proceso" />
                </div>

            </div>

        </section>
    )
}