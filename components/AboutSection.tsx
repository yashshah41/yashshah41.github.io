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
              Hey, what's up! my name is Yash, and I am an aspiring software engineer
              based in Iselin, NJ.
            </p>
            <br />
            <p>
              I am currently a student at Rutgers University studying CS and Economics.
              I am interested in exploring a career in technology and am open to any
              opportunities in the field!
              </p>
              <br />
            <p>
              I enjoy building full-stack web applications utilizing different technologies and exposing myself to new things.
              Recently, I have been interested in ML/AI, particularly NLP, and have introduced myself to
              newer transformer models like GPT-4, which offer advanced natural language processing and generation capabilities. 
              These models have broadened my interest in how to integrate AI into web applications to create more
              interactive and intelligent user experiences. 
              <br />
              <br />
              Outside of that, when I am not behind my computer, you'll find me hiking trails, channeling my
              inner coffee connoisseur at local cafés, or attempting to live out my NBA dreams at the park. 
            </p>
            <br />
          
            <p>
              One thing I believe is to{" "}
              <span className="font-bold text-teal-500">
                always stay curious
              </span>{" "}
              in whatever I am doing. I have a passion for
              technology and a desire to always push the limits by building something innovative
              that can make an impact on as many people as possible. I am excited to see
              where my career takes me, and I am always open to new opportunities.
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
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
