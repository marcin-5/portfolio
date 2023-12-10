import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-30 md:h-26">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
          <path
            fill="#1d1e1f"
            fillOpacity="1"
            d="M0,64L80,53.3C160,43,320,21,480,58.7C640,96,800,192,960,208C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-theme p-10 text-slate-50">
        <div className="ml-10 flex w-20 justify-between">
          <a href="https://github.com/marcin-5">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/marcin-bojara-142857e">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
