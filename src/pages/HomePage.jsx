import { useSelector } from "react-redux";
import Resultgrid from "../components/Resultgrid";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";


const HomePage = () => {
  const { query } = useSelector((state) => state.search);

  return (
    <div>
     
      <SearchBar />
      {query !== "" ? (
        <div>
          <Tabs />
          <Resultgrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
