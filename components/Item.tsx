interface ItemProps {
  Links: { name: string; link: string }[];
  title: string;
}

const Item = ({ Links, title }: ItemProps) => {
  return (
    <>
      <ul>
        <h1 className="mb-1 font-bold text-base lg:text-xl text-white font-lato">
          {title}
        </h1>
        {/* Mapeo de los links del Footer */}
        {Links.map((link: any) => (
          <li key={link.name}>
            <a
              className="text-white font-lato hover:text-cyan-600 duration-300 text-xs lg:text-sm cursor-pointer leading-6"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Item;
