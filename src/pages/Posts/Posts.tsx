import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { api } from "../../lib/axios";
import styles from './styles.module.css';



export function Posts() {
  const [ dataAPI, setDataAPI ] = useState<any>('')

  const { postId } = useParams();

  const fetchData = async () => {
    const result = await api.get(`post/${postId}`);
    setDataAPI(result.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <div className={styles.wrapper}>
      <Sidebar />
      {dataAPI.title}
{/*       {dataAPI.map((post: any) => {
        return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
      })} */}
    </div>
  )
}