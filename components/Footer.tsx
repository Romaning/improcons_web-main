import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="w-full bg-primary">
      <div className="flex flex-row w-full items-center justify-between px-6 py-6 lg:px-16 lg:py-9 ">
        <img className="h-8 lg:h-10" src="/images/marcacc.png" alt="marcacc" />
        <img
          className="w-16 h-13 lg:h-[83px] lg:w-[120px]"
          src="/images/flechasg.png"
          alt=""
        />
      </div>
      <div className="border-b-2 lg:border-b-4 border-second mx-6 lg:mx-10" />
      <div className="w-full h-[20px]"></div>
      <ItemsContainer />
    </footer>
  );
};

export default Footer;
