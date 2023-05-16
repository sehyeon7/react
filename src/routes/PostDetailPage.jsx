import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BigPost } from "../components/Posts";
import { Comment } from "../components/Comment/index";
import { Link } from "react-router-dom";
import posts from "../data/posts";

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const post = posts.find((post) => post.id === parseInt(postId));
    setPost(post);
  }, [postId]);

  const onClickDelete = () => {
    console.log("delete");
  };

  return (
    post && (
      <div className="flex flex-col items-center w-3/5 p-8">
        {/* post detail component */}
        <BigPost post={post} />
        <Comment />
        <div>
          <Link to={`/${post.id}/edit`}>
            <button className="button mt-10 mx-4 py-2 px-10">Edit</button>
          </Link>
          <button
            className="button mt-10 mx-4 py-2 px-10"
            onClick={onClickDelete}
          >
            Delete
          </button>
        </div>

      </div>
    )
  );
};

export default PostDetailPage;
