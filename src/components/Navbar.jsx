import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center bg-blue-950 py-6 px-10">
      <Link to={"/"} className="font-medium text-2xl">
        MediaExpo
      </Link>
      <div className="flex gap-5 items-center">
        <Link
          className="text-base font-medium active:scale-95 rounded px-4 py-2 bg-blue-600"
          to={"/"}
        >
          Search
        </Link>
        <Link
          className="text-base font-medium active:scale-95 rounded px-4 py-2 bg-blue-600"
          to={"/collection"}
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
