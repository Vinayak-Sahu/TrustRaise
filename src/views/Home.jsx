import { useEffect } from "react";
import { useState } from "react";
import AddButton from "../components/AddButton";
import CreateProject from "../components/CreateProject";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { loadProjects } from "../services/blockchain";
import { useGlobalState } from "../store";
import AboutUs from "../components/About";

const Home = () => {
  const [about, setabout] = useState(false);
  const [projects] = useGlobalState("projects");

  useEffect(async () => {
    await loadProjects();
  }, []);
  return (
    <>
      {about ? (
        <div>
          <AboutUs />
        </div>
      ) : (
        <div>
          <Hero />

          <Projects projects={projects} />
          <CreateProject />
          <AddButton />
        </div>
      )}
    </>
  );
};

export default Home;