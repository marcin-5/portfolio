import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
        {/* Intro */}
        <div className="h-screen bg-theme">
          <div className="z-10 mx-10 grid h-screen rotate-12 transform grid-cols-2 items-center border-4 border-slate-50 bg-theme md:rotate-0 md:grid-cols-1 md:border-0">
            <div className="h-1/2">
              <lottie-player
                src="https://lottie.host/a0a1ae44-e990-4578-8882-f6ed48b65f71/e3tih2FpYy.json"
                background="transparent"
                speed="0.75"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="font-bold text-slate-50 md:px-5">
              <h1 className="text-7xl md:text-4xl">
                Hi, I am <b className="text-light-coral">Marcin</b>
              </h1>
              <h1 className="text-4xl md:text-xl">
                FullStack <b className="text-yellow-400">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-28">
          <h1 className="my-8 text-center text-4xl font-bold text-slate-700">Technologies I use</h1>
          <div className="grid grid-cols-4 md:grid-cols-1">
            <FaJsSquare size={175} color="#f9c853" className="mt-20 w-full" />
            <FaReact size={175} color="#087ea4" className="mt-20 w-full animate-bounce" />
            <FaNodeJs size={175} color="#4f8f4f" className="mt-20 w-full animate-bounce" />
            <FaAngular size={175} color="#d82d2f" className="mt-20 w-full" />
            <FaPython size={175} color="#3b77b3" className="mt-20 w-full animate-bounce" />
            <FaHtml5 size={175} color="#e44e44" className="mt-20 w-full" />
            <FaCss3 size={175} color="#3595d5" className="mt-20 w-full" />
            <FaBootstrap size={175} color="#7511f1" className="mt-20 w-full animate-bounce" />
          </div>
        </div>

        {/* Meditation */}
        <div className="my-20">
          <div className="h-52 bg-meditation text-center">
            <h1 className="py-10 text-4xl font-bold text-slate-100">
              What can be as absorbing as meditation?
            </h1>
          </div>
          <div className="mx-32 -mt-20 rounded-lg bg-slate-50 shadow-2xl hover:bg-gray-700 hover:text-slate-50 md:mx-5">
            <div className="h-96">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <p className="my-5 px-14 py-10 text-center text-2xl font-semibold md:px-5 md:text-xl">
              You're right, solving interesting tasks makes me lose track of time.
            </p>
          </div>
        </div>

        {/* Dev Stack */}
        <div className="my-20">
          <div className="h-52 bg-dev-stack text-center">
            <h1 className="py-10 text-4xl font-bold text-slate-100">My dev stack and tools</h1>
          </div>
          <div className="mx-32 -mt-20 rounded-lg bg-slate-50 shadow-2xl hover:bg-gray-700 hover:text-slate-50 md:mx-5">
            <div className="h-96">
              <lottie-player
                src="https://lottie.host/93fb7e78-727d-4853-83e0-d7d2237b7a03/iuODek030L.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="grid grid-cols-4 p-5 md:grid-cols-1">
              <div className="text-center">
                <h1 className="text-xl font-bold">Frontend</h1>
                <hr />
                <p className="mt-3 font-semibold">HTML/CSS</p>
                <p className="mt-3 font-semibold">JavaScript</p>
                <p className="mt-3 font-semibold">React</p>
                <p className="mt-3 font-semibold">Redux</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">Backend and DB</h1>
                <hr />
                <p className="mt-3 font-semibold">Django</p>
                <p className="mt-3 font-semibold">Express JS</p>
                <p className="mt-3 font-semibold">NodeJS</p>
                <p className="mt-3 font-semibold">MongoDB</p>
                <p className="mt-3 font-semibold">PostgreSQL</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">UI / UX</h1>
                <hr />
                <p className="mt-3 font-semibold">Bootstrap</p>
                <p className="mt-3 font-semibold">Material UI</p>
                <p className="mt-3 font-semibold">Tailwind CSS</p>
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold">Other</h1>
                <hr />
                <p className="mt-3 font-semibold">Docker</p>
                <p className="mt-3 font-semibold">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
