const About = () => {
  return (
    <section
      name="about"
      className="w-full h-screen bg-[#1f2833] text-[#c5c6c7]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full">
        <div className="max-w-[1000px] w-full gap-8">
          <div className="pb-8 pl-4 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-[#45a29e]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full flex flex-col-2 gap-8 px-4">
          <div className="text-2xl font-bold text-center md:text-3xl">
            <p>Hi. I'm Durmus, nice to meet you.</p>
          </div>
          <div className="w-full">
            <p className="md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, debitis? Voluptate, ipsum odio corrupti accusantium
              commodi perferendis dolore? Nisi fuga laboriosam voluptas eaque,
              mollitia velit soluta impedit fugiat enim! Possimus?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
