export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6" id="home">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Hi, I’m <span className="text-blue-600">Prerak Sudan</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        A passionate <span className="font-semibold">Full Stack Developer</span> who loves building modern web applications.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
