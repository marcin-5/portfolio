export const Info = ({ title, bgTitle, content, animationUrl }) => {
  return (
    <div className="my-20">
      <div className={`h-52 ${bgTitle} text-center`}>
        <h1 className="py-10 text-4xl font-bold text-slate-100">{title}</h1>
      </div>
      <div className="mx-32 -mt-20 rounded-lg bg-slate-50 shadow-2xl hover:bg-gray-700 hover:text-slate-50 md:mx-5">
        {animationUrl ? (
          <div className="h-96">
            <lottie-player
              src={animationUrl}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        ) : null}
        {content}
      </div>
    </div>
  );
};

export const ContentGrid = (content) => {
  return (
    <div className={`grid grid-cols-${Object.keys(content).length} p-5 md:grid-cols-1`}>
      {Object.keys(content).map((title, index) => {
        return (
          <div className={`text-center md:mt-${index ? 10 : 0}`}>
            <h1 className="text-xl font-bold">{title}</h1>
            <hr />
            {content[title].map((line) => {
              return <p className="mt-3 font-semibold">{line}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
};
