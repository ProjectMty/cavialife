"use client";
import "@/components/Contacto/Contacto.css"

export default function Contacto() {
    return (
        <section id="Contacto" className="section-Contacto">
            <div className="contenedor-fondo-Contacto">
                <div className="grafico-linea-Contacto" />
                <div className="grafico-linea-Contacto" />
                <div className="grafico-linea-Contacto oculto-Contacto" />
                <div className="grafico-linea-Contacto oculto-Contacto" />
                <div className="grafico-linea-Contacto" />

            </div>

            <div className="contenedor-Contacto">
                <div className="contenedor-forms-Contacto">
                    <h1 className="titulo-forms-Contacto">Contact Us</h1>
                    <div className="contenedor-input-Contacto">
                        <label htmlFor="ContactName" className="label-Contacto">Nombre: </label>
                        <input type="text" name="name" id="ContactName" className="input-Contacto"
                            placeholder="" />
                    </div>
                     <div className="contenedor-input-Contacto">
                        <label htmlFor="ContactEmail" className="label-Contacto">Email: </label>
                        <input type="text" name="name" id="ContactEmail" className="input-Contacto"
                            placeholder="" />
                    </div>
                     <div className="contenedor-input-Contacto"> 
                        <label htmlFor="ContactPhone" className="label-Contacto">Número de teléfono: </label>
                        <input type="text" name="name" id="ContactPhone" className="input-Contacto"
                            placeholder="" />
                    </div>
                    <div className="contenedor-input-2-Contacto">
                        <label htmlFor="ContactDescr" className="label-Contacto">Descripción: </label>
                        <input type="textarea"  id="ContactDescr" className="input-2-Contacto"
                             />
                    </div>
                    <button className="boton-forms-Contacto">Cotiza Ahora</button>
                </div>
                <div className="contenedor-informacion-Contacto">
                    <div className="informacion-Conatacto">
                        <h1 className="titulo-informacion-Contacto">Horario <br /> de atención</h1>
                        <p className="parrafo-Contacto"><span className="font-bold">Lun-Vier: </span> 8:30am - 5:30pm</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Sábado: </span> 8:30am - 1:30pm</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Domingo: </span> Cerrado</p>
                    </div>
                      <div className="informacion-Conatacto">
                        <h1 className="titulo-informacion-Contacto">Contacto</h1>
                        <p className="parrafo-Contacto"><span className="font-bold">Teléfono: </span> +1 210 775 7644</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Email: </span> info@cavialife.com</p>
                    
                    </div>
                </div>
            </div>
        </section>
    )
}