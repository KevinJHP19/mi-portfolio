import Image from "next/image";

export default function About() {
    return (
        <section className="p-6 max-w-7xl mx-auto" tabIndex={0} id="about pt-[100px] pb-[1000px]">
            <div className="container flex justify-center">
                <h1 
                    className="text-center text-lg border-b-4 border-[#7843e9] inline-block px-4 py-2 tracking-wide font-bold text-[37.7px]"
                    tabIndex={0}
                >
                    ACERCA DE MÍ
                </h1>
            </div>      
            <p className="text-center mt-4 text-[#666666] light text-light text-[20px] xl:ps-[150px] xl:pe-[100px]" tabIndex={0}>
                Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales en términos de programación y tecnología.
            </p>
            <div id="sobremi" className="container xl:flex mt-8 justify-center gap-8">
                <div id="conoceme" className="xl:w-1/2 px-6 py-4" tabIndex={0}>
                    <h2 className="text-start text-xl text-[28px] font-semibold" tabIndex={0}>¡Conóceme!</h2>
                    <p className="text-left font-normal mt-2 text-[#555555]  text-[16.992px]" tabIndex={0}>
                        Soy un desarrollador web junior con experiencia en la creación y administración de datos de páginas web. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                        
                        
                    </p>
                    <p className="text-left  font-normal mt-2 text-[#555555]  parabout leading-relaxed text-[16.992px]" tabIndex={0}>
                        Hace poco andaba haciendo un grado superior de desarrollo de aplicacion web, donde aprendí a programar en PHP y JavaScript
                        y a utilizar bases de datos como MySQL. También tengo experiencia en el uso de frameworks como Laravel y Next.js, así como en la creación de interfaces de usuario atractivas y funcionales utilizando Tailwind CSS y Bootstrap.
                    </p>
                    
                </div>
                <div id="mishabilidades" className="xl:w-1/2 xl:border-l px-6 py-4 mt-8 xl:mt-0" tabIndex={0}>
                    <h2 className="lg:text-start xs:text-center text-[28px]  font-semibold" tabIndex={0}>Mis habilidades</h2>
                    <ul className="mt-4 flex flex-wrap justify-start gap-3">
                        <li className="flex items-center gap-2 a px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="HTML">
                            <Image
                                src="/icons8-html.svg"
                                alt="HTML"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            HTML
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="CSS">
                            <Image
                                src="/icons8-css.svg"
                                alt="CSS"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            CSS
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Javascipt">
                            <Image
                                src="/Javascript.svg.png"
                                alt="JavaScript"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            JavaScript
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="React">
                            <Image
                                src="/react-1.svg"
                                alt="React"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            React
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Node.js">
                            <Image
                                src="/icons8-nodejs.svg"
                                alt="Node.js"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            Node.js
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="GitHub">
                            <Image
                                src="/Octicons-mark-github.svg"
                                alt="GitHub"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            GitHub
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="MySQL">
                            <Image
                                src="/mysql-logo.svg"
                                alt="MySQL"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            MySQL
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="PHP">
                            <Image
                                src="/icons8-php.svg"
                                alt="PHP"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            PHP
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Tailwind CSS">
                            <Image
                                src="/icons8-viento-de-cola.svg"
                                alt="Tailwind CSS"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            Tailwind CSS
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Bootstrap">
                            <Image
                                src="/icons8-oreja.svg"
                                alt="Bootstrap"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            Bootstrap
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Laravel">
                            <Image
                                src="/laravel.svg"
                                alt="Laravel"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            Laravel
                        </li>
                        <li className="flex items-center gap-2 px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm" title="Next.js">
                            <Image
                                src="/nextjs-icon.svg"
                                alt="Next.js"
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                            Next.js
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
}
