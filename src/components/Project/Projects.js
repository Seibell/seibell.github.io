import NavBar from "../NavBar";
import projImg1 from "./project-img1.png";
import projImg2 from "./project-img2.png";
import projImg3 from "./project-img3.png";
import "./Projects.css";
import { useColorMode } from "@chakra-ui/react";
import { lightTheme, darkTheme } from '../../constants/themes';
import DarkModeButton from "../DarkModeButton/DarkModeButton";

export const Projects = () => {

  const projects = [
    {
      title: "MealNUS",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Plutus",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Data Engineering Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Loot Accumulator",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Component Reel Estimator + OCR Application",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Fall Detector",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Health Data Wearable Device",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "LobbyReveal",
      description: "Adapted for SG servers",
      imgUrl: projImg1,
    },
  ];

  const currentYear = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const theme = colorMode === "dark" ? darkTheme : lightTheme;

  // Set the CSS variable values based on the theme
  document.documentElement.style.setProperty('--project-card-bg', theme.backgroundSecond);
  document.documentElement.style.setProperty('--project-card-text', theme.text);
  document.documentElement.style.setProperty('--project-card-text-secondary', theme.textSecondary);
  document.documentElement.style.setProperty('--project-card-shadow', `0px 4px 10px ${theme.boxShadow}`);

  return (
    <div>
      <NavBar />
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imgUrl} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer" style={{ textAlign: 'center', fontWeight: 'semibold', fontSize: '10px' }}>
        © {currentYear} Ryan Lim. All Rights Reserved
      </footer>
    </div>
  );
}

export default Projects;
