import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { api } from "../../lib/axios";
import * as S from './styles';



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

    <S.Container>
      <Sidebar />
          <Post
            key={dataAPI.id}
            //author={dataAPI.author}
            content={dataAPI}
            //publishedAt={dataAPI.publishedAt}
          />
    </S.Container>
  )
}