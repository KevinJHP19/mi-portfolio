

export default function Home() {
  return (
    <div className="w-full">
      
      <div id="presentacion"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JheSUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
        className="h-screen flex items-center justify-center text-BLACK text-5xl font-bold">
        <div className=" bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-center ">HOLA, YO SOY KEVIN HUAMAN.</h1>
          <div className="font-normal text-2xl md:m-[40px] md:ps-[100px] md:pe-[100px] lg:ps-[150px] xl:ps-[450px] xl:pe-[450px]  text-gray-700 ">
            <p className="text-center mt-4">Un desarrollador web junior orientado a la creacion y administracion de datos de paginas webs.</p>
          
          </div>
          <div id="button" className="flex justify-center align-items-center ">
            <button className="bg-purple-500 hover:transition text-white font-bold py-2 px-4 rounded hover:-translate-y-2  transform duration-200 ps-[70px] pe-[70px] pt-[10px] pb-[10px] text-2xl">
             Proyectos
            </button>  
          </div>

          
          
        </div>
          

      </div>
      
    </div>
  );
}
