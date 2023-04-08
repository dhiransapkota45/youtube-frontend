import { MdOutlineWatchLater } from "react-icons/md";
import { GrDownload } from "react-icons/gr";
import { IoMdShareAlt } from "react-icons/io";
import { TbMoodSadSquint } from "react-icons/tb";

interface videoModal {
  icon: JSX.Element;
  name: string;
}

export const videoModal: videoModal[] = [
  {
    icon: <MdOutlineWatchLater />,
    name: "save to watch later",
  },
  {
    icon: <GrDownload />,
    name: "download",
  },
  {
    icon: <IoMdShareAlt />,
    name: "share",
  },
  {
    icon: <TbMoodSadSquint />,
    name: "not interested",
  },
];
