import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../store/features/search";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(inputValue));
    setInputValue("");
  };
  return (
    <div >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex justify-center gap-5 p-10 bg-gray-900"
      >
        <input
          className="w-[80%] border-2 p-4 text-xl rounded outline-none"
          value={inputValue}
          type="text"
          placeholder="Search for anything..."
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button
          type="submit"
          className=" cursor-pointer active:scale-90 border-2 px-4 text-xl rounded outline-none hover:bg-blue-600 hover:outline-none hover:border-0"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
