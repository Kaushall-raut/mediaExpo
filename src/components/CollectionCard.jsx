/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { removeCollection, removeToast } from "../store/features/collection";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const remove = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast());
  };

  return (
    <div className="bg-white  h-80 w-[18vw] relative ">
      <a href={item.url} target="_blank" className="h-full">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "videos" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            muted
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "GIFs" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>
      <div className=" px-4 py-10 w-full bottom-0 text-white absolute flex justify-start items-center gap-4 bg-linear-[transparent]">
        <h2 className="text-md font-semibold capitalize">{item.title}</h2>
        <button
          onClick={() => {
            remove(item.id);
          }}
          className="bg-indigo-500 text-white rounded px-3 py-2 font-medium active:scale-95 transition cursor-pointer"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
