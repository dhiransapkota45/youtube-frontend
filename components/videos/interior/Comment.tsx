import Image from "next/image";
import React from "react";
import { Comment } from "./CommentSection";
import { AiFillCaretDown } from "react-icons/ai";

import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";

type Prop = {
  comment: Comment;
};

const Comment = ({ comment }: Prop) => {
  const [replyModal, serReplyModal] = React.useState(false);
  const replyHandler = () => {
    serReplyModal(!replyModal);
  };

  return (
    <div className=" w-full  px-6 py-3 bg-bg-secondary flex ">
      <div className=" w-10 h-10 mr-3 rounded-full overflow-hidden relative">
        <Image
          src={`${process.env.BACKEND_URL}/images/${comment.commenter.profile_pic}`}
          alt="commenter_profile"
          fill
        />
      </div>

      <div className=" flex flex-col">
        <div className="">{comment.commenter.username}</div>
        <div className="">{comment.comment}</div>
        <div className="flex gap-x-3 items-center relative">
          <button className=" ">
            <AiOutlineLike className="" />
          </button>
          <button>
            <AiOutlineDislike />
          </button>

          <button onClick={replyHandler}>reply</button>
        </div>

        {replyModal && (
          <div>
            <input
              type="text"
              placeholder="reply"
              className="border bg-red-500 block"
            />
          </div>
        )}

        <div className=" text-blue-500 flex items-center mt-1 gap-x-1">
          <AiFillCaretDown className="text-xl mt-1" /> view
          {comment.replies.length} replies
        </div>
      </div>
    </div>
  );
};

export default Comment;
