import Item from "./Item";
import { QUIENES, TIENDAS, SERVICIOS, CLASES } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-3 lg:gap-6 lg:px-16 pl-8 pb-10">
      <Item Links={QUIENES} title="QUIÉNES SOMOS" />
      <Item Links={TIENDAS} title="TIENDAS" />
      <Item Links={SERVICIOS} title="SERVICIOS" />
      <Item Links={CLASES} title="CLASES" />
      <div>
        <h1 className="text-white font-lato font-bold uppercase text-base xl:text-xl pb-4">
          Intégrate
        </h1>
        <ul className="flex flex-row space-x-2">
          <li>
            <div className="bg-tertiary rounded-md w-8 h-8 justify-center items-center flex cursor-pointer">
              <a href="#">
                <img className="w-6 h-6" src="images/instagram.png" alt="" />
              </a>
            </div>
          </li>
          <li>
            <div className="bg-tertiary rounded-md w-8 h-8 justify-center items-center flex cursor-pointer">
              <a href="#">
                <img className="w-6 h-6" src="images/facebook.png" alt="" />
              </a>
            </div>
          </li>
          <li>
            <div className="bg-tertiary rounded-md w-8 h-8 justify-center items-center flex cursor-pointer">
              <a href="#">
                <img className="w-6 h-6" src="images/whatsapp.png" alt="" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ItemsContainer;
