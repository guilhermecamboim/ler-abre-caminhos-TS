import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { api } from '../../lib/axios';
import * as S from './styles'

export function Home() {

  const [ dataAPI, setDataAPI ] = useState<any>('')

const fetchData = async () => {
  const result = await api.get('post');
  setDataAPI(result.data)
}

useEffect(() => {
  fetchData()
}, [])

  return (
    <S.Container>
      <Sidebar/>
      <S.ContainerCards>
        {Array.from(dataAPI).map((item: any) => (
          <Card 
          title={item.title}
          subtitle="Autor: Guilherme Camboim"
          image={item.file.fileUrl}
          navLink={item.id}
          date={item.createdAt}
          />
          ))}
      </S.ContainerCards>

    </S.Container>
  )
}