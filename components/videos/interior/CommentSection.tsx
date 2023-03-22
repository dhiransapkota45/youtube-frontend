import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducers";
import Comment from "./Comment";

type Props = {
  onsubmithandler: (e: React.FormEvent<HTMLFormElement>) => void;
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
  replies: any;
  parentComment: null | number;
};

const CommentSection = ({ onsubmithandler }: Props) => {
  const { data } = useSelector((store: RootState) => store.activeVideo);
  const { comments } = data;
  console.log(comments);

  return (
    <div>
      <form onSubmit={onsubmithandler}>
        <input
          type="text"
          name=""
          id=""
          placeholder="comment here"
          className="w-full border border-bg-tertiary outline-none rounded p-2 bg-bg-secondary"
        />
      </form>

      <div>
        {comments.length === 0 ? (
          <div>No comments</div>
        ) : (
          <div>
            {comments.map((comment: Comment) => {
              return <Comment key={comment._id} comment={comment} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;