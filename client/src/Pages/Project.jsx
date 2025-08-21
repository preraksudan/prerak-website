const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal website built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Task Manager App",
    description: "A full-stack app for managing daily tasks with authentication.",
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "An online store built with MERN stack and Stripe integration.",
    link: "#",
  },
];

export default function Project() {
  return (
    <section className="min-h-screen px-6 py-16" id="projects">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
