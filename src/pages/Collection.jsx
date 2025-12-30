import { useSelector, useDispatch } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../store/features/collection";

const Collection = () => {
  const card = useSelector((state) => state.collection.items);

  const dispatch = useDispatch();

  const remove = () => dispatch(clearCollection());

  return (
    <div className="   overflow-auto flex-wrap px-7 py-2 ">
      <div className="flex py-4 justify-between">
        <h2 className="text-2xl font-semibold">Your Collections</h2>
        <button
          onClick={() => remove()}
          className="bg-red-700 px-4 py-2 rounded active:scale-95 transition cursor-pointer text-lg font-medium"
        >
          Remove All
        </button>
      </div>
      <div className="justify-start flex gap-4 ">
        {card.map((curr, index) => {
          return <CollectionCard item={curr} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Collection;
