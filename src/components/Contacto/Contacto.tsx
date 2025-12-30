"use client";
import "@/components/Contacto/Contacto.css"
import { useState } from "react";
import Swal from 'sweetalert2'

export default function Contacto() {

    const [nombre, SetNombre] = useState("");
    const [telefono, SetTelefono] = useState("");
    const [correo, SetCorreo] = useState("");
    const [desc, SetDesc] = useState("");

    const handleChangeTelefono = (e: React.ChangeEvent<HTMLInputElement>) => {
        // eliminar todo lo que no sea número
        let numeros = e.target.value.replace(/\D/g, "").slice(0, 10);

        if (numeros.length > 6) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3, 6)}-${numeros.slice(6)}`;
        } else if (numeros.length > 3) {
            numeros = `(${numeros.slice(0, 3)}) ${numeros.slice(3)}`;
        } else if (numeros.length > 0) {
            numeros = `(${numeros}`;
        }

        SetTelefono(numeros);

    };

    // Limitar a 15 caracteres
    const handleChangeNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valor = e.target.value;

        valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

        valor = valor.replace(/\s{2,}/g, " ");

        valor = valor.slice(0, 20);
        valor = valor
            .toLowerCase()
            .replace(/\b\w/g, (letra) => letra.toUpperCase());

        SetNombre(valor);
    }

    const handleChangeCorreo = (e: React.ChangeEvent<HTMLInputElement>) => {
        let valor = e.target.value;

        valor = valor.replace(/\s+/g, "");

        valor = valor.toLowerCase();

        valor = valor.slice(0, 40);

        SetCorreo(valor);
    };
    const validarCorreo = (correo: string): boolean => {
        const regexCorreo =
            /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

        return regexCorreo.test(correo);
    };

    const handleChangeDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let valor = e.target.value;

        valor = valor.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

        valor = valor.replace(/\s{2,}/g, " ");

        valor = valor.slice(0, 100);
    
        SetDesc(valor);
    }

    const handleEnvioDatos = async () => {
        try {
            const body = {
                nombre: nombre,
                telefono: telefono,
                correo: correo,
                desc: desc,
            };

            // Validación simple antes de enviar
            if (!nombre || !telefono || !correo || !desc) {
                Swal.fire({
                    title: "Campos incompletos",
                    text: "Por favor completa todos los campos requeridos.",
                    icon: "warning",
                    timer: 3000,
                });
                return;
            }

            if (telefono.length < 14) {
                Swal.fire({
                    title: "Campos incompletos",
                    text: "Por favor ingresa un numero telefónico válido",
                    icon: "warning",
                    timer: 3000,
                });
                return;
            }

            if (!validarCorreo(correo)) {
                Swal.fire({
                    title: "Campos incompletos",
                    text: "Por favor ingresa un correo electronico válido",
                    icon: "warning",
                    timer: 3000,
                });
                return;
            }

            // Enviar al backend
            const response = await fetch("/api/EnvioDatos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            // Validar respuesta del servidor
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Error al enviar el correo");
            }

            const data = await response.json();

            Swal.fire({
                title: " 🎉 Correo enviado 🎉",
                text: data.message || "Tu mensaje fue enviado exitosamente.",
                icon: "success",
                timer: 3000,
            });

            // Limpiar campos del formulario
            SetNombre("");
            SetTelefono("");
            SetCorreo("");
            SetDesc("");

        } catch (error: any) {
            console.error("Error al enviar el correo:", error);
            Swal.fire({
                title: "Error",
                text: error.message || "No se pudo enviar el correo. Intenta nuevamente.",
                icon: "error",
                timer: 3000,
            });
        }
    };

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
                            value={nombre}
                            placeholder="Nombre"
                            onChange={handleChangeNombre} />
                    </div>
                    <div className="contenedor-input-Contacto">
                        <label htmlFor="ContactEmail" className="label-Contacto">Email: </label>
                        <input type="text" name="name" id="ContactEmail" className="input-Contacto"
                            value={correo}
                            placeholder="Ejemplo@correo.com"
                            onChange={handleChangeCorreo} />
                    </div>
                    <div className="contenedor-input-Contacto">
                        <label htmlFor="ContactPhone" className="label-Contacto">Número de teléfono: </label>
                        <input type="text" name="name" id="ContactPhone" className="input-Contacto"
                            value={telefono}
                            placeholder="(123) 456-7890"
                            onChange={handleChangeTelefono}
                        />
                    </div>
                    <div className="contenedor-input-2-Contacto">
                        <label htmlFor="ContactDescr" className="label-Contacto">Descripción: </label>
                        <textarea id="ContactDescr" className="input-2-Contacto  resize-none"
                            value={desc}
                            placeholder=""
                            onChange={handleChangeDesc}
                        />
                    </div>
                    <button className="boton-forms-Contacto" onClick={handleEnvioDatos}>Cotiza Ahora</button>
                </div>
                <div className="contenedor-informacion-Contacto">
                    <div className="informacion-Contacto">
                        <h1 className="titulo-informacion-Contacto">Horario <br /> de atención</h1>
                        <p className="parrafo-Contacto"><span className="font-bold">Lun-Vier: </span> 8:30am - 5:30pm</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Sábado: </span> 8:30am - 1:30pm</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Domingo: </span> Cerrado</p>
                    </div>
                    <div className="informacion-Contacto">
                        <h1 className="titulo-informacion-Contacto">Contacto</h1>
                        <p className="parrafo-Contacto"><span className="font-bold">Teléfono: </span> +1 210 775 7644</p>
                        <p className="parrafo-Contacto"><span className="font-bold">Email: </span> info@cavialife.com</p>

                    </div>
                </div>
            </div>
        </section>
    )
}