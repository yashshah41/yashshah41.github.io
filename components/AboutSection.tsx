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

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-48 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Yash and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" curious"}</span>  aspiring software engineer
              based in Iselin, NJ.
            </p>
            <br />
            <p>
              
              Curently a sophomore at Rutgers University in New Brunswick, NJ, I plan to graduate in May of 2026 with
              a B.S in Computer Science and Economics with a minor in Mathematics.
              I am really interested in software development and am open to any
              opportunities within the field!
              </p>
              <br />
              <p>
              I have a wide range of hobbies and passions ——reading books, watching basketball, and trying
              new restaraunts. I always try to seek new experiences in everything I do, from trying new foods to 
              learning new technologies.    
            </p>
            <br />
          
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                always stay curious
              </span>{" "}
              in whatever you do. I have a passion for
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
