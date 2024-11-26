import IntroPage from "../molecules/IntroPage";
import ProjectPage from "../molecules/ProjectPage";
import TechPage from "../molecules/TechPage";

const Main = (props) => {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          margin: "300px 0px",
        }}
      >
        <IntroPage />
        <TechPage />
        <ProjectPage />
      </div>
    </div>
  );
};

export default Main;
