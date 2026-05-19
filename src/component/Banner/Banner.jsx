import { BsGithub } from "react-icons/bs";
import { FaArrowDown, FaLinkedinIn } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

const previewProjects = [
  {
    label: "Live projects",
    value: "5+",
  },
  {
    label: "Main stack",
    value: "Full Stack",
  },
  {
    label: "Mobile apps",
    value: "React Native",
  },
];

const Banner = () => {
  return (
    <section
      id="home"
      className="portfolio-section relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 text-white sm:px-8 lg:px-16"
    >
      <div className="hero-mesh" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-950/20 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
            <span className="min-w-0">Available for full stack web and React Native apps</span>
          </div>

          <h1 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
            Topan Roy
            <span className="mt-3 block text-lg font-medium text-cyan-200 sm:text-2xl lg:text-3xl">
              builds web platforms and mobile apps.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300">
            I am a{" "}
            <span className="font-medium text-cyan-300">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "React Native App Developer",
                  "MERN Stack Developer",
                  "React Developer",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={45}
                delaySpeed={1400}
              />
            </span>
            , focused on responsive websites, full stack dashboards, APIs, and
            user-friendly mobile app experiences.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="btn-primary group">
              View Projects
              <FaArrowDown className="transition group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="https://github.com/Topan-Roy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <BsGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/topanroy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://web.facebook.com/TopanRoy41105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-link"
            >
              <CiFacebook />
            </a>
          </div>
        </div>

        <div className="hero-visual mx-auto w-full max-w-[620px]">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="robot-stage" aria-label="Animated portfolio robot">
            <div className="robot-antenna" />
            <div className="robot-head">
              <span className="robot-eye robot-eye-left" />
              <span className="robot-eye robot-eye-right" />
              <span className="robot-mouth" />
            </div>
            <div className="robot-neck" />
            <div className="robot-body">
              <div className="robot-screen">
                <span />
                <strong>TOPAN.DEV</strong>
              </div>
              <div className="robot-core" />
            </div>
            <div className="robot-arm robot-arm-left">
              <span />
            </div>
            <div className="robot-arm robot-arm-right">
              <span />
            </div>
            <div className="robot-base" />
          </div>

          {previewProjects.map((project, index) => (
            <div
              className={`hologram-card hologram-card-${index + 1}`}
              key={project.label}
            >
              <strong>{project.value}</strong>
              <span>{project.label}</span>
            </div>
          ))}

          <div className="profile-chip">
            <img src="/image.png" alt="Topan Roy" />
            <div>
              <strong>Topan Roy</strong>
              <span>Full stack & app developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
