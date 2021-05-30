import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// https://github.com/fkhadra/react-toastify

const CustomErrorNotification = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

// otherwise have to import ToastContainer and put ToastContainer element in jsx
toast.configure();

function ToastNotification() {
  const notify = () => {
    // default
    toast("(1) Simple default notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.success("(1) Simple success notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 8000,
    });
    toast.info("(1) Simple info notification", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn("(1) Simple warn notification", {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.error(<CustomErrorNotification />, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={notify}>Click Me For A Notification</button>
    </div>
  );
}

export default ToastNotification;
