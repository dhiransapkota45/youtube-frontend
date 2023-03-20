import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { api_instance } from "../../../api/instance";

const Videoid = () => {
  const router = useRouter();
  return (
    <div>
      <video className="w-96" controls>
        <source
          src={`http://localhost:8000/api/videos/streamvideo/${router.query.videoid}`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Videoid;
