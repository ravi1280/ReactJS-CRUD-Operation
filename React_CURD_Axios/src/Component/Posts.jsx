import { useEffect } from "react";
import { getPost } from "../api/PostApi";

export const Posts = () => {
    
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return <h1>Hello Post Page</h1>;
};