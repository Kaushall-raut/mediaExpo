import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGifs, GetPixelsVideo, GetUnsplashPhotos } from "../api/mediaApi";
import { setError, setLoading, setResult } from "../store/features/search";
import ResultCard from "./ResultCard";

const Resultgrid = () => {
  const { query, activeTab, error, loading, result } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    try {
      let data;
      const getData = async () => {
        dispatch(setLoading());
        if (activeTab == "photos") {
          let res = await GetUnsplashPhotos(query);
          data = res.map((curr) => ({
            id: curr.id,
            type: "photo",
            title: curr.alt_description || "image",
            thumbnail: curr.urls.thumb,
            src: curr.urls.full,
            url: curr.links.html,
          }));
        } else if (activeTab == "videos") {
          let res = await GetPixelsVideo(query);
          data = res.map((curr) => ({
            id: curr.id,
            type: "videos",
            src: curr.video_files[0].link,
            thumbnail: curr.image,
            title: curr.user.name || "video",
            url: curr.url,
          }));
        } else if (activeTab == "GIFs") {
          let res = await GetGifs(query);
          data = res.results.map((curr) => ({
            id: curr.id,
            type: "GIFs",
            title: "gif",
            src: curr.media_formats.gif.url,
            thumbnail: curr.itemurl,
            url: curr.url,
          }));
        }
        dispatch(setResult(data));
      };
      getData();

      // console.log(data);
    } catch (error) {
      dispatch(setError(error.message));
    }
  }, [activeTab, query,dispatch]);

  if (error) return <h1 className="text-center">Error</h1>;

  if (loading) return <h1 className="text-center text-4xl">Loading ... </h1>;

  return (
    <div className="flex justify-between gap-4  overflow-auto flex-wrap px-7 ">
      {result.map((curr, key) => {
        return (
          <div key={key}>
            <ResultCard item={curr} />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default Resultgrid;
