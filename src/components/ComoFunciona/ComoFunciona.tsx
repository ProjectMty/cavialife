"use client";
import Image from "next/image";
import "@/components/ComoFunciona/ComoFunciona.css"
import ZoomAnimate from "@/animate/ZoomAnimate";
import ShowAnimate from "@/animate/ShowAnimate";

export default function ComoFunciona() {
    return (
        <section className="section-funciona">
            {/* #region GRAFICOS */}
            <div className="contenedor-lineas-funciona">
                <div className="graph-linea-funciona linea-oculta" />
                <div className="graph-linea-funciona linea-oculta-md" />
                <div className="graph-linea-funciona" />
                <div className="graph-linea-funciona linea-oculta" />
                <div className="graph-linea-funciona linea-oculta-md" />

            </div>
            <div className="contenedor-lineas-horizontal-funciona">
                <div className="contenedor-hor-funciona">
                    <div className="graph-linea-horizontal-funciona linea-oculta-horizontal " />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona linea-oculta-horizontal " />
                </div>
            </div>
            <div className="contenedor-lineas-horizontal-funciona-oculta">
                <div className="contenedor-hor-funciona-oculta">
                    <div className="graph-linea-horizontal-funciona-oculta " />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona-oculta " />
                </div>
            </div>
            {/* #endregion */}

            <div className="contenedor-inf-funciona">
                <div className="separacion-funciona"></div>
                <ZoomAnimate scale={1.1}>
                    <Image
                        src="/ComoFunciona/div2.png"
                        alt="Logo"
                        width={399}
                        height={311}
                        className="img-funciona"
                    />
                </ZoomAnimate>


                <div className="contenedor-texo-funciona">
                    <ShowAnimate
                        delay={0.2}
                        lines={[
                            <p  key={1} className="titulo-texto-funciona">¿Cómo funciona <span className="font-semibold">Cavia</span>?</p>,
                            <p key={2} className="texto-funciona"> <span className="font-semibold">Cavia </span>
                                impulsa tus <span className="font-semibold">compras más alla de las tiendas retail de tu ciudad. Accede </span>
                                a <span className="font-semibold">boutiques exclusivas </span>
                                y <span className="font-semibold">show rooms</span> posh en
                                <span className="font-semibold"> Estados unidos</span> y
                                <span className="font-semibold"> Europa. </span>
                                <br />
                            </p>,
                            <p key={3} className="texto-funciona">
                                <span className="font-semibold">Tú compras, Cavia </span>
                                se encarga del resto
                            </p>
                        ]}>

                    </ShowAnimate>



                </div>

            </div>

        </section>
    )
}