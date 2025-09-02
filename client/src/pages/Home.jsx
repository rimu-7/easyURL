import { useState, useEffect } from "react";
import AuthModal from "../components/modals/AuthModal";
import Features from "../layouts/Features";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  let [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleRoute = () => {
    if (!token) {
      setIsAuthModalOpen(true);
    } else {
      navigate("/shorten");
    }
  };

  useEffect(() => {
    if (location?.state === "success") {
      setIsAuthModalOpen(true);
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <div className="absolute top-1/3 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      <AuthModal
        isAuthModalOpen={isAuthModalOpen}
        setIsAuthModalOpen={setIsAuthModalOpen}
      />
      <div className="py-8 px-4 mx-auto text-center lg:py-24 lg:px-12">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Simplify Your Links. Track with Precision.
        </h1>
        <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-zinc-500 dark:text-zinc-400">
          Instantly shorten URLs, Customize and track performance — all in one
          place. Fast, secure, and free.
        </p>
        <div className="flex flex-col justify-center items-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => handleRoute()}
            className="cursor-pointer gap-2 focus:outline-none inline-flex justify-center items-center py-3 px-10 text-base font-medium text-white bg-orange-700 hover:bg-orange-800  rounded-lg transition duration-300"
          >
            Get Started <FaRightLong />
          </button>
        </div>
        <Features />
      </div>
    </section>
  );
}

export default Home;
