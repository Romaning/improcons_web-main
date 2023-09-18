"use client";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import YoutubeVideo from "@/components/Youvideo";

import "animate.css";

// Para imagenes colocar rutas de imagenes en el array y reemplazar el Carousel por esto:
// const slides = ["images/im1.jpg", "images/im2.jpg", "images/im3.jpg"];

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

export default function QuienesSomos() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Navbar />
        <div className="min-h-screen w-full bg-gradient-custom-4">
          {/* Banners inicio */}
          <div className="w-full min-h-screen flex justify-center items-center flex-col px-10 mt-10 lg:mt-5 font-raleway font-bold text-5xl sm:text-6xl lg:text-[110px] uppercase">
            <div className="flex lg:flex-row flex-col sm:flex-col space-x-8 animate__animated animate__fadeInUp">
              <p className="text-white tracking-wide pb-8 flex">
                ¿Qu{" "}
                <img
                  className="h-[0.85em] w-3 sm:h-[0.85em] sm:w-3 lg:w-4 lg:h-[0.85em] mx-2"
                  src="images/fondoiazc.png"
                  alt=""
                />
                énes
              </p>
              <p className="font-raleway font-bold text-white lg:text-[110px]">
                somos?
              </p>
            </div>
          </div>
          <div className="w-full h-screen lg:justify-center lg:text-center px-10 lg:mt-5 font-raleway font-bold text-5xl sm:text-6xl lg:text-[110px] uppercase pt-[40%] sm:pt-[30%] lg:pt-0 animate__animated animate__fadeInUp">
            <div className="text-white tracking-wide sm:pb-5 lg:pb-8 flex justify-center">
              Un v
              <img
                className="h-[0.85em] w-3 sm:h-[0.85em] sm:w-3 lg:w-4 lg:h-[0.85em] mx-2"
                src="images/fondoiazc.png"
                alt=""
              />
              deo
            </div>
            <p className="text-white tracking-wide text-center leading-snug lg:leading-normal lg:px-[21%] sm:px-[25%]">
              vale más que mil palabras
            </p>
          </div>

          {/* Video institucional */}
          <div id="video-institucional" className="w-full min-h-screen">
            <YoutubeVideo />
          </div>

          {/* Banner Políticas de Calidad */}
          <div
            id="politica-calidad"
            className="min-h-screen w-full flex flex-col justify-center sm:flex-col sm:justify-center lg:flex-row items-center "
          >
            <div className="sm:w-full xl:w-[50%] uppercase sm:items-center lg:text-right leading-none">
              <h1 className="text-white font-raleway font-bold text-5xl md:text-6xl lg:text-[110px] px-11 text-right sm:text-center lg:text-right tracking-wide animate__animated animate__fadeInUp">
                Políticas
              </h1>
              <div className="text-white text-right font-raleway font-bold text-5xl md:text-6xl lg:text-[110px] flex px-10 pb-6 justify-end sm:justify-center lg:justify-end tracking-wide md:pb-4 animate__animated animate__fadeInUp">
                de cal
                <img
                  className="w-2 h-[0.85em] sm:w-4 sm:h-[0.85em] lg:h-[0.85em] mx-2"
                  src="images/fondoiazc.png"
                  alt=""
                />
                dad
              </div>
              <p className="text-tertiary text-2xl sm:text-3xl lg:text-4xl font-raleway font-bold tracking-wider text-right px-12 pb-5 sm:text-center lg:text-right md:pb-16">
                Te damos lo mejor de nosotros
              </p>
            </div>
            <div className="sm:w-full lg:w-[50%]">
              <p className="text-white text-justify md:px-[120px] px-12 lg:px-20 text-base sm:text-xl font-raleway">
                En IMPROCONS, empresa con una sólida trayectoria en Bolivia
                desde 1994, nos dedicamos a ofrecer soluciones innovadoras para
                la construcción y el hogar, brindando bienestar y elegancia a
                nuestros clientes. Nuestra tecnología avanzada respalda la
                calidad de nuestros productos, respaldados por una garantía real
                en Bolivia. Nuestro compromiso con el servicio al cliente es
                insuperable, ofreciendo una atención profesional y personalizada
                que nos ha ganado la confianza de ingenieros, arquitectos y
                empresas constructoras.
              </p>
            </div>
          </div>

          {/* Banner Valores */}
          <div className="w-full min-h-screen flex justify-center flex-col items-center px-5 sm:px-10 font-raleway font-bold uppercase leading-none ">
            <div className="flex lg:flex-row flex-col sm:flex-col lg:space-x-8 animate__animated animate__fadeInUp">
              <p className="text-white tracking-wide text-5xl sm:text-5xl lg:text-[110px]">
                Los valores
              </p>
              <p className="text-white justify-center tracking-wide pb-4 sm:pb-8 flex text-5xl sm:text-5xl lg:text-[110px]">
                si
                <img
                  className="w-3 h-[0.85em] sm:w-4 sm:h-[44px] lg:h-[0.85em] mx-2 ml-5 sm:ml-5 lg:ml-8"
                  src="images/fondoiazc.png"
                  alt=""
                />{" "}
                mportan
              </p>
            </div>
            <div className="w-full sm:text-center lg:text-right px-5 sm:px-[140px]">
              <p className="text-tertiary font-raleway font-bold text-right text-xl sm:text-3xl lg:text-4xl">
                Porque nos identifican
              </p>
            </div>
          </div>
          <div
            id="valores"
            className="w-full min-h-screen flex flex-col sm:flex-col lg:flex-row  justify-center px-6"
          >
            <div className=" sm:w-full xl:w-[50%] flex flex-col">
              <div className="h-[50%] sm:items-center lg:pl-[140px] flex flex-col justify-center">
                <div className="sm:w-[400px] lg:w-[80%]">
                  <h1 className="text-tertiary font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl uppercase sm:pb-5 lg:pb-10">
                    Ética
                  </h1>
                  <p className="text-white text-sm sm:text-base lg:text-2xl font-raleway pb-6 sm:pb-12">
                    Actuamos con honestidad, integridad, <br /> equidad y
                    justicia, guiando todas <br /> nuestras acciones por valores
                    éticos.
                  </p>
                </div>
              </div>
              <div className="h-[50%] sm:items-center lg:pl-[290px] flex flex-col lg:justify-center">
                <div className="sm:w-[400px] lg:w-[80%]">
                  <h1 className="text-tertiary font-raleway font-bold text-2xl sm:text-3xl lg:text-5xl uppercase sm:pb-5 lg:pb-10">
                    Superación
                  </h1>
                  <p className="text-white text-sm sm:text-base lg:text-2xl font-raleway pb-6 sm:pb-12">
                    Buscamos la excelencia siendo altamente <br /> competitivos,
                    mejorando constantemente <br /> nuestros productos,
                    servicios y procesos.
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:w-full xl:w-[50%]">
              <div className="h-[50%] flex flex-col lg:justify-center sm:items-center">
                <div className="sm:w-[450px] lg:w-full sm:pl-16 pl-7">
                  <h1 className="text-tertiary font-raleway font-bold uppercase text-2xl sm:text-3xl lg:text-5xl sm:pb-5 lg:pb-10">
                    Innovación
                  </h1>

                  <p className="text-white text-sm font-raleway sm:text-base lg:text-2xl pb-6 sm:pb-12">
                    Fomentamos la innovación en todas las áreas <br />
                    funcionales, desde productos y servicios hasta <br />{" "}
                    recursos humanos y gestión empresarial.
                  </p>
                </div>
              </div>
              <div className="h-[50%] lg:pr-[140px] flex flex-col lg:justify-center sm:items-center lg:pl-[140px]">
                <div className="sm:w-[450px] lg:w-full sm:pl-16 pl-7">
                  <h1 className="text-tertiary font-raleway font-bold uppercase text-2xl sm:text-3xl lg:text-5xl sm:pb-5 lg:pb-10">
                    Sustentabilidad
                  </h1>
                  <p className="text-white text-sm font-raleway sm:text-base lg:text-2xl pb-6 sm:pb-12">
                    Trabajamos con responsabilidad social,
                    <br /> preservando el medio ambiente y promoviendo <br /> el
                    bien común en todas nuestras decisiones.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full justify-center items-center flex text-center uppercase ">
            <div className="w-[200px] sm:w-[300px] lg:w-[70%] sm:text-center tracking-widest">
              <p className="text-white font-raleway font-bold text-5xl sm:text-6xl leading-tight sm:leading-tight lg:text-[110px]">
                ¿Dónde estamos y hacia dónde vamos?
              </p>
            </div>
          </div>

          {/* Banner Misión y Visión */}
          <div
            id="misionvision"
            className="min-h-screen w-full flex flex-col sm:flex-col lg:flex-row items-center justify-center "
          >
            <div className="md:w-full lg:w-[50%] lg:border-r border-tertiary">
              <div className="flex flex-col justify-center items-center">
                <div className="text-white tracking-wider flex font-raleway text-5xl sm:text-6xl lg:text-[110px] font-bold w-full justify-center sm:pb-5 lg:pb-20 uppercase animate__animated animate__fadeInUp">
                  M{" "}
                  <img
                    className="w-3 h-[0.85em] sm:w-4 sm:h-[0.85em] lg:h-[0.85em] mx-2"
                    src="images/fondoiazc.png"
                    alt=""
                  />{" "}
                  sión
                </div>
                <p className="text-white text-sm sm:text-base lg:text-xl font-raleway lg:px-[140px] text-justify pb-10 sm:pb-20 lg:pb-[120px] border-b border-tertiary mx-12 sm:border-b lg:border-none sm:mx-32 lg:mx-0 sm:border-tertiary">
                  Satisfacer las necesidades del mercado de la construcción y el
                  hogar, brindando materiales elegantes, exclusivos y de
                  excelente calidad, que se identifiquen con cada uno de
                  nuestros clientes y que superen sus expectativas, con una
                  atención profesional y personalizada.
                </p>
              </div>
            </div>
            <div className="md:w-full lg:w-[50%]">
              <div className="flex flex-col items-center justify-center lg:pb-[9.5rem]">
                <div className="text-white tracking-wider flex font-raleway text-5xl sm:text-6xl pt-10 sm:pt-9 lg:pt-0 lg:text-[110px] font-bold w-full justify-center sm:pb-5 lg:pb-20 uppercase animate__animated animate__fadeInUp">
                  V{" "}
                  <img
                    className="w-3 h-[0.85em] sm:w-4 sm:h-[0.85em] lg:h-[0.85em] mx-2"
                    src="images/fondoiazc.png"
                    alt=""
                  />{" "}
                  sión
                </div>
                <p className="text-white text-sm sm:text-base lg:text-xl font-raleway px-16 sm:px-[140px] text-justify">
                  Ser una empresa líder, innovadora, reconocida a nivel nacional
                  e internacional, elevando el estilo de vida de las personas a
                  través del desarrollo del buen vivir.
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-screen w-full flex items-center justify-center text-center ">
            <div className="lg:w-[80%] sm:w-[60%]">
              <p className="text-white font-raleway font-bold text-5xl px-4 leading-tight sm:text-[60px] lg:text-[110px] uppercase sm:leading-[1.2em] lg:leading-[1.5em] tracking-wider">
                Déjanos contarte una historia
              </p>
            </div>
          </div>

          {/* Banners Historia */}
          <div
            id="historia"
            className="w-full h-screen flex justify-center items-center font-raleway font-bold text-5xl md:text-6xl lg:text-[110px] uppercase "
          >
            <div className="flex lg:flex-row flex-col sm:flex-col leading-[1.2em] lg:space-x-8 animate__animated animate__fadeInUp">
              <p className="text-white tracking-wider text-center">Nuestra</p>
              <p className="text-white tracking-wider pb-8 flex">
                h{" "}
                <img
                  className="w-3 h-[0.95em] sm:w-3 sm:h-[0.95em] lg:w-5 lg:h-[0.95em] mx-2"
                  src="images/fondoiazc.png"
                  alt=""
                />{" "}
                storia
              </p>
            </div>
          </div>

          {/* Carousel */}
          <div className="min-h-screen w-full flex items-center ">
            <div className="flex flex-col w-full px-4 lg:mx-16">
              <div className="w-full bg-gradient-custom text-center mb-8">
                <Carousel autoSlide={true}>
                  {/* {slides.map((s) => (
          <img key={s} src={s} className="object-fill min-w-full h-[400px]" />
        ))} */}
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
              <p className="text-white font-raleway text-sm sm:text-xl px-3 sm:px-6 lg:px-24 text-center">
                Das Unternehmen wurde 1994 in Bolivien gegründet und blickt
                derzeit auf 25 Jahre Erfahrung in der Vermarktung und
                Herstellung innovativer Lösungen für den Bau und die Wohnung
                zurück, die das Wohlbefinden, die Gesundheit und die Eleganz in
                den Räumen unserer Kunden und Familien fördern.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
