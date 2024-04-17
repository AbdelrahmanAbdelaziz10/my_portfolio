import React, { useState } from "react";
import "./project.css";
import { Col, Row } from "react-bootstrap";
import cardimg from "../../Images/download.jpeg";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import project1 from "../../Images/project1.PNG";
import project2 from "../../Images/project2.PNG";
import project3 from "../../Images/project3.PNG";
import project4 from "../../Images/project4.PNG";
import project5 from "../../Images/project5.PNG";
import project6 from "../../Images/project6.PNG";
import project7 from "../../Images/project7.PNG";
import project8 from "../../Images/project8.PNG.jpg";
import project9 from "../../Images/project9.PNG";

const myProject = [
  {
    id: 1,
    Title: "Engage Business Design",
    category: "css",
    Discretion: "User interface Design to Web application Home page.",
    imagePath: project1,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task1",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task1/",
  },
  {
    id: 2,
    Title: "Bakery Design",
    category: "css",
    Discretion:
      "Web sit Design to Web application with 3 page Home , About and Contact.",
    imagePath: project2,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-2",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-2/",
  },
  {
    id: 3,
    Title: "Html & Css Design",
    category: "css",
    Discretion: "User interface Design to Web application Home page.",
    imagePath: project3,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-3",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-3/",
  },
  {
    id: 4,
    Title: "Watch Shop",
    category: "bootstrap",
    Discretion: "E-commerce Web sit Design Using Html , CSS and Bootstrap.",
    imagePath: project4,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Task-4",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Task-4/",
  },
  {
    id: 5,
    Title: "Millennium Restaurant.",
    category: "js",
    Discretion:
      "Full E- commerce Front End web application for restaurant have Technologies Used: Html , Css , Bootstrap , javascript , Localstorage .",
    imagePath: project5,
    CodePath:
      "https://github.com/AbdelrahmanAbdelaziz10/Millennium-Restaurant.",
    demoPath:
      "https://abdelrahmanabdelaziz10.github.io/Millennium-Restaurant./",
  },
  {
    id: 6,
    Title: "Clock&Calculator&Project.",
    category: "js",
    Discretion:
      "Collection of small projects such as a clock, digital clock, stopwatch, and calculator.I use Html, CSS, and Javascript.",
    imagePath: project6,
    CodePath:
      "https://github.com/AbdelrahmanAbdelaziz10/Clock-Calculator-Project",
    demoPath:
      "https://abdelrahmanabdelaziz10.github.io/Clock-Calculator-Project/",
  },
  {
    id: 7,
    Title: "Weather App",
    category: "react",
    Discretion:
      "Weather Web site Show you the weather Based on the name of the city .",
    imagePath: project7,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Weather_App",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Weather_App/",
  },
  {
    id: 8,
    Title: "Movies App",
    category: "react",
    Discretion:
      "Weather Web site Show you the weather Based on the name of the city .",
    imagePath: project8,
    CodePath: "https://github.com/AbdelrahmanAbdelaziz10/Movies_DB_App",
    demoPath: "https://abdelrahmanabdelaziz10.github.io/Movies_DB_App/",
  },
  {
    id: 9,
    Title: "Red Sea",
    category: "react",
    Discretion:
      "The web sit for Soap factory to show all product and It shows their being and quality. this project using right now.",
    imagePath: project9,
    CodePath: "",
    demoPath: "https://rsdyemen.com/",
  },
];
export const Project = () => {
  const [currantactive, setCurrentactive] = useState("all");
  const [project, setProject] = useState(myProject);

  const buttonClick = (category) => {
    setCurrentactive(category);
    const bootStrapArray = myProject.filter((item) => {
      return item.category === category;
    });

    setProject(bootStrapArray);
  };

  return (
    <main id="project">
      <Row className="justify-content-center md-5">
        <Col lg="6" className="text-center">
          <h2>
            {" "}
            <span>My</span> Project
          </h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="left_section d-flex " lg="2" md="3">
          <button
            onClick={() => {
              setCurrentactive("all");
              setProject(myProject);
            }}
            className={currantactive === "all" ? "active" : null}
          >
            All Product
          </button>
          <button
            onClick={() => buttonClick("css")}
            className={currantactive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => buttonClick("bootstrap")}
            className={currantactive === "bootstrap" ? "active" : null}
          >
            {" "}
            Bootstrap
          </button>
          <button
            onClick={() => buttonClick("js")}
            className={currantactive === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => buttonClick("react")}
            className={currantactive === "react" ? "active" : null}
          >
            React & MUI
          </button>
        </Col>
        <Col className="right_section  " lg="10" md="9">
          <Row className="ms-lg-5 justify-content-center">
            <AnimatePresence>
              {project.map((item) => {
                return (
                  <Col key={item.id} lg="4" md="6" sm="1" className="mb-3">
                    <motion.article
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ type: "spring", damping: 8, stiffness: 50 }}
                      class="card "
                    >
                      <motion.img
                        src={item.imagePath}
                        class="card-img-top p-1"
                        alt="..."
                      />
                      <motion.div class="card-body">
                        <h5 class="card-title">{item.Title} </h5>
                        <p class="card-text">{item.Discretion}</p>
                        <Col className="d-flex ">
                          <a
                            href={item.demoPath}
                            target="_blank"
                            className="card_icon"
                          >
                            <FaLink />
                          </a>
                          {item.CodePath !== "" ? (
                            <a
                              href={item.CodePath}
                              target="_blank"
                              className="card_icon"
                            >
                              <FaGithub />
                            </a>
                          ) : null}
                        </Col>
                      </motion.div>
                    </motion.article>
                  </Col>
                );
              })}
            </AnimatePresence>
          </Row>
        </Col>
      </Row>
    </main>
  );
};
