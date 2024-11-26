import MainInner from "../atoms/MainInner";
import { PiTentBold } from "react-icons/pi";
import { CgNotes } from "react-icons/cg";
import { GrGamepad } from "react-icons/gr";
import { BsUpcScan } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";

const ProjectPage = (props) => {
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
        {"<PROJECT/>"}
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
          fontSize: "143x",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <MainInner
          icon={<PiTentBold />}
          sub="CCOLORE ▷ "
          text="https://github.com/CHOI-NARI/CCOLORE"
        />
        <MainInner icon={<CgNotes />} sub="두번째 ▷ " text="포트폴리오" />
        <MainInner icon={<GrGamepad />} sub="세번째 ▷ " text="많이많이" />
        <MainInner icon={<BsUpcScan />} sub="네번째 ▷ " text="만들어서" />
        <MainInner icon={<FaWifi />} sub="다섯번째 ▷ " text="채워넣기" />
      </div>
    </div>
  );
};

export default ProjectPage;
