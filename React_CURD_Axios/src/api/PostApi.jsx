import axios from "axios";

 const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
 });

//  get Methods 
 export const getPost =()=>{
    return api.get("/posts");
 };