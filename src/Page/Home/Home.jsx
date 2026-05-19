import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHtml5,
  FaLayerGroup,
  FaLinkedinIn,
  FaLocationDot,
  FaMobileScreenButton,
  FaNodeJs,
  FaPhone,
  FaReact,
} from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import Banner from "../../component/Banner/Banner";

const resumeViewUrl =
  "https://drive.google.com/file/d/1C9uev8sp_6gIywFaUq1jYl-nM-ochr18/view?usp=drive_link";

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-300" },
  { name: "React Native", icon: FaMobileScreenButton, color: "text-emerald-300" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-300" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-300" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-300" },
  { name: "Express", icon: SiExpress, color: "text-slate-200" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-300" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-300" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
];

const services = [
  {
    icon: FaCode,
    title: "Full Stack Web Apps",
    description:
      "React interfaces, API integration, authentication, dashboards, CRUD flows, and database-backed features.",
  },
  {
    icon: FaMobileScreenButton,
    title: "React Native Apps",
    description:
      "Cross-platform mobile app screens, reusable components, navigation flows, Firebase, and API-connected experiences.",
  },
  {
    icon: FaLayerGroup,
    title: "MERN Product Flow",
    description:
      "From frontend to backend: Node.js, Express, MongoDB, Firebase, deployment, and practical product structure.",
  },
];

const projects = [
  {
    id: 1,
    name: "Tourism Management System",
    duration: "20 days",
    image: "https://i.ibb.co.com/XxjDxMYJ/tur.png",
    description:
      "A full stack tourism platform with bookings, payments, role-based dashboard, and package management.",
    tech: ["React", "Node", "MongoDB", "Firebase"],
    live: "https://tourism-management-syste-e2926.web.app/",
    github: "https://github.com/Topan-Roy/tourism-management-client-git",
  },
  {
    id: 2,
    name: "Online Group Study",
    duration: "15 days",
    image: "https://i.ibb.co.com/HfHnktZW/stu.png",
    description:
      "A collaborative study app with assignments, reviews, protected routes, and real-time updates.",
    tech: ["React", "Express", "MongoDB"],
    live: "https://online-group-study-f26a8.web.app/",
    github: "https://github.com/Topan-Roy/online-group-study-client11",
  },
  {
    id: 3,
    name: "Plant Care Tracker",
    duration: "10 days",
    image: "https://i.ibb.co.com/DPnqjPGK/tree.png",
    description:
      "A plant tracking product for care schedules, health status, and personal plant collections.",
    tech: ["React", "Firebase", "MongoDB"],
    live: "https://plant-care-tracker-3a085.web.app/",
    github: "https://github.com/Topan-Roy/plant-care-tracker-client-git",
  },
  {
    id: 4,
    name: "Bhajon Food Ordering",
    duration: "7 days",
    image: "https://i.ibb.co.com/spG1398s/bhojon.png",
    description:
      "A modern food ordering platform with authentication, responsive menus, and order-focused UI.",
    tech: ["React", "Firebase", "Tailwind"],
    live: "https://bhajon-3d8a3.web.app/",
    github: "https://github.com/Topan-Roy/Bhojon-client",
  },
  {
    id: 5,
    name: "Cholo Ride Sharing",
    duration: "36 days",
    image: "https://i.ibb.co.com/RkZZ1phL/cholo.png",
    description:
      "A team-built ride sharing platform with rider/driver flows, live requests, and role-based dashboards.",
    tech: ["Team Project", "React", "MERN"],
    live: "https://cholo.netlify.app/",
    github: "https://github.com/Utso-Roy/cholo_ride_sharing_-team-",
  },
];

const education = [
  {
    title: "Diploma in Computer Technology",
    place: "Aptouch Polytechnic Institute, Dinajpur",
    date: "2020 - 2025",
  },
  {
    title: "Higher Secondary Certificate",
    place: "Birganj Govt College, Dinajpur",
    date: "2019 - 2021",
  },
  {
    title: "Complete Web Development Course",
    place: "Programming Hero with Jhankar Mahbub",
    date: "January 2025 - July 2025",
  },
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Missing information",
        text: "Please fill in all fields before submitting.",
        confirmButtonColor: "#06b6d4",
      });
      return;
    }

    try {
      const response = await fetch(
        "https://my-portfolio-server-blush.vercel.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Message sent",
          text: "Thank you for reaching out. I will get back to you soon.",
          confirmButtonColor: "#06b6d4",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Message failed",
          text: data.message || "Something went wrong. Try again later.",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server error",
        text: "Unable to connect to the server. Please try again later.",
        confirmButtonColor: "#ef4444",
      });
      console.error(error);
    }
  };

  return (
    <main className="overflow-hidden bg-[#071013] text-white">
      <Banner />

      <section id="about" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative mx-auto w-full max-w-md">
            <div className="about-frame">
              <img src="/image.png" alt="Topan Roy portrait" />
            </div>
            <div className="about-badge">
              <span>Full Stack</span>
              <strong>+ Apps</strong>
            </div>
          </div>

          <div>
            <p className="section-kicker">About me</p>
            <h2 className="section-title">
              I turn ideas into full stack web products and mobile app experiences.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300">
              I am Topan Roy, a full stack developer from Dinajpur,
              Bangladesh. I build practical products with React, React Native,
              Tailwind, Firebase, Node.js, Express, and MongoDB. My focus is
              simple: make web and mobile experiences that feel clear, fast,
              and easy to use.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["5+", "Projects completed"],
                ["Full Stack", "Web + API"],
                ["React Native", "Mobile apps"],
                ["2025", "Web development training"],
              ].map(([value, label]) => (
                <div className="mini-stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={resumeViewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                View Resume
                <FaArrowUpRightFromSquare />
              </a>
              <a href="#contact" className="btn-secondary">
                Hire Me
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p className="section-kicker">Tech stack</p>
            <h2 className="section-title">Tools I use to build web and mobile products.</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-tile" key={skill.name}>
                  <Icon className={`text-4xl ${skill.color}`} />
                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p className="section-kicker">What I do</p>
            <h2 className="section-title">I build the web, backend, and app pieces a product needs.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <Icon className="text-4xl text-cyan-300" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="section-heading">
            <p className="section-kicker">Featured work</p>
            <h2 className="section-title">Open the portfolio book and explore my work.</h2>
          </div>

          <div className="book-shelf mt-14">
            {projects.map((project) => (
              <article className="project-book" key={project.id}>
                <div className="book-cover">
                  <div className="book-ridge" />
                  <span className="book-number">0{project.id}</span>
                  <img src={project.image} alt={`${project.name} screenshot`} />
                  <div className="book-cover-title">
                    <h3>{project.name}</h3>
                    <span>{project.duration}</span>
                  </div>
                </div>

                <div className="book-pages">
                  <div className="book-page book-page-left">
                    <p className="book-label">Case study</p>
                    <h3>{project.name}</h3>
                    <div className="book-shot">
                      <img src={project.image} alt={`${project.name} preview`} />
                    </div>
                  </div>

                  <div className="book-page book-page-right">
                    <p className="book-label">Details</p>
                    <p>{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span className="tech-pill" key={`${project.name}-${tech}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link-primary">
                        Live Preview
                        <FaArrowUpRightFromSquare />
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-secondary">
                        GitHub
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="section-kicker">Education</p>
            <h2 className="section-title">Learning path and professional training.</h2>
          </div>
          <div className="timeline-list">
            {education.map((item) => (
              <div className="timeline-item" key={item.title}>
                <FaGraduationCap />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Let us build something useful.</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Send a message for web projects, mobile apps, collaboration, or full stack work. I
              usually respond as soon as I can.
            </p>

            <div className="mt-8 grid gap-4">
              <a href="mailto:roytopan734@gmail.com" className="contact-line">
                <FaEnvelope />
                <span>roytopan734@gmail.com</span>
              </a>
              <a href="tel:+8801706541105" className="contact-line">
                <FaPhone />
                <span>+8801706541105</span>
              </a>
              <div className="contact-line">
                <FaLocationDot />
                <span>Dinajpur, Bangladesh</span>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="https://github.com/Topan-Roy" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/topanroy/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                rows={7}
              />
            </label>
            <button type="submit" className="btn-primary contact-submit-btn w-full justify-center sm:w-fit">
              Send Message
              <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
