const MyName = (props) => {
  return (
    <div
      onClick={props.change}
      style={{ fontSize: "80px", color: "grey", fontWeight: "bold" }}
    >
      {props.nameText}
    </div>
  );
};

export default MyName;
