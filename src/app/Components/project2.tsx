"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; 

export default function Project2() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div id="project2">
    <section className="project-section1">
      <div className="Projectcontainer">
        <div className="Project-header" data-aos="fade-up">
          <h1>My Projects</h1>
          <p>
            "I built these projects to challenge myself and showcase my skills in HTML, CSS, TypeScript, and Next.js. Through hands-on practice and experimentation, I aimed to push my limits and explore the possibilities of modern web development. Each project represents a milestone in my learning journey, demonstrating my growth and proficiency in creating responsive, efficient, and user-friendly web applications."
          </p>
        </div>
        <div className="project-grid1">
          <div className="projectCards" data-aos="flip-left">
            <div className="Imagecontainer">
            <Image 
            alt="HTML Assignments"
              className="project-image"
             src="/Assest/Pictures/html.jpeg"
              width={500} height={800} />
              
              <div className="overlay">
                <div className="details">
                  <h2>HTML Assignments</h2>
                  <p>
                    The first step of any web developer. I didn't make any projects related to HTML but made some assignments for practice.
                  </p>
                  <a href="/HTML" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="projectCards" data-aos="flip-left">
            <div className="Imagecontainer ">
            <Image alt="HTML Assignments"
                   className="project-image"
                    src="/Assest/Pictures/css.jpeg" 
                    width={500} height={800} />

              <div className="overlay">
                <div className="details">
                  <h2>CSS Projects</h2>
                  <p>
                    These projects highlight my CSS skills, showcasing animations, layouts, and responsive designs.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>


          <div className="projectCards" data-aos="flip-left">
            <div className="Imagecontainer">
            <img alt="HTML Assignments"
                   className="project-image"
                    src="/Assest/Pictures/type.jpeg" 
                    width={500} height={800} />
               
              <div className="overlay">
                <div className="details">
                  <h2>TypeScript Projects</h2>
                  <p>
                  I created these projects during the learning of TypeScript. This is the first programmming language I learned.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>



          <div className="projectCards" data-aos="flip-left">
            <div className="Imagecontainer">
            <img alt="Nextjs Assignments" 
                   className="project-image" src="/Assest/Pictures/next.jpeg"
                    width={500} height={800} />

              <div className="overlay">
                <div className="details">
                  <h2>Next.js Projects</h2>
                  <p>
                  I am currently learning Next.Js the framework of react to enhance my web development skills with React.
                      Motivated to learn this web skill.
                  </p>
                  <a href="/CSS" className="link">View Projects...</a>
                </div>
              </div>
            </div>
          </div>


          

        </div>
      </div>
    </section>
  </div>
  
  
  );
}
