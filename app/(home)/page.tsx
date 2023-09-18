"use client";
import { useEffect, useState } from "react";
import "animate.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import useInfoModal from "@/hooks/useInfoModal";
import InfoModal from "@/components/InfoModal";

import $ from "jquery";
import { useGet } from "@/hooks/useGet";

export default function Home() {
  const [prodSelected, setProdSelected] = useState<any>(null);
  const { isOpen, closeModal } = useInfoModal();

  const { res } = useGet<any>("v1/principal/");

  useEffect(() => {
    var $cell = $(".card");

    //abre y cierra el expander cuando hacemos click en la card
    $cell.find(".js-expander").on("click", function () {
      var $thisCell = $(this).closest(".card");

      if ($thisCell.hasClass("is-collapsed")) {
        $cell
          .not($thisCell)
          .removeClass("is-expanded")
          .addClass("is-collapsed")
          .addClass("is-inactive");
        $thisCell.removeClass("is-collapsed").addClass("is-expanded");

        if ($cell.not($thisCell).hasClass("is-inactive")) {
          //no hace nada
        } else {
          $cell.not($thisCell).addClass("is-inactive");
        }
      } else {
        $thisCell.removeClass("is-expanded").addClass("is-collapsed");
        $cell.not($thisCell).removeClass("is-inactive");
      }
    });

    //cierra el expander cuando hacemos click
    $cell.find(".js-collapser").on("click", function () {
      var $thisCell = $(this).closest(".card");

      $thisCell.removeClass("is-expanded").addClass("is-collapsed");
      $cell.not($thisCell).removeClass("is-inactive");
    });
  }, []);

  // Filtrado para mostrar cantidad especifica de clases
  const data = res?.clases.filter((item: any, index: number) => index < 2);

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-principal">
      <InfoModal prod={prodSelected} visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="min-h-screen">
        {/* Banner principal de título e imagen */}
        <div className="w-full h-9 flex flex-row mt-48 mb-7 px-5 justify-center sm:items-center sm:mt-20 sm:pb-12 sm:pt-24 xl:py-[105px] xl:mt-32 sm:justify-between sm:px-8 xl:px-16 xl:items-center">
          <h1 className="text-white text-4xl sm:text-[40px] uppercase font-normal xl:text-[105px] font-lato animate__animated animate__fadeInUp">
            Inspira tu espacio
          </h1>
          <div className="sm:w-32 sm:h-16 xl:w-[320px] xl:h-[224px]">
            <img
              className="xl:w-full xl:h-full sm:object-fill xl:object-cover hidden sm:block animate__animated animate__fadeInUp"
              src="/images/flechasg.png"
              alt=""
            />
          </div>
        </div>

        {/* Slider de imágenes por clases */}
        <div>
          {/* mapeo de las clases */}
          {data?.map((item: any, index: number) => (
            <div key={index} className="wrapper">
              <div>
                <div className="px-4 lg:px-16 text-white">
                  <h1 className="uppercase text-white sm:text-base xl:text-2xl font-raleway">
                    {item.descripcion}
                  </h1>
                </div>

                {/* mapeo de los tipos de productos */}
                <div className="cards sm:px-8 xl:px-16 slider2 slider">
                  {item.typeProds.map((tipo: any, index: number) => (
                    <div key={index} className="card [ is-collapsed ]">
                      <div className="card__inner [ js-expander ] bg-white flex items-center justify-center overflow-x-visible">
                        {/* <img
                          className="h-full object-fill"
                          src="images/im1.jpg"
                          alt=""
                        /> */}
                        <h1 className="text-second font-raleway font-bold text-base sm:text-lg xl:text-2xl">
                          {tipo.descripcion}
                        </h1>
                      </div>

                      {/* mapeo de los productos */}
                      <div className="card__expander px-0 sm:px-0 xl:px-0 slider2 overflow-x-visible">
                        {tipo.prods.map((prod: any, index: number) => (
                          <div
                            key={index}
                            className="w-[162px] sm:w-[162px] xl:w-[320px] xl:h-[218px] mr-4 sm:mr-4 xl:mr-8"
                          >
                            <ProductCard
                              prod={prod}
                              setProdSelected={setProdSelected}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
