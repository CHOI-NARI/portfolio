import MainInner from "../atoms/MainInner";
import { IoPersonCircle } from "react-icons/io5";
import { LuCake } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const IntroPage = (props) => {
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
        {"<INTRO/>"}
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
        <MainInner icon={<IoPersonCircle />} sub="이름 ▷ " text="최나리" />
        <MainInner icon={<LuCake />} sub="생년월일 ▷ " text="1986.09.25." />
        <MainInner
          icon={<MdOutlinePlace />}
          sub="주소 ▷ "
          text="인천광역시 중구 운서동"
        />
        <MainInner
          icon={<MdOutlineAttachEmail />}
          sub="이메일 ▷ "
          text="n42180@naver.com"
        />
        <MainInner
          icon={<FaGithub />}
          sub="Github ▷ "
          text="https://github.com/"
        />
      </div>
    </div>
  );
};

export default IntroPage;
