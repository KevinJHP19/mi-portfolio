export default function About() {
    return (
        <section className="p-6 max-w-7xl mx-auto">
            <div className="container flex justify-center">
                <h1 
                    className="text-center text-lg border-b-4 border-[#7843e9] inline-block px-4 py-2 tracking-wide font-bold text-[37.7px]"
                >
                    ACERCA DE MÍ
                </h1>
            </div>      
            <p className="text-center mt-4 text-gray-700 leading-relaxed">
                Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales en términos de programación y tecnología.
            </p>
            <div id="sobremi" className="container xl:flex mt-8 justify-center gap-8">
                <div id="conoceme" className="xl:w-1/2 px-6 py-4">
                    <h2 className="text-center text-xl font-semibold">¡Conóceme!</h2>
                    <p className="text-left mt-2 text-[#555555] leading-relaxed">
                        Soy un desarrollador web junior con experiencia en la creación y administración de datos de páginas web. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    </p>
                    <p>

                    </p>
                </div>
                <div id="mishabilidades" className="xl:w-1/2 xl:border-l px-6 py-4 mt-8 xl:mt-0">
                    <h2 className="text-center text-xl font-semibold">Mis habilidades</h2>
                    <ul className="mt-4 flex flex-wrap justify-start gap-3">
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">HTML</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">CSS</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">JavaScript</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">React</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">Node.js</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">GitHub</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">MySQL</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">PHP</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">Tailwind CSS</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">Bootstrap</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">Laravel</li>
                        <li className="px-6 py-2 bg-[#99999980] text-[#666666] rounded-lg shadow-sm ">Next.js</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
