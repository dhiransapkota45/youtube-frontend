import { AiOutlineHome } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdVideoSettings } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";

import { RiVideoUploadLine } from "react-icons/ri";

interface Route {
  path: string;
  name: string;
  icon: JSX.Element;
}

export const routes: Route[] = [
  {
    path: "/",
    name: "home",
    icon: <AiOutlineHome />,
  },

  {
    path: "/subscriptions",
    name: "subscriptions",
    icon: <MdSubscriptions />,
  },
  {
    path: "/history",
    name: "history",
    icon: <FaHistory />,
  },
  {
    path: "/yourvideos",
    name: "your videos",
    icon: <MdVideoSettings />,
  },
  {
    path: "/watchlater",
    name: "watch later",
    icon: <MdOutlineWatchLater />,
  },
  {
    path: "/likedvideos",
    name: "liked videos",
    icon: <AiOutlineLike />,
  },
  {
    path: "/dislikedvideos",
    name: "disliked videos",
    icon: <BiDislike />,
  },
  {
    path: "/createvideo",
    name: "Upload Video",
    icon: <RiVideoUploadLine />,
  },
];
