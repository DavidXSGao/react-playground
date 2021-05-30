import { IconContext } from "react-icons/";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";

// https://react-icons.github.io/react-icons/
function Icons() {
  return (
    <IconContext.Provider value={{ color: "blue", size: "2rem" }}>
      <FaReact />
      <MdAlarm color="red" />
    </IconContext.Provider>
  );
}

export default Icons;
