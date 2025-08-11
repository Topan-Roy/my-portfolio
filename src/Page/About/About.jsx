import { MdDownload } from "react-icons/md";
import { CgEyeAlt } from "react-icons/cg";
import Works from "../../component/Works/Works";
import Skills from "../../component/Skaill/Skaill";
import Study from "../../component/Study/Study";

const About = () => {

  return (
    <>
      <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            About <span className="text-cyan-600">Me</span>
          </h3>
          <p className="text-gray-400 my-3 text-lg">My introduction</p>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <div className="text-justify leading-7 w-11/12 mx-auto">
                  <h1 className="text-4xl mb-1 text-white font-Poppins font-semibold" >Topan Roy </h1>
                  <h4 className="text-cyan-500 mb-2 text-xl"> Front-end Developer</h4>
                </div>
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  Allow me to introduce myself: Iam a Junior Development Dynamo! With a passion for blending creativity and coding expertise, I thrive on crafting captivating web experiences that seamlessly merge pixels and logic into user-centric marvels
                </p>
                <br />
                <div className="text-justify leading-7 w-11/12 mx-auto">
                  <p className="text-3xl text-white" > My Resume </p>
                  <div className="flex gap-3 mt-2">
                    <button className=" text-xl btn btn-outline bg-green-500 ">
                      <MdDownload></MdDownload>
                    </button>
                    <button className=" text-xl  btn btn-outline bg-yellow-400 ">
                      <CgEyeAlt></CgEyeAlt>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <img
                  src="https://i.ibb.co.com/vxbLPQ4S/IMG-20230528-230617-100.jpg"
                  alt=""
                  className="w-full object-cover bg-cyan-500 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Skills></Skills>
      <Works></Works>
      <Study></Study>
    </>
  );
};

export default About;
