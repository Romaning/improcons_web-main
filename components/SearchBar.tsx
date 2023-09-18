import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="w-full sm:w-[200px] lg:w-[250px] xl:w-[600px] sm:h-8 lg:h-10 bg-primary rounded-full px-4 flex flex-row text-tertiary">
      <AiOutlineSearch className="text-tertiary w-8 h-8 mt-[3px] mr-2" />
      <input
        className="h-full w-full rounded-full bg-primary font-lato text-base"
        type="text"
        placeholder="BUSCA INSPIRACION.."
      />
    </div>
  );
};

export default SearchBar;
