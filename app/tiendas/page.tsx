import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import "animate.css";

export default function Tiendas() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-custom-3">
        <Navbar />
        <div className="min-h-screen">
          <div className="flex-grow">
            <section className="bg-gradient-custom-3 py-8 lg:px-16 min-h-screen">
              {/* Banner Título */}
              <div className="px-6 font-raleway font-bold">
                <h2 className="text-second mb-4 font-extrabold lg:font-bold text-4xl lg:text-7xl mt-36 sm:mt-24 lg:mt-[100px]">
                  Tiendas
                </h2>
                <p className="text-white font-extrabold lg:font-bold text-4xl lg:text-7xl animate__animated animate__fadeInLeft">
                  El hogar de tus productos favoritos
                </p>
              </div>

              {/* Container global */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-0 mt-12 sm:mt-8 xl:mt-[102px]">
                {/* Container Vertical información La Paz */}
                <div className="rounded-lg shadow-md relative sm:mt-48 sm:h-[2405px] xl:mt-[400px] h-[2200px] overflow-y-hidden xl:overflow-y-visible xl:h-[4684px]">
                  {/* Imagen de fondo flecha izquierda */}
                  <div className="sm:h-[2405px] xl:h-[4684px]">
                    <img
                      className="w-full object-cover xl:object-fill sm:h-full lg:h-full"
                      src="images/letraiazc.png"
                      alt=""
                    />
                  </div>

                  <div className="absolute top-[35%] sm:top-[22%] xl:top-[23%] text-center w-full px-6 sm:px-4">
                    <h3 className="uppercase text-second font-lato font-bold text-4xl sm:text-3xl xl:text-5xl pb-8">
                      La Paz
                    </h3>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 lg:pb-16"></div>
                    <div className="text-start text-second justify-center pt-11 xl:pt-[90px] text-xl sm:text-base xl:text-xl xl:px-12 font-lato">
                      <h1>Lunes a Viernes</h1>
                      <p className="font-bold pb-6">
                        8:00 - 12:30 14:30 - 18:30
                      </p>
                      <h1>Sábado</h1>
                      <p className="font-bold">8:30 - 13:30</p>
                    </div>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 pt-11 xl:pt-[160px]"></div>
                    <div className="flex flex-col space-y-8 text-second xl:space-y-11 py-11 lg:pt-[90px] xl:pb-2 px-1 xl:px-12 font-raleway">
                      <h1 className="font-bold text-xl sm:text-lg xl:text-2xl">
                        Miraflores
                      </h1>
                      <img src="images/im1.jpg" alt="" />
                      <p className="text-xl sm:text-sm xl:text-xl">
                        Sobre avenida <strong>Busch</strong> <br />
                        entre calle <strong>Honduras</strong> <br /> y calle{" "}
                        <strong>C Haití</strong>
                      </p>
                    </div>
                    <div className="flex flex-col xl:w-full xl:h-[750px] xl:space-y-11 py-6 xl:pt-[90px] xl:pb-[420px] mx-1 sm:mb-[470px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d402.12791971602263!2d-68.1216286407152!3d-16.49036401141761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206ad18d4379%3A0x57911ccc92451a3b!2sImprocons%20(La%20Paz)!5e0!3m2!1sen!2sbo!4v1693869483274!5m2!1sen!2sbo"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 pt-11 xl:pt-[130px]"></div>
                    <div className="flex flex-col space-y-11 py-6 xl:py-[90px] px-2 sm:px-0 xl:px-12 font-lato">
                      <div className="w-full h-full items-start flex flex-col xl:justify-center text-second text-base sm:text-sm xl:text-xl px-2 xl:px-8 py-6">
                        <h1>Celular</h1>
                        <p className="font-bold">68213846</p>
                        <br />
                        <h1>Teléfono</h1>
                        <p className="font-bold">2247704</p>
                        <br />
                        <h1>Correo</h1>
                        <p className="font-bold">
                          jefeventas.lapaz@improcons.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Container Vertical información Cochabamba */}
                <div className="rounded-lg shadow-md relative overflow-y-hidden sm:h-[2600px] w-full xl:h-[5084px]">
                  {/* Imagen de fondo flecha central */}
                  <div className="sm:h-[2600px] xl:h-[5084px]">
                    <img
                      className="w-full object-cover xl:object-fill sm:h-full lg:h-full"
                      src="images/letraiaz.png"
                      alt=""
                    />
                  </div>

                  <div
                    id="ciudades"
                    className="absolute top-[22%] sm:top-[24%] xl:top-[26%] text-center w-full"
                  >
                    <h3 className="uppercase text-tertiary font-raleway font-bold text-4xl sm:text-3xl xl:text-5xl tracking-wide">
                      Cochabamba
                    </h3>
                    <p className="uppercase my-3 tracking-wide sm:text-sm text-tertiary sm:mb-[100px] xl:mb-[190px]">
                      Donde todo empezó
                    </p>
                    <h1
                      id="horarios"
                      className="text-white font-bold font-raleway text-3xl sm:text-xl mt-6 xl:text-5xl px-1"
                    >
                      Horarios de atención
                    </h1>
                    <div className="text-start text-tertiary justify-center pl-6 xl:pl-12 py-11 sm:py-8 xl:pt-[60px] xl:pb-[140px] text-xl sm:text-base xl:text-xl font-lato">
                      <h1>Lunes a Viernes</h1>
                      <p className="font-bold pb-6">
                        8:00 - 12:30 14:30 - 18:30
                      </p>
                      <h1>Sábado</h1>
                      <p className="font-bold">8:30 - 13:30</p>
                    </div>
                    <h1
                      id="unidades"
                      className="text-white font-bold text-[34px] sm:text-xl xl:text-5xl font-raleway"
                    >
                      Unidades
                    </h1>
                    <div className="flex flex-col space-y-8 text-tertiary sm:py-8 xl:space-y-11 py-11 xl:pt-[70px] xl:pb-[25px] px-5 xl:px-16 font-raleway">
                      <h1 className="font-bold text-xl sm:text-lg xl:text-2xl">
                        Galindo
                      </h1>
                      <img src="images/im1.jpg" alt="" />
                      <p className="text-xl sm:text-sm xl:text-xl">
                        Sobre avenida <strong>Blanco Galindo</strong> <br />
                        entre avenida <strong>Perú</strong> <br /> y calle{" "}
                        <strong>Diego de Almagro</strong>
                      </p>
                    </div>
                    <div className="flex flex-col xl:w-full xl:h-[400px] xl:space-y-10 py-6 sm:py-9 xl:py-[80px] px-5 sm:px-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1903.690073337915!2d-66.17254352881206!3d-17.393534998541114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e37389f64143bb%3A0x7fbaa35871750856!2sImprocons!5e0!3m2!1ses!2sbo!4v1693871002322!5m2!1ses!2sbo"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="flex flex-col space-y-8 sm:space-y-6 text-tertiary xl:space-y-11 py-11 sm:py-2 xl:py-[20px] px-5 sm:px-4 xl:px-16 font-raleway">
                      <h1 className="font-bold text-xl sm:text-lg xl:text-2xl">
                        José Marti
                      </h1>
                      <img src="images/im1.jpg" alt="" />
                      <p className="text-xl sm:text-sm xl:text-xl sm:px-2">
                        Sobre calle <strong>José Marti</strong> <br />
                        casi <strong>Mayor Rocha</strong> a media cuadra <br />{" "}
                        de la plazuela <strong>Cobija</strong>
                      </p>
                    </div>
                    <div className="flex flex-col xl:w-full xl:h-[400px] sm:space-y-6 xl:space-y-9 py-6 sm:py-2 xl:py-[90px] px-5 sm:px-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.8646389246314!2d-66.16371753037487!3d-17.38976789896861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e3740aefb4dc77%3A0x76684fd11b5eb65b!2sImprocons%20Sucursal%20Cbba!5e0!3m2!1ses!2sbo!4v1693871309513!5m2!1ses!2sbo"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                    <h1
                      id="contactos"
                      className="text-white font-bold text-[34px] sm:text-xl xl:text-5xl mt-10 xl:mt-6 font-raleway"
                    >
                      Contactos
                    </h1>
                    <div className="flex flex-col space-y-11 sm:space-y-6 py-6 xl:py-[90px] px-2 xl:px-12 font-lato">
                      <div className="w-full h-full items-start flex flex-col xl:justify-center text-tertiary text-base sm:text-sm xl:text-xl px-2 xl:px-8 py-6">
                        <h1>Celular (Galindo)</h1>
                        <p className="font-bold">67406869</p>
                        <br />
                        <h1>Teléfonos (Galindo)</h1>
                        <p className="font-bold">4247501 - 4406924</p>
                        <br />
                        <h1>Correo (Galindo)</h1>
                        <p className="font-bold">
                          jefeventas.galindo@improcons.com
                        </p>
                      </div>
                      <div className="mx-6 xl:mx-2 border-b-2"></div>
                      <div className="w-full h-full items-start flex flex-col xl:justify-center text-tertiary text-base sm:text-sm xl:text-xl px-2 xl:px-8 py-6">
                        <h1>Celular (José Marti)</h1>
                        <p className="font-bold">67401389</p>
                        <br />
                        <h1>Teléfonos (José Marti)</h1>
                        <p className="font-bold">4525439 - 4580696</p>
                        <br />
                        <h1>Correo (José Marti)</h1>
                        <p className="font-bold">
                          jefeventas.cobija@improcons.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Container Vertical información Santa Cruz */}
                <div className="rounded-lg shadow-md relative sm:mt-48 sm:h-[2405px] xl:mt-[400px] h-[2200px] overflow-y-hidden xl:overflow-y-visible xl:h-[4684px]">
                  {/* Imagen de fondo flecha derecha */}
                  <div className="sm:h-[2405px] xl:h-[4684px]">
                    <img
                      className="w-full object-cover xl:object-fill sm:h-full lg:h-full"
                      src="images/letraiazc.png"
                      alt=""
                    />
                  </div>

                  <div className="absolute top-[35%] sm:top-[22%] xl:top-[23%] text-center w-full px-6 sm:px-4">
                    <h3 className="uppercase text-second font-raleway font-bold text-4xl sm:text-3xl xl:text-5xl pb-8">
                      Santa Cruz
                    </h3>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 xl:pb-12"></div>
                    <div className="text-start text-second justify-center font-lato pt-11 xl:pt-[90px] text-xl sm:text-base xl:px-12 xl:text-xl">
                      <h1>Lunes a Viernes</h1>
                      <p className="font-bold pb-6">
                        8:00 - 12:30 14:30 - 18:30
                      </p>
                      <h1>Sábado</h1>
                      <p className="font-bold">8:30 - 13:30</p>
                    </div>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 pt-11 xl:pt-[160px]"></div>
                    <div className="flex flex-col space-y-8 sm:space-y-4 text-second xl:space-y-[20px] py-11 xl:pt-[90px] xl:pb-px px-1 xl:px-12 font-raleway">
                      <h1 className="font-bold text-xl sm:text-lg xl:text-2xl sm:pb-4 xl:pb-6">
                        Dumont
                      </h1>
                      <img src="images/im1.jpg" alt="" />
                      <p className="text-xl sm:text-sm xl:text-xl sm:pt-4">
                        Sobre avenida <strong>Santos Dumont</strong> <br />
                        entre calle <strong>Choreti</strong> <br /> y calle{" "}
                        <strong>Abapo</strong> <br /> entre{" "}
                        <strong>3er y 4to anillo</strong>
                      </p>
                    </div>
                    <div className="flex flex-col xl:w-full xl:h-[750px] xl:space-y-11 py-6 sm:py-1 xl:pt-[90px] sm:pb-4 xl:pb-[420px] sm:mb-[470px]">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.1577640734483!2d-63.18080317564186!3d-17.805661717768757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e836990ab93b%3A0xf070c6c1d8fe864c!2sImprocons%20Santa%20Cruz!5e0!3m2!1ses!2sbo!4v1693870810738!5m2!1ses!2sbo"
                        width="100%"
                        height="100%"
                        loading="lazy"
                      ></iframe>
                    </div>
                    <div className="mx-1 xl:mx-11 border-b-2 h-5 pt-11 xl:pt-[130px]"></div>
                    <div className="flex flex-col space-y-11 py-6 xl:py-[90px] px-2 xl:px-12">
                      <div className="w-full h-full items-start flex flex-col xl:justify-center text-second text-base sm:text-sm xl:text-xl px-2 sm:px-0 xl:px-8 py-6 font-lato">
                        <h1>Celular</h1>
                        <p className="font-bold">67703561</p>
                        <br />
                        <h1>Teléfono</h1>
                        <p className="font-bold">3587637 - 3570911</p>
                        <br />
                        <h1>Correo</h1>
                        <p className="font-bold">
                          jefeventas.dumont@improcons.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
