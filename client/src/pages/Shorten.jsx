import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Spinner } from "../components/svg/SVG";
import TableData from "../components/table/TableData";
import { fetchUrls, createUrls } from "../services/urlService";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import { TableSkeleton } from "../layouts/Skeleton";

function Shorten() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [fetchLoading, setFetchLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [urls, setUrls] = useState([]);
  const textareaRef = useRef(null);
  const [sortBy, setSortBy] = useState({
    slug: "createdAt_desc",
    field: "Date (newest)",
  });

  const getUrls = async (sortBy) => {
    setFetchLoading(true);
    const data = await fetchUrls(sortBy);
    const updatedData = data.map((url) => ({
      ...url,
      status: url.status || "active",
    }));
    if (data) {
      setUrls(updatedData);
      setTimeout(() => {
        setFetchLoading(false);
      }, 2000);
    }
  };

  useEffect(() => {
    getUrls(sortBy);
  }, [sortBy]);

  const createUrl = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUrls(originalUrl);
      setTimeout(async () => {
        toast.success("URL added!", { position: "bottom-right" });
        await getUrls(sortBy);
        setOriginalUrl("");
        setLoading(false);
      }, 2000);
    } catch (err) {
      setTimeout(() => {
        toast.error(err?.error, { position: "top-center" });
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [originalUrl]);

  return (
    <div className="max-w-[1536px] min-h-screen mx-auto pb-20 px-3 md:px-4 xl:px-2">
      <div className="absolute top-1/3 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="flex justify-center">
        <div className="mt-16 sm:mt-20 lg:mt-30 xl:mt-44 w-full lg:w-3/4">
          <h1 className="text-center text-[42px] sm:text-[52px] md:text-[64px] font-bold leading-[52px] bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Shorten Your URL here
          </h1>
          <form
            onSubmit={createUrl}
            className="flex gap-4 justify-center items-center mt-4 md:mt-10 relative"
          >
            <textarea
              ref={textareaRef}
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              className="resize-none border placeholder:text-gray-400 focus:border-orange-600 pr-[62px] min-h-[50px] dark:focus:border-orange-700 overflow-hidden transition duration-300 outline-none w-full bg-white dark:bg-[#181E29] border-zinc-200 dark:border-zinc-700 rounded-lg p-5"
              rows={1}
            />
            <button
              type="submit"
              className={`${
                loading ? "bg-orange-600" : "bg-orange-600 dark:bg-orange-600"
              } text-white cursor-pointer transition duration-300 hover:bg-orange-700 absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <Spinner />
                </div>
              ) : (
                <RiSendPlaneFill className="" />
              )}
            </button>
          </form>
        </div>
      </div>
      {fetchLoading ? (
        <TableSkeleton />
      ) : urls.length === 0 ? (
        <div className="min-h-[420px] rounded-md flex flex-col justify-center items-center mt-20">
          <div>
            <div className="p-5 rounded-md bg-sky-400/20">
              <FaLink className="h-8 w-8 text-sky-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mt-4">No URLs Yet</h1>
          <h3 className="mt-2 text-gray-400 text-center px-8 sm:px-0">
            Start shortening your first URL and watch your links come to life.
          </h3>
        </div>
      ) : (
        <TableData
          urls={urls}
          setUrls={setUrls}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}
    </div>
  );
}

export default Shorten;
