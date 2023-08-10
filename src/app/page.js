"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner name="Yotsawat Sukinee" StdId="650612097" />

        {/* map-loop render Comment component here */}
        {comments.map((comm) => (
          <Comment
            key={comm.likeNum}
            userImagePath={comm.userImagePath}
            username={comm.username}
            commentText={comm.commentText}
            likeNum={comm.likeNum}
            replies={comm.replies}
          />
        ))}
      </div>
    </div>
  );
}
