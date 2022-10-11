import { Post } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/guilhermecamboim.png',
      name: 'Guilherme Camboim',
      role: 'Autor',
    },
    content: [
      {type: 'paragraph', content:'Em outras palavras, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'italic', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Usu%C3%A1rio-HM.png',
      name: 'Danielle Souza',
      role: 'Autor',
    },
    content: [
      {type: 'image', content:'https://images.unsplash.com/photo-1665425252293-af1d4696829f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665474242672-4572ac74ef6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665472832769-c8bffec9296f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'paragraph', content:'Em outras palavras, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'paragraph', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {

  return (
  <div>
    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
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
      </main>
    </div>
  </div>
  )
}
