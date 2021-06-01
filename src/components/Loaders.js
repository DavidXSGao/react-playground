import { ClipLoader } from "react-spinners";

// https://github.com/davidhu2000/react-spinners
function Loaders() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <ClipLoader loading size={24} color="lightblue" />
    </div>
  );
}

export default Loaders;
