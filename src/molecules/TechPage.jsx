import MainInner from "../atoms/MainInner";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandReact } from "react-icons/tb";

const TechPage = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <button
        style={{
          borderRadius: "12px",
          border: "2px solid grey",
          backgroundColor: "white",
          color: "pink",
          fontWeight: "bold",
          fontSize: "17px",
          width: "140px",
          height: "40px",
        }}
      >
        {"<TECH/>"}
      </button>
      <div
        style={{
          borderRadius: "20px",
          paddingLeft: "50px",
          border: "2px solid grey",
          width: "400px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: "20px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <MainInner icon={<FaHtml5 />} sub=" ▷ " text="HTML" />
        <MainInner icon={<FaCss3Alt />} sub=" ▷ " text="CSS" />
        <MainInner icon={<IoLogoJavascript />} sub=" ▷ " text="JavaScript" />
        <MainInner icon={<SiTypescript />} sub=" ▷ " text="TypeScript" />
        <MainInner icon={<TbBrandReact />} sub=" ▷ " text="React" />
      </div>
    </div>
  );
};

export default TechPage;
