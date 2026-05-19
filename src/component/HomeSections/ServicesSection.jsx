import { FaCode, FaLayerGroup, FaMobileScreenButton } from "react-icons/fa6";

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

const ServicesSection = () => {
  return (
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
  );
};

export default ServicesSection;
