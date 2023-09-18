import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "animate.css";

export default function AsistenciaPage() {
  return (
    <div className="flex flex-col bg-gradient-custom">
      <Navbar />

      {/* Banner de titulo */}
      <div className="w-full flex flex-col content-start px-7 lg:px-16 pt-11 lg:py-[110px] mt-32 sm:mt-20 lg:mt-24 font-raleway font-extrabold text-4xl lg:text-7xl">
        <h1 className="text-second pb-5 tracking-wide">Asistencia</h1>
        <p className="text-white pb-8 animate__animated animate__fadeInLeft">
          Estamos listos para ayudarte
        </p>
      </div>

      <div className="w-full flex flex-col items-center lg:px-16">
        {/* Container info Cochabamba */}
        <div className="w-[100vw] h-[424px] lg:w-full lg:h-[827px] flex flex-row bg-gradient-custom-2 px-4 mb-11 lg:mb-16">
          <div className="w-[35%] md:w-[50%] justify-center items-center flex">
            <h1 className="font-bold text-white text-3xl md:text-6xl lg:text-[160px] leading-none font-raleway">
              COCHA <br /> BAMBA
            </h1>
          </div>
          <div className="w-[65%] md:w-[50%] h-full items-start flex flex-col justify-center text-white text-sm lg:text-xl px-4 lg:px-8 py-6 font-lato">
            <h1>Celular (Galindo)</h1>
            <p className="font-bold">67406869</p>
            <br />
            <h1>Telefonos (Galindo)</h1>
            <p className="font-bold">4247501 - 4406924</p>
            <br />
            <h1>Correo (Galindo)</h1>
            <p className="font-bold">jefeventas.galindo@improcons.com</p>
            <br />
            <div className="w-full h-px bg-tertiary"></div>
            <br />
            <h1>Celular (José Marti)</h1>
            <p className="font-bold">67401389</p>
            <br />
            <h1>Teléfonos (José Marti)</h1>
            <p className="font-bold">4525439 - 4580696</p>
            <br />
            <h1>Correo (José Marti)</h1>
            <p className="font-bold">jefeventas.cobija@improcons.com</p>
            <br />
          </div>
        </div>

        {/* Container info Santa Cruz */}
        <div className="w-[100vw] h-[280px] lg:w-full lg:h-[490px] flex flex-row bg-gradient-principal mb-11 lg:mb-16">
          <div className="w-[65%] md:w-[50%] h-full items-center flex flex-col justify-center text-white text-sm lg:text-xl px-8 py-6 font-lato">
            <div className="text-left">
              <h1>Celular</h1>
              <p className="font-bold">67703561</p>
              <br />
              <h1>Telefonos</h1>
              <p className="font-bold">3587637 - 3570911</p>
              <br />
              <h1>Correo</h1>
              <p className="font-bold">jefeventas.dumont@improcons.com</p>
            </div>
          </div>
          <div className="w-[35%] md:w-[50%] justify-center items-center flex flex-col">
            <p className="font-bold text-white text-3xl md:text-7xl lg:text-[160px] leading-none font-raleway">
              SANTA
              <br />
              CRUZ
            </p>
          </div>
        </div>

        {/* Container info La Paz */}
        <div className="w-full h-[280px] lg:w-full lg:h-[490px] flex flex-row bg-gradient-custom-2 mb-11 lg:mb-16">
          <div className="w-[35%] md:w-[50%] h-full justify-center items-center flex flex-col">
            <p className="font-bold text-white text-3xl md:text-7xl lg:text-[160px] font-raleway">
              LA PAZ
            </p>
          </div>
          <div className="w-[65%] md:w-[50%] h-full items-start flex flex-col justify-center text-white text-sm lg:text-xl px-8 py-6 font-lato">
            <h1>Celular</h1>
            <p className="font-bold">68213846</p>
            <br />
            <h1>Teléfono</h1>
            <p className="font-bold">2247704</p>
            <br />
            <h1>Correo</h1>
            <p className="font-bold">jefeventas.lapaz@improcons.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
