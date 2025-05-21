export default function Projects(){

    return (
        <section className="p-6 max-w-7xl mx-auto mt-[50px] pt-[150px]" id="proyectos">
            <div className="header-projects container flex justify-center">
                <h2 className="text-center text-lg border-b-4 border-[#7843e9] inline-block px-4 py-2 tracking-wide font-bold text-[37.7px]"
                    tabIndex={0}>PROYECTOS</h2>
                
            </div>
            <p className="text-center mt-4 text-[#666666] light text-light text-[20px] xl:ps-[150px] xl:pe-[100px]" tabIndex={0}>
                Aquí encontrarás algunos de los proyectos que he creado, y cada proyecto se mostraran las tecnologias utilizadas y un enlace al repositorio y al despliegue.
            </p>
            
            <div id="proyectos" className="mt-[150px]">
                <div className="flex flex-col md:flex-row  gap-10 xl:mb-[50px]">
                    <div className="image flex-shrink-0">
                        <img
                            src="portada_projectovimeo.png"
                            alt="proyecto1"
                            width={650}
                            height={150}
                            
                        />
                    </div>
                    <div className="info flex-1">
                        <h3 className="text-center md:text-left text-lg px-4 py-2 tracking-wide font-bold text-[28px]">
                            Proyecto Vimeo
                        </h3>
                        <p className="text-justify text-[#666666] mt-2">
                            Este es un proyecto que es una reecreacion de la pagina principal de vimeo con todas las animaciones que tiene su pagina principal.
                        </p>
                        <div className="skills mt-4 flex flex-wrap gap-3">
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Bootstrap 5
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                HTML
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                CSS
                            </span>
                        </div>
                        <div className="buttons mt-6 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/KevinJHP19/m9-vimeo-uf2"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Repositorio
                            </a>
                            <a
                                href="https://m9-vimeo-uf2.vercel.app/"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Producción
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-10 xl:mb-[50px]">
                    <div className="image flex-shrink-0">
                        <img
                            src="portada_agenBootstrap.png"
                            alt="proyecto1"
                            width={650}
                            height={150}
                            
                        />
                    </div>
                    <div className="info flex-1">
                        <h3 className="text-center md:text-left text-lg px-4 py-2 tracking-wide font-bold text-[28px]">
                            Proyecto Agent Boostrap
                        </h3>
                        <p className="text-justify text-[#666666] mt-2">
                            Este proyecto es una página web de un agente inmobiliario, donde se pueden noticias y sus detalles con comentarios. Utiliza Bootstrap 5 para el diseño responsivo y PHP para la gestión de datos.
                        </p>
                        <div className="skills mt-4 flex flex-wrap gap-3">
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Bootstrap 5
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                CSS
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                PHP
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Mysql
                            </span>
                        </div>
                        <div className="buttons mt-6 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/KevinJHP19/M7-DAW2HuamanPinto-FPLLEFIA/tree/uf3/agen-bootstrap-main"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Repositorio
                            </a>
                            <a
                                href="https://kevinjhp19.alwaysdata.net/proyectoagen/theme/index.php"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Producción
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-10 xl:mb-[50px]">
                    <div className="image flex-shrink-0">
                        <img
                            src="portada_galerium.png"
                            alt="proyecto1"
                            width={650}
                            height={150}
                            
                        />
                    </div>
                    <div className="info flex-1">
                        <h3 className="text-center md:text-left text-lg px-4 py-2 tracking-wide font-bold text-[28px]">
                            Proyecto Galerium
                        </h3>
                        <p className="text-justify text-[#666666] mt-2">
                            Este proyecto es una pagina web de una galería de imagenes, donde se pueden ver las imágenes y sus detalles. Utiliza Bootstrap 5 para el diseño responsivo y PHP para la gestión de datos.
                        </p>
                        <div className="skills mt-4 flex flex-wrap gap-3">
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Bootstrap 5
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                HTML
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                CSS
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                PHP
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Mysql
                            </span>
                        </div>
                        <div className="buttons mt-6 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/KevinJHP19/ProjectoFinal"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Repositorio
                            </a>
                            <a
                                href="https://kevinjhp19.alwaysdata.net/proyectofinal/"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Producción
                            </a>
                        </div>
                    </div>


                </div>
                <div className="flex flex-col md:flex-row  gap-10 xl:mb-[50px]">
                    <div className="image flex-shrink-0">
                        <img
                            src="portada_gestion.png"
                            alt="proyecto4"
                            width={650}
                            height={150}
                            
                        />
                    </div>
                    <div className="info flex-1">
                        <h3 className="text-center md:text-left text-lg px-4 py-2 tracking-wide font-bold text-[28px]">
                            Proyecto Vimeo
                        </h3>
                        <p className="text-justify text-[#666666] mt-2">
                            Este es un proyecto que es un proyecto de gestion de incidencias, donde se pueden ver las incidencias y sus detalles. Utiliza Bootstrap 5 para el diseño responsivo y localStorage para la gestión de datos .
                        </p>
                        <div className="skills mt-4 flex flex-wrap gap-3">
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Bootstrap 5
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                HTML
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                CSS
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                React
                            </span>
                            <span className="inline-block bg-[#99999980] text-[#666666] text-sm px-3 py-1 rounded-full">
                                Node.js
                            </span>
                        </div>
                        <div className="buttons mt-6 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/KevinJHP19/Projecto-Gestiondeincidencias/tree/main"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Repositorio
                            </a>
                            <a
                                href="https://projecto-gestiondeincidencias-flax.vercel.app/iniciarsesion"
                                target="_blank"
                                
                                className="bg-[#7843e9] text-white px-4 py-2 rounded-md transform transition-transform duration-300 hover:-translate-y-2"
                            >
                                Ver Producción
                            </a>
                        </div>
                    </div>
                </div>

                
                
            </div>
            
        </section>

    )
}