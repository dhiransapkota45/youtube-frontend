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
import {
  commentOnVideo,
  getCommentReplies,
} from "../../../api/videos/activeVideo";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducers";
import { useDispatch } from "react-redux";

type Prop = {
  comment: Comment;
};

// --------------------------------------------
const CommentBox = ({ comment }: Prop) => {
  const [replyModal, setReplyModal] = React.useState(false);
  const [replymessage, setReplyMessage] = React.useState<string>("");
  const dispatch = useDispatch();
  const { data } = useSelector((store: RootState) => store.activeVideo);

  const replyHandler = () => {
    setReplyModal(!replyModal);
  };

  const replySubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    commentOnVideo(data._id, replymessage, dispatch, comment._id);
    setReplyMessage("");
    setReplyModal(false);
  };

  const getReplyHandler = () => {
    getCommentReplies(data._id, comment._id, dispatch);
  };

  return (
    <div className=" w-full px-6 py-3 bg-bg-secondary flex ">
      <div className=" w-10 h-10 mr-3 rounded-full overflow-hidden relative">
        <Image
          src={`${process.env.BACKEND_URL}/images/${comment.commenter?.profile_pic}`}
          alt="commenter_profile"
          fill
        />
      </div>

      <div className=" flex-1 flex flex-col">
        <div className="">{comment.commenter?.username}</div>
        <div className="">{comment.comment}</div>
        <div className="flex gap-x-3  items-center relative">
          <button className=" ">
            <AiOutlineLike className="" />
          </button>
          <button>
            <AiOutlineDislike />
          </button>

          <button onClick={replyHandler}>reply</button>
        </div>

        {/* {replyModal && ( */}
        <form
          onSubmit={replySubmitHandler}
          className={` w-full ${
            replyModal ? "h-full" : "h-0"
          }  my-2  overflow-hidden  `}
        >
          <input
            name="reply"
            value={replymessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            type="text"
            placeholder="reply"
            className="border border-bg-tertiary bg-bg-primary rounded-lg py-1 w-full outline-none px-3"
          />
        </form>
        {comment.replyCount > 0 && (
          <div className=" ">
            {comment.replies ? (
              comment.replies.map((reply: Comment) => {
                return <CommentBox key={reply._id} comment={reply} />;
              })
            ) : (
              <button
                onClick={getReplyHandler}
                className=" text-blue-500 flex items-center mt-1 gap-x-1"
              >
                <AiFillCaretDown className="text-xl mt-1" /> view
                {comment.replyCount} replies
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
