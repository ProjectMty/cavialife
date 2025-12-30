import { Head, Body, Container, Heading, Html, Preview, Section, Tailwind, Text } from '@react-email/components';

interface EmailProps {
    nombre?: string;
    telefono?: string;
    correo?: string;
    desc?: string;
}

const EmailTemplate = ({
    nombre = 'usuario',
    telefono = '123 456 7890',
    correo = 'prueba@gmail.com',
    desc = 'prueba'

}: EmailProps) => {
    const previewText = `Datos de contacto para cotizacion, de ${nombre}!`;


    return (
        <Html>
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Head></Head>
                <Body className="bg-[#edeae0] text-[#000015] font-[MinionPro] py-10 text-[20px]">
                    <Container className="bg-white shadow-lg rounded-2xl mx-auto mt-10 mb-10 p-8 max-w-[520px] border border-gray-200">
                        {/* logo */}
                        <Section className=" text-center mb-6 font-[Premint]">
                            <a
                                href="https://cavialife.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[45px] text-[#013d36] no-underline hover:text-[#8fa59c]"
                            >
                                Cavialife
                            </a>.

                        </Section>

                        <Heading className="text-xl font-bold text-center text-[#0f172a] my-8">
                            Datos de contacto para <span className='text-[#013d36] text-[21px]'>{nombre}</span>.
                        </Heading>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4 text-center">
                            Te compartimos los datos de contacto para una cotización personalizada, mediante{" "}
                            <a
                                href="https://cavialife.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[21px] text-[#013d36] no-underline hover:text-[#8fa59c]"
                            >
                                Cavialife.com
                            </a>.
                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4 text-center">
                            Nombre:{" "}
                            <span className="font-bold text-[#013d36]">{nombre}</span>.
                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4 text-center">
                            Teléfono:{" "}
                            <span className="font-bold text-[#013d36]">{telefono}</span>.

                        </Text>

                        <Text className="text-gray-700 text-base leading-relaxed mb-4 text-center">
                            Correo:{" "}
                            <span className="font-bold text-[#013d36] no-underline text-current">{correo}</span>.

                        </Text>
                        <Text className="text-gray-700 text-base leading-relaxed mb-4 text-center">
                            Descripción:{" "}
                            <span className="font-bold text-[#013d36] ">{desc}</span>.

                        </Text>


                        {/* Footer */}
                        <Text className="text-sm text-gray-500 text-center">
                            Saludos cordiales,
                            <br />
                            <span className="font-semibold text-[#013d36]">El equipo de Cavialife Web</span>
                        </Text>

                        <Text className="text-xs text-gray-400 text-center mt-4">
                            © {new Date().getFullYear()} Cavialife. Todos los derechos reservados.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailTemplate;

