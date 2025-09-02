import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <main className="grid min-h-screen place-items-center backdrop-grayscale-25 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute top-1/3 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="text-center ">
        <p className="text-9xl font-semibold text-red-600 dark:text-orange-500">
          404
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="cursor-pointer flex items-center gap-4 transition duration-300 rounded-md bg-orange-600 hover:bg-orange-700 px-8 py-2.5 text-sm font-semibold text-white shadow-xs "
          >
            <FaLeftLong />
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NoPage;

//  <div className="relative">
//                 <div
//                   className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-600 via-green-600 to-blue-600 opacity-50 blur-2xl"
//                 ></div>
//                 <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
//                   Gradient shadow
//                 </div>
//               </div>
