export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-500 font-semibold hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  )
}
