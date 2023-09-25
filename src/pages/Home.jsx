import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div>
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
                Hi, I am <b className="text-blue-500">Marcin</b>
              </h1>
              <h1 className="text-4xl md:text-xl">
                FullStack <b className="text-green-400">Developer</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
