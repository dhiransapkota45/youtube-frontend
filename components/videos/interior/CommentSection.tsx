import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducers";
import Comment from "./CommentBox";

type Props = {
  onsubmithandler: (e: React.FormEvent<HTMLFormElement>) => void;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
};

export type Comment = {
  _id: string;
  commenter: {
    _id: string;
    username: string;
    profile_pic: string;
  };
  comment: string;
  likes: any;
  dislikes: any;
  replies: any[];
  parentComment: null | number;
  replyCount: number;
};

const CommentSection = ({ onsubmithandler, comment, setComment }: Props) => {
  const { data } = useSelector((store: RootState) => store.activeVideo);
  const { comments } = data;
  console.log(comments);

  return (
    <div>
      <form onSubmit={onsubmithandler}>
        <input
          onChange={(e) => setComment(e.target.value)}
          type="text"
          value={comment}
          name="comment"
          id=""
          placeholder="comment here"
          className="w-full  outline-none rounded-full my-1 py-2 px-4 bg-bg-secondary"
        />
      </form>

      <div className="">
        {comments?.length === 0 ? (
          <div>No comments</div>
        ) : (
          <div className="rounded-xl border overflow-hidden">
            {comments?.map((comment: Comment) => {
              return <Comment key={comment._id} comment={comment} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
