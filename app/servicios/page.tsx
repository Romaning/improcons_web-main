import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "animate.css";

// Array de objetos para el carousel (Modificar en base a los servicios que se quieran mostrar)
const slides2 = [
  {
    title: "Mantenimiento",
    subtitle: "¡A los pits!",
    paragraph:
      "Te ofrecemos un servicio post venta para asegurar la óptima condición y durabilidad de tus productos. Nuestro equipo de expertos realiza inspecciones, ajustes y limpieza periódica para un rendimiento continuo y eficiente. Confía en nosotros para mantener un ambiente limpio, seguro y funcional en tu hogar o proyecto de construcción.",
  },
  { title: "Slide 2", paragraph: "This is the second slide" },
  { title: "Slide 3", paragraph: "This is the third slide" },
];

export default function Servicios() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between bg-gradient-custom">
        <Navbar />

        {/* Banner Título */}
        <div className="w-full flex flex-col content-start px-7 lg:px-10 mt-32 sm:mt-20 pt-11 lg:mt-32 font-raleway font-extrabold text-4xl lg:text-7xl">
          <h1 className="text-second pb-5 tracking-wide">Servicios</h1>
          <p className="text-white pb-8 animate__animated animate__fadeInLeft">
            Te mereces la experiencia completa
          </p>
        </div>

        {/* Cards de info sobre servicios */}
        <div className="w-full bg-white flex flex-col gap-y-6 md:flex-row justify-between px-6 lg:px-10 py-5">
          <div
            id="transporte"
            className=" w-full mr-2 lg:py-5 h-[448px] lg:h-[830px] bg-gray-300 rounded-md items-center flex flex-col"
          >
            <h1 className="text-second font-extrabold text-3xl md:text-base lg:text-5xl py-4 md:py-6 lg:py-12 font-raleway">
              Transporte a obra
            </h1>
            <div className="w-full h-[150px] lg:h-[350px]">
              <img
                className="w-full h-full object-cover"
                src="/images/entregaim.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row w-full text-second items-center justify-center py-4 lg:py-12 px-6 lg:px-12">
              <div className="w-[30%] flex flex-col gap-3">
                <h1 className="font-bold text-sm lg:text-2xl text-right pr-2 md:pr-10 font-raleway">
                  Justo en tu puerta
                </h1>
                <h1 className="bg-tertiary text-white text-sm lg:text-xl m-auto w-fit px-1 font-raleway font-bold">
                  Cotización
                </h1>
              </div>
              <div className="w-[70%] px-3">
                <p className="font-normal text-justify text-sm lg:text-xl font-lato">
                  Una solución logística integral y eficiente pensada para
                  nuestros clientes del sector de la construcción. Nuestro
                  equipo altamente capacitado se encargará de llevar hasta la
                  puerta de tu proyecto todos los materiales que necesitas,
                  puntualmente y en perfectas condiciones.{" "}
                </p>
              </div>
            </div>
          </div>

          <div
            id="instalacion"
            className="w-full md:ml-2 lg:py-5 h-[448px] lg:h-[830px] bg-gray-300 rounded-md items-center flex flex-col"
          >
            <h1 className="text-second font-extrabold text-3xl md:text-base lg:text-5xl py-4 md:py-6 lg:py-12 font-raleway">
              Instalación
            </h1>
            <div className="w-full h-[150px] lg:h-[350px]">
              <img
                className="w-full h-full object-cover"
                src="/images/entregaim.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-row w-full text-second items-center justify-center py-4 lg:py-12 px-6 lg:px-12">
              <div className="w-[30%] flex flex-col gap-3">
                <h1 className="font-bold text-sm lg:text-2xl text-right pr-2 md:pr-10 font-raleway">
                  Déjaselo a los expertos
                </h1>
                <h1 className="bg-tertiary text-white text-sm lg:text-xl m-auto w-fit px-1 font-raleway font-bold">
                  Cotización
                </h1>
              </div>
              <div className="w-[70%] px-3">
                <p className="font-normal text-justify text-sm lg:text-xl font-lato">
                  Un servicio completo y profesional para asegurar que todos los
                  productos sean colocados con precisión y excelencia. Nuestros
                  técnicos especializados se encargan de cada detalle,
                  liberándote de preocupaciones y ahorrándote tiempo y recursos.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel de objetos (datos de los servicios) */}
        <div id="venta" className="w-full bg-gradient-custom text-center">
          <Carousel autoSlide={true}>
            {slides2.map((s) => (
              <div
                key={s.title}
                className="object-fill min-w-full h-[450px] py-16 md:py-9"
              >
                <h2 className="text-second font-bold text-4xl font-raleway">
                  {s.title}
                </h2>
                <h2 className="text-second font-raleway text-3xl pb-10 md:pb-20">
                  {s.subtitle}
                </h2>
                <p className="px-10 md:px-20 text-base lg:text-xl text-second font-lato">
                  {s.paragraph}
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        <Footer />
      </div>
    </>
  );
}
