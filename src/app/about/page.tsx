


import "../globals.css";
export default function Home(){

    

    return (
        <section className="border">
            <div className="flex justify-center">
                <h1 className=" text-center text-lg border-b-4 border-[] inline-block px-4 py-2 tracking-wide font-bold text-[37.7px] " style={{color :"rgb(120, 67, 233)"}}>ACERCA DE MÍ</h1>
            </div>      
            <p className="text-center mt-4 ">
                Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales en términos de programación y tecnología.
            </p>
            <div id="sobremi" className="container xl:flex mt-8 border xl:ms-[200px]">
                <div id="conoceme" className="xl:w-1/2 px-4">
                    <h2 className="text-center text-xl font-semibold">¡Conóceme!</h2>
                    <p className="text-center mt-2">
                        Soy un desarrollador web junior con experiencia en la creación y administración de datos de páginas web. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades constantemente.
                    </p>
                </div>
                <div id="mishabilidades" className="xl:w-1/2  border px-4 mt-8 xl:mt-0">
                    <h2 className="text-center text-xl font-semibold">Mis habilidades</h2>
                    <ul className=" mt-4  gap-2">
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">HTML</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">CSS</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">JavaScript</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">React</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">Node.js</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">GitHub</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">MySQL</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">PHP</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">Tailwind CSS</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">Bootstrap</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">Laravel</li>
                        <li className="px-6 py-2 inline-block bg-gray-300 text-gray-700 rounded m-2">Next.js</li>
                        

                        </ul>
                </div>
            </div>
        </section>
    )
}