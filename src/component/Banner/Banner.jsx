import { BsGithub } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter';
const Banner = () => {
    return (
        <section
            className="min-h-screen flex bg-gray-900 py-10 md:flex-row flex-col items-center"
        >
            <div className="flex-1 flex items-center justify-center h-full">
                <img
                    src="https://i.ibb.co.com/mrycTL6W/IMG-20230528-230617-100-removebg-preview.png"
                    alt=""
                    className="md:w-[420px] rounded-[10%] h-[420px] object-cover"
                />
            </div>
            <div className="flex-1">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-xl md:leading-normal leading-10 text-white font-semibold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br />
                        </span>
                        My Name is <span>Topan Roy</span>
                    </h1>

                    <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-300">
                        I'm a{" "}
                        <span className="text-cyan-400">
                            <Typewriter
                                words={[
                                    'MERN Stack Web Developer 💻',
                                    'React Developer ⚛️',
                                    'Front-End Developer 🎨'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h4>
                    {/* <button className="btn-primary mt-8">Contact Me</button> */}
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
                        <div className="text-gray-200 flex gap-3  text-3xl hover:text-white cursor-pointer ">
                            <a
                                href="https://github.com/Topan-Roy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400"
                            >
                                <BsGithub />
                            </a>

                            <a
                                href="https://web.facebook.com/TopanRoy41105"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400"
                            >
                                <CiFacebook />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/topanroy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-sky-400"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
