import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,
    // subNav: [
    //   {
    //     title: "Users",
    //     path: "/overview/users",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "Infinite Scroll",
    path: "/infiniteScroll",
    icon: <AiIcons.AiFillBook />,
  },
  {
    title: "Toast Notifications",
    path: "/toast",
    icon: <AiIcons.AiFillBell />,
  },
  {
    title: "Modal",
    path: "/modal",
    icon: <FaIcons.FaReceipt />,
  },
  {
    title: "Tooltips",
    path: "/tooltips",
    icon: <AiIcons.AiFillInfoCircle />,
  },
  {
    title: "Animation",
    path: "/animation",
    icon: <AiIcons.AiFillWarning />,
  },
  {
    title: "Idle Tracker",
    path: "/idle",
    icon: <AiIcons.AiFillClockCircle />,
  },
  {
    title: "Color Picker",
    path: "/colors",
    icon: <AiIcons.AiOutlineBgColors />,
  },

  {
    title: "Credit Card",
    path: "/creditCard",
    icon: <FaIcons.FaCreditCard />,
  },
  {
    title: "Date Picker",
    path: "/datePicker",
    icon: <FaIcons.FaCalendarAlt />,
  },
  {
    title: "Video",
    path: "/video",
    icon: <AiIcons.AiFillVideoCamera />,
  },
  {
    title: "Icons",
    path: "/icons",
    icon: <FaIcons.FaReact />,
  }
];
