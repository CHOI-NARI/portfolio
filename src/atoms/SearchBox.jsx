import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "right",
        border: "1px solid grey",
        borderRadius: "25px",
        width: "700px",
        height: "50px",
      }}
    >
      <span>
        <FaMagnifyingGlass
          style={{
            width: "30px",
            height: "30px",
            color: "grey",
            margin: "10px 30px",
          }}
        />
      </span>
    </div>
  );
};

export default SearchBox;
