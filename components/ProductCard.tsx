import useInfoModal from "@/hooks/useInfoModal";
import React, { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { TiChevronRight } from "react-icons/ti";

interface ProductCardProps {
  prod: any;
  setProdSelected: any;
}

const ProductCard = ({ prod, setProdSelected }: ProductCardProps) => {
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    setProdSelected(prod);
    openModal("1");
  }, [openModal, prod, setProdSelected]);

  console.log(prod);
  return (
    <div className="group col-span relative h-[12vh] w-96">
      {/* Mapeo imagen inicial del producto */}
      <img
        className="
          cursor-pointer 
          object-fill 
          transition 
          duration 
          shadow-xl 
          rounded-md 
          group-hover:opacity-90 
          sm:group-hover:opacity-0 
          delay-300 
          xl:w-[320px]
          xl:h-[218px] 
          sm:w-[162px]
          sm:h-[110px]
          w-[162px]
          h-[110px]
        "
        src={
          prod?.imagenes[0]?.foto !== "No exists"
            ? `http://sies.improcons.com/${prod?.imagenes[0]?.foto.substring(
                1,
                prod?.imagenes[0]?.foto.length
              )}`
            : "images/im1.jpg"
        }
        alt=""
      />
      <div
        className="
          opacity-0
          absolute
          top-0
          transition
          duration-200
          z-10
          visible
          delay-300
          xl:w-full
          w-[270px]
          h-[275px]
          sm:w-[270px]
          sm:h-[275px]
          scale-0
          group-hover:scale-75
          group-hover:-translate-y-[14vw]
          group-hover:-translate-x-[9vw]
          group-hover:opacity-100
          sm:group-hover:scale-90
          sm:group-hover:-translate-y-[8vw]
          sm:group-hover:-translate-x-[1vw]
          xl:group-hover:scale-75
          xl:group-hover:-translate-y-[1vw]
          xl:group-hover:-translate-x-[1vw] 
        "
      >
        {/* Mapeo de imagen de producto cuando se hace hover */}
        <img
          className="
            cursor-pointer
            object-fill
            transition
            duration
            shadow-xl
            rounded-t-md
            xl:w-full
            xl:h-[12vw]
            sm:w-[270px]
            sm:h-[140px]
            w-[270px]
            h-[110px]
          "
          src={
            prod?.imagenes[0]?.foto !== "No exists"
              ? `http://sies.improcons.com/${prod?.imagenes[0]?.foto.substring(
                  1,
                  prod?.imagenes[0]?.foto.length
                )}`
              : "images/im1.jpg"
          }
          alt=""
        />
        <div
          className="
            z-10
            bg-white
            absolute
            w-full
            transition
            shadow-md
            rounded-b-md
          "
        >
          <div className="flex flex-row items-center gap-3 bg-tertiary px-3">
            <p className="text-white font-semibold text-lg xl:text-xl normal-case">
              {prod.descripcionCorta}
            </p>

            <h1 className="hidden md:flex sm:text-xs xl:text-sm text-second xl:pl-12">
              Mas información
            </h1>
            <div
              onClick={handleOpenModal}
              className="
              cursor-pointer
              ml-auto
              group/item
              w-6
              h-6
              lg:w-10
              lg:h-10
              border-white
              border-2
              rounded-full
              flex
              justify-center
              items-center
              transition
              hover:border-neutral-300
              flex-row
              text-sm
            "
            >
              <TiChevronRight className="w-7 h-7 text-second" />
            </div>
          </div>

          <div className="px-4 py-6 flex flex-row justify-between">
            {/* Imagen de Marca */}
            <img
              className="w-[150px] h-12 sm:w-[150px] sm:h-12 xl:w-[200px] xl:h-16"
              src="images/im1.jpg"
              alt=""
            />

            <div className="flex flex-row mt-4 gap-2 items-center">
              <p className="text-xl text-second text-[10px] sm:text-base lg:text-sm xl:text-xl font-lato font-bold">
                Bs. {prod?.prodsEspecYPrecios[0]?.precio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
