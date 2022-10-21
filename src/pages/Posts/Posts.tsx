import { Post } from "../../components/Post/Post";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from './styles.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guilhermecamboim.png',
      name: 'Guilherme Camboim',
      role: 'Autor',
    },
    title: 'Voce sabe o que é Amnésia de paisagem?',
    subtitle: 'Clique e descubra',
    imgCard: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    content: [
      {type: 'paragraph', content:'Em outras palavras, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'italic', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
];

export function Posts() {
  return (

    <div className={styles.wrapper}>
      <Sidebar />
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
        )
      })}
    </div>
  )
}