import { useEffect ,useState} from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";

export const Posts = () => {
  
  const [data, setData] = useState([]);
  
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  // function to delete post

  const handleDeletePost = async(id)=>{
    try {
      const res = await deletePost(id);
     if(res.status === 200){
      const newUpdatedPost = data.filter((curPost)=>{
        return curPost.id === id;
      });
      setData(newUpdatedPost);
     }else{
      console.log("Fail to delete Post:", res.status)
     }
    } catch (error) {
      console.log("Error");
      
    }
     
  };

  return (
    <>
      <section>
        <Form data={data} setData={setData}/>
      </section>

      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <li key={id}>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
                <button className="bg-green-400">Edit</button>
                <button
                  className="bg-orange-400"
                  onClick={() => handleDeletePost(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};