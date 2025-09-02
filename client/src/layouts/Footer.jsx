import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="px-6 md:px-10 xl:px-2 bg-background/95 backdrop-blur mb-2 lg:mb-6 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1280px] mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-between">
          <div className="flex items-center order-1 lg:order-1 space-x-1 text-muted-foreground">
            <span>Made with</span>
            <FaHeart className="h-4 w-4 text-red-500 ml-1 fill-current " />
            <span className="ml-1">by</span>
            <a
              href="https://github.com/rimu-7"
              target="_blank"
              className="hover:text-orange-700 transition duration-300"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              Mutasim Fuad Rimu
            </a>
          </div>

          <div className="flex items-center space-x-1 order-3 lg:order-2 text-muted-foreground">
            <p className="transition duration-300">
              © 2025 EasyURL. All rights reserved.
            </p>
          </div>

          <div className="flex items-center order-2 lg:order-3 space-x-6">
            <button className="h-5 w-5">
              <a
                href="https://github.com/rimu-7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5 transition duration-300 hover:text-purple-600" />
              </a>
            </button>

            <button className="h-5 w-5">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5 transition duration-300 hover:text-blue-400" />
              </a>
            </button>

            <button className="h-5 w-5">
              <a
                href="https://www.facebook.com/rimu.mutasim"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 transition duration-300 hover:text-blue-400" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
