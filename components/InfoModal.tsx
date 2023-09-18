import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose, AiFillPlayCircle } from "react-icons/ai";

import useInfoModal from "@/hooks/useInfoModal";
import { on } from "events";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
  prod: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose, prod }) => {
  const [isVisible, setIsVisible] = useState(!!visible);

  const { productId } = useInfoModal();

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="
      z-50
      transition
      duration-300
      bg-black
      bg-opacity-80
      flex
      justify-center
      items-center
      overflow-x-hidden
      overflow-y-auto
      fixed
      inset-0
    "
    >
      <div
        className="
        relative
        w-auto
        mx-auto
        max-w-3xl
        rounded-md
        overflow-hidden
      "
      >
        <div
          className={`
          ${isVisible ? "scale-100" : "scale-0"}
          transform
          duration-300
          relative
          flex-auto
          bg-zinc-900
          drop-shadow-md
        `}
        >
          <div className="relative h-[400px] sm:w-[600px]">
            <div className="w-full h-full">
              {/* Mapeo imagenes de productos en Modal */}
              <img
                className="
              w-full
              brightness-[60%]
              object-fill
              h-full
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
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-tertiary to-transparent opacity-100"></div>
            </div>
            <div
              className="
              cursor-pointer
              absolute
              top-3
              right-3
              h-10
              w-10
              rounded-full
              bg-black
              bg-opacity-70
              flex
              items-center
              justify-center
            "
              onClick={handleClose}
            >
              <AiOutlineClose className="text-white" />
            </div>

            <div
              className="
              absolute
              bottom-[10%]
              left-10
            "
            >
              {/* Nombre producto en Modal */}
              <p className="text-white text-xl md:text-4xl h-full lg:text-3xl font-bold mb-8">
                {prod?.descripcionCorta}
              </p>
            </div>
          </div>

          <div
            className="
            flex
            flex-row
            bg-tertiary
          "
          >
            <div className="w-[50%] px-3 sm:px-8 py-8 font-lato bg-white">
              <p className="text-second w-[180px] sm:w-[240px] text-xs sm:text-base">
                Un toque de organización para tu baño. ¡Mantén tus cepillos
                siempre a mano!
              </p>
              <div className="border-b border-second pt-3"></div>
              <p className="text-second pt-3 text-xs sm:text-base">
                Materiales:{" "}
                <span className="font-bold">
                  {prod?.atributos[0]?.defDomain === "MATERIAL"
                    ? prod?.atributos[0]?.defAttrib
                    : ""}
                </span>
              </p>
              <h1 className="text-second font-bold pt-3 text-xs sm:text-base">
                Más detalles técnicos
              </h1>
              <div className="border-b border-second pt-3"></div>
              <h1 className="text-second pt-3 text-xs sm:text-base">
                En color: <span className="font-bold">Marfil</span>
              </h1>
            </div>
            <div className="w-[50%] px-8 font-lato py-8">
              <p className="text-white text-xs sm:text-base">
                Con descuento: <span className="font-bold">Bs. 50</span>
              </p>
              <p className="text-white text-xs sm:text-base">
                Sin descuento:{" "}
                <span className="font-bold">
                  Bs. {prod?.prodsEspecYPrecios[0].precio}
                </span>
              </p>
              <div className="border-b border-white pt-3"></div>
              <p className="text-white text-xs sm:text-base pt-3">
                Marca: <span className="font-bold">{prod?.marca}</span>
              </p>
              <div className="border-b border-white pt-3"></div>
              <p className="text-white text-xs sm:text-base pt-3">
                Garantía: <span className="font-bold">{prod?.garantia}</span>
              </p>
              <div className="border-b border-white pt-3"></div>
              <p className="text-white text-xs sm:text-base pt-3">
                {prod?.masVendido !== false ? "De los más vendidos" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
