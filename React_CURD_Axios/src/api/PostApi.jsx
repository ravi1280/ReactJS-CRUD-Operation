import axios from "axios";

 const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
 });

//  get Methods 
 export const getPost =()=>{
    return api.get("/posts");
 };

//  delete Method
 export const deletePost = (id) => {
   return api.delete(`/posts/${id}`);
 };

 //  post Methods 
 export const postData =(post)=>{
   return api.post("/posts",post);
};