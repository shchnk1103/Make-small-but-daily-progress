import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "/dev-ed-wave.png";
import design from "/design.png";
import code from "/code.png";
import consulting from "/consulting.png";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web3 from "/web3.png";
import web4 from "/web4.png";
import web5 from "/web5.png";
import web6 from "/web6.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 md:px-20 lg:px-40 dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">DoubleShy0N</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-300 to-teal-400 px-4 py-2 text-white rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              ShChK
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and Designer.
            </h3>
            <p className="font-medium py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96">
            <img src={deved} alt="Image" className="scale-150 mt-16" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services | Offer</h3>
            <p className="font-medium py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for{" "}
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span> and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="font-medium py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for.
            </p>
          </div>

          <div className="lg:flex lg:gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={design} alt="Design" className="w-24 h-24 m-auto" />
              <h3 className="font-medium text-lg pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={code} alt="Design" className="w-24 h-24 m-auto" />
              <h3 className="font-medium text-lg pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <img src={consulting} alt="Design" className="w-24 h-24 m-auto" />
              <h3 className="font-medium text-lg pt-8 pb-2">
                Beatiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-400">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Protofolio</h3>
            <p className="font-medium py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for{" "}
              <span className="text-teal-500"> agencies </span> consulted for
              <span className="text-teal-500"> startups </span> and collaborated
              with talanted people to create digital products for both business
              and consumer use.
            </p>
            <p className="font-medium py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web4}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web5}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web6}
                alt=""
                className="rounded-lg object-cover w-full h-full "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
