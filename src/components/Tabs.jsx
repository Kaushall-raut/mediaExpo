import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/features/search";

const Tabs = () => {
  const currentTabs = ["photos", "videos", "GIFs"];

  const activeTab = useSelector((state) => state.search.activeTab);
  const dispatch = useDispatch();

  return (
    <div className="gap-5 p-10 flex">
      {currentTabs.map((current, cid) => {
        return (
          <button
            onClick={() => dispatch(setActiveTab(current))}
            className={` ${
              activeTab === current ? "bg-blue-700" : "bg-gray-600 "
            } transition cursor-pointer active:scale-95 px-5 py-2 uppercase `}
            key={cid}
          >
            {current}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
