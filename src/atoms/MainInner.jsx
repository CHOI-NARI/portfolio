const MainInner = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        color: "grey",
      }}
    >
      {props.icon}
      <span>{props.sub}</span>
      <span>{props.text}</span>
    </div>
  );
};

export default MainInner;
