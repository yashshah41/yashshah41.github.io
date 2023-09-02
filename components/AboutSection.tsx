import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "PostgreSQL" },
  { skill: "Express.js" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "R" },
  { skill: "pandas/NumPy" },
  { skill: "Matplotlib/Plotly" },
  { skill: "Git" },  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hey, whats up! my name is Yash and I am a{" "}
              <span className="font-bold">{" funny (self-proclaimed)"}</span>,
              <span className="font-bold">{" curious"}</span>, and
              <span className="font-bold">{" outgoing"}</span>  aspiring software engineer
              based in Iselin, NJ.
            </p>
            <br />
            <p>
              I am currenty a sophomore at Rutgers University stuyding CS and Economics.
              I am interested in pursuing a career in in full stack software development and
              am open to any opportunties the field!
              </p>
              <br />
            <p>
              I speak fluent Java, Python, JavaScript, and TypeScript (as well as secondary languages like English, Hindi and Gujarati).
              I'm also convinced that debugging is just detective work with some more steps. My laptop is my partner-in-crime,
              we're on a quest to save the world from endless runtime errors and missing ;'s.
              <br />
              <br />
              Economics, for me, is like a never-ending puzzle that is always evolving. I love diving into the technical trends of consumer and
              producer decision making, data that is like modern art to me, and debates about fiscal policy that can put a heated game of Monopoly
              to shame.
              <br />
              <br />
              When I finally step away from the pixels and price elasticity, you'll find me hiking the trails,
              channeling my inner coffee connoisseur in local cafés, or attempting to live out my NBA dreams
              at the park. 
            </p>
            <br />
          
            <p>
              A beI believe that you should{" "}
              <span className="font-bold text-teal-500">
                always stay curious
              </span>{" "}
              in whatever you choose to-do. I have a passion for
              technology and a desire to always push the limits of what is
              possible and build something innovative. I am excited to see
              where my career takes me and am always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
