import { useEffect } from "react";
import { getPost } from "./api/PostApi";

const App =() =>{
 

  const getPostData =(async()=>{
    const res = await getPost();
    console.log(res );

  })

  useEffect(()=>{
    getPostData();
  },[])

  return <h1>Hello  React CURD Operations </h1>
} ;

export default App;  