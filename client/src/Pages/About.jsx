export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-16 bg-gray-50" id="about">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8">
        About Me
      </h2>
      <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-4">
        <p>
          I am a dedicated developer with a strong background in building scalable, user-friendly applications. 
          I enjoy solving real-world problems with clean and efficient code.
        </p>
        <p>
          My skills include <span className="font-semibold">React, Node.js, Express, MongoDB</span> 
          along with experience in DevOps and cloud deployment.
        </p>
        <p>
          Outside of coding, I love exploring new technologies, contributing to open-source projects, 
          and writing technical blogs to share knowledge.
        </p>
      </div>
    </section>
  );
}
