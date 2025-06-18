import Project from "./components/Project";
import projects from "./utils/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">
            Grace Johnson
          </a>
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about-section" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects-section" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact-section" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4 max-w-5xl mx-auto">
        {/* About */}
        <section id="about-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">[README]</h2>
          <p className="mb-4 leading-7">
            Hi 👋 I'm Grace.
            <br />
            <br />
            I'm a passionate and curious software engineer who thrives on
            building user-focused, scalable features — especially with React,
            JavaScript, and modern web frameworks. Since moving into tech, I’ve
            quickly made an impact by picking up complex tickets, contributing
            to high-scale projects (like migrating 9M+ customer records), and
            refactoring legacy code into modern, maintainable components.
          </p>
          <p className="mb-4 leading-7">
            I enjoy collaborating across disciplines to deliver seamless user
            experiences, and I’m confident presenting technical work to both
            tech and non-tech audiences. My current stack includes React,
            Next.JS and SQL, with growing experience in Java and backend APIs.
          </p>
          <p className="mb-4 leading-7">
            In this portfolio, you’ll find snapshots of projects that reflect my
            growth — including personal builds and work-in-progress projects
            shared on GitHub. I’m excited to keep learning, solve meaningful
            problems, and bring both my management background and technical
            skills to dynamic dev teams.
          </p>
          <p className="leading-7">Let’s connect if you have opportunities!</p>
        </section>

        {/* Projects */}
        <section id="projects-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                videoLink={project.videoLink}
                externalLink={project.externalLink}
                frameworks={project.frameworks}
              />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Email Card */}
            <a
              href="mailto:gejohnson_15@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-blue-600 font-semibold"
            >
              <span className="text-2xl">📧</span>
              <span>Email</span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/GraceJ0105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-blue-600 font-semibold"
            >
              <span className="text-2xl">👩‍💻</span>
              <span>GitHub</span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/graceeleanorjohnson/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white text-blue-600 font-semibold"
            >
              <span className="text-2xl">🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
