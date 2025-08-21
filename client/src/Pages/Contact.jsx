export default function Contact() {
  return (
    <section className="min-h-screen px-6 py-16 bg-gray-50" id="contact">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-8">
        Contact Me
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Prerak Sudan"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
