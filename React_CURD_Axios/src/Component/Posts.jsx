import { useEffect ,useState} from "react";
import { getPost } from "../api/PostApi";

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

  return (
    <section className="section-post">
      <ul>
        {data.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li key={id}>
              <p>Title : {title}</p>
              <p>Body : {body}</p>
              <button className="bg-green-400">Edit</button>
              <button className="bg-orange-400">Delete</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};