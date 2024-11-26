import HeadMenu from "../atoms/HeadMenu";
import MyName from "../atoms/MyName";
import SearchBox from "../atoms/SearchBox";

const HelloPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        marginTop: "300px",
      }}
    >
      <MyName nameText="CHOI, NARI" />
      <SearchBox />
      <div
        style={{
          display: "flex",
          gap: "40px",
        }}
      >
        <HeadMenu HeadTitleText="HOME" />
        <HeadMenu HeadTitleText="INTRO" />
        <HeadMenu HeadTitleText="TECH" />
        <HeadMenu HeadTitleText="PROJECT" />
      </div>
    </div>
  );
};

export default HelloPage;
