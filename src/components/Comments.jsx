/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function getData() {
      const data = await fetchData(postId);
      if (!ignore) {
        setComments(data);
      }
    }

    getData();
    //cleaning up
    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
};

export default Comments;
