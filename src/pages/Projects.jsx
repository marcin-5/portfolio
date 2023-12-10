import Layout from "../components/Layout";

const projectsData = [
  {
    title: "Portfolio",
    image: "portfolio.png",
    description: "A portfolio website developed using React and Tailwind CSS",
    link: "/",
  },
  {
    title: "Portfolio",
    image: "portfolio.png",
    description: "A portfolio website developed using React and Tailwind CSS",
    link: "/",
  },
  {
    title: "Portfolio",
    image: "portfolio.png",
    description: "A portfolio website developed using React and Tailwind CSS",
    link: "/",
  },
];

function Projects() {
  return (
    <Layout>
      <div className="mt-20">
        <div className="h-full">
          <div className="h-96" data-aos="zoom-in">
            <lottie-player
              src="https://lottie.host/63b57e4c-c687-4401-b4ac-310949ba5643/KRascYHzSL.json"
              background="transparent"
              speed="0.75"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-4xl font-semibold text-slate-700">My projects:</h1>
      </div>
      <div className="m-20 grid grid-cols-3 items-center justify-center gap-10 md:mx-5 md:grid-cols-1">
        {projectsData.map((project, index) => {
          return (
            <div key={index}>
              <div className="relative rounded-bl-3xl rounded-tr-3xl border-2 border-black text-center">
                <img
                  src={`./src/resources/${project.image}`}
                  className="h-60 w-full rounded-bl-3xl rounded-tr-3xl text-center"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-bl-3xl rounded-tr-3xl bg-black opacity-0 hover:opacity-80">
                  <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
                  <button className="mt-5 rounded border-2 border-white px-5 py-2 text-white hover:bg-indian-red">
                    DEMO
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;
