import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
const VideoStream = () => {
  const router = useRouter();
  console.log(router);

  return (
    <video className="w-full" controls autoPlay>
      <source
        src={`${process.env.BACKEND_URL}/api/videos/streamvideo/${router.query.videoid}`}
        type="video/mp4"
      />
    </video>
  );
};

export default VideoStream;
