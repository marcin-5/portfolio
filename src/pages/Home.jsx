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
import { ContentGrid, Info } from "../components/InfoSection";
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
        <Info
          title="What can be as absorbing as meditation?"
          bgTitle="bg-meditation"
          animationUrl="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
          content={
            <p className="my-5 px-14 py-10 text-center text-2xl font-semibold md:px-5 md:text-xl">
              You're right, solving interesting tasks makes me lose track of time.
            </p>
          }
        />

        {/* Dev Stack */}
        <Info
          title="My dev stack and tools"
          bgTitle="bg-dev-stack"
          animationUrl="https://lottie.host/93fb7e78-727d-4853-83e0-d7d2237b7a03/iuODek030L.json"
          content={ContentGrid({
            Frontend: ["HTML/CSS", "JavaScript", "React", "Redux"],
            "Backend and DB": ["Django", "Express JS", "Node JS", "MongoDB", "PostgreSQL"],
            "UI / UX": ["Bootstrap", "Material UI", "Tailwind CSS"],
            Other: ["Docker", "git"],
          })}
        />

        {/* Dev Info */}
        <div>
          <h1 className="text-center text-4xl font-bold text-slate-700">Who is Marcin?</h1>
          <div className="!md:h-screen relative text-slate-800">
            <div className="h-full">
              <lottie-player
                src="https://lottie.host/854d8229-e09d-4eac-962d-ae586c6ddded/Qt1Wt4KYwk.json"
                background="transparent"
                speed="0.75"
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold md:text-xl">
                Hi, Hello, Witaj...
                <hr />
                <pre className="my-5 font-raleway text-xl font-normal md:text-base">
                  {JSON.stringify(
                    {
                      name: "Marcin Bojara",
                      age: null,
                      gender: "male",
                      country: "Poland",
                    },
                    null,
                    2,
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
