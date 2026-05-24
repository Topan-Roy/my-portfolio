"use client";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

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

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">Featured work</p>
          <h2 className="section-title">Open the portfolio book and explore my work.</h2>
        </div>

        <div className="book-shelf mt-14">
          {displayedProjects.map((project) => (
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

        {projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary cursor-pointer"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
