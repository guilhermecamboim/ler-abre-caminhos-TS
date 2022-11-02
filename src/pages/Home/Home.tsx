import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
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
          subtitle="por: Guilherme Camboim"
          image="https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          navLink={item.id}
          />
          ))}
      </S.ContainerCards>

    </S.Container>
  )
}