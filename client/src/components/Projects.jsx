import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "My personal portfolio", link: "#" },
    { title: "React Dashboard", description: "Realtime analytics app", link: "#" },
    { title: "E-commerce Store", description: "Shop online", link: "#" },
  ];

  return (
    <section className="py-20 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
