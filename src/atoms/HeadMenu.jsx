import { useState } from "react";

const HeadMenu = (props) => {
  return (
    <div
      style={{
        borderRadius: "9999px",
        width: "100px",
        height: "100px",
        backgroundColor: "pink",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#808080",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.HeadTitleText}
    </div>
  );
};
export default HeadMenu;
