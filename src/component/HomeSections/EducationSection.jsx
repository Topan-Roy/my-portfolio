import { FaGraduationCap } from "react-icons/fa6";

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

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;
