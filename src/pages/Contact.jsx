import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="mt-10 h-96">
          <lottie-player
            src="https://lottie.host/216694e9-f1e8-4198-8c46-395bf86e376a/OYciYehf79.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="flex w-screen justify-center">
          <div className="w-1/2 bg-gray-100 p-10 shadow-2xl md:w-full">
            <h1 className="text-2xl font-semibold">Contact me to know more</h1>
            <input
              type="text"
              placeholder="Name"
              className="mt-5 w-full rounded border-2 border-gray-400 p-1 shadow-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="mt-5 w-full rounded border-2 border-gray-400 p-1 shadow-lg"
            />
            <textarea
              type="text"
              placeholder="Query"
              className="mt-5 w-full rounded border-2 border-gray-400 p-1 shadow-lg"
            />

            <button className="mt-3 rounded bg-indian-red px-5 py-1 text-white">SUBMIT</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
