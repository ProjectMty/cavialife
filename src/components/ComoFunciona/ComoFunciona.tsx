import Image from "next/image";
import "@/components/ComoFunciona/ComoFunciona.css"

export default function ComoFunciona() {
    return (
        <section className="section-funciona">
            <div className="contenedor-lineas-funciona">
                <div className="graph-linea-funciona opacity-0" />
                <div className="graph-linea-funciona" />
                <div className="graph-linea-funciona" />
                <div className="graph-linea-funciona  opacity-0" />
                <div className="graph-linea-funciona" />

            </div>
            <div className="contenedor-lineas-horizontal-funciona">
                <div className="contenedor-hor-funciona">
                    <div className="graph-linea-horizontal-funciona opacity-0" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                    <div className="graph-linea-horizontal-funciona" />
                </div>


            </div>

            <div className="contenedor-inf-funciona">
                <div></div>
                <Image
                    src="/ComoFunciona/div2.png"
                    alt="Logo"
                    width={399}
                    height={311}
                    className="img-funciona"
                />

                <div className="contenedor-texo-funciona">
                    <p className="titulo-texto-funciona">¿Cómo funciona <span className="font-semibold">Cavia</span>?</p>
                    <p className="texto-funciona"> <span className="font-semibold">Cavia </span>
                        impulsa tus <span className="font-semibold">compras más alla de las tiendas retail de tu ciudad. Accede </span>
                        a <span className="font-semibold">boutiques exclusivas </span>
                        y <span className="font-semibold">show rooms</span> posh en
                        <span className="font-semibold"> Estados unidos</span> y
                        <span className="font-semibold"> Europa. </span>
                        <br />


                    </p>
                    <p className="texto-funciona">
                        <span className="font-semibold">Tú compras, Cavia </span>
                        se encarga del resto
                    </p>
                </div>

            </div>

        </section>
    )
}