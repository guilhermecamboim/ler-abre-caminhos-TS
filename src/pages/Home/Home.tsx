import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import styles from './styles.module.css'

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
      {type: 'paragraph', content:'Em outras palavras 1, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
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
      name: 'Guilherme Camboim',
      role: 'Autor',
    },
    title: 'De que maneira você gasta seu tempo de vida?',
    subtitle: 'Clique e descubra',
    imgCard: 'https://images.unsplash.com/photo-1598714673521-98d539a175f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    content: [
      {type: 'image', content:'https://images.unsplash.com/photo-1665425252293-af1d4696829f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665474242672-4572ac74ef6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665472832769-c8bffec9296f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'paragraph', content:'Em outras palavras 2, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'paragraph', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Usu%C3%A1rio-HM.png',
      name: 'Danielle Souza',
      role: 'Autor',
    },
    title: 'O Bicho, de Manuel Bandeira - Poemas',
    subtitle: 'Clique e descubra',
    imgCard: 'https://images.unsplash.com/photo-1615971304240-82c1793aa182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    content: [
      {type: 'image', content:'https://images.unsplash.com/photo-1665425252293-af1d4696829f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665474242672-4572ac74ef6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665472832769-c8bffec9296f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'paragraph', content:'Em outras palavras 3, os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'paragraph', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 4,
    author: {
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Usu%C3%A1rio-HM.png',
      name: 'Guilherme Camboim',
      role: 'Autor',
    },
    title: 'Você sabe o que foi a Revolução Cognitiva?',
    subtitle: 'Clique e descubra',
    imgCard: 'https://images.unsplash.com/photo-1541558618-e8a990c6382c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBsYWNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    content: [
      {type: 'image', content:'https://images.unsplash.com/photo-1665425252293-af1d4696829f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665474242672-4572ac74ef6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'image', content:'https://images.unsplash.com/photo-1665472832769-c8bffec9296f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'},
      {type: 'paragraph', content:'Em outras palavras , os danos não ocorreram do dia para noite, mas sim durante décadas. Essas pequenas mudanças na paisagem, que eram rotineiras, tornaram-se quase imperceptíveis ao olhar mais apurado (amnésia de paisagem) até que o Colapso - eternizado por Jared Diamond neste livro - estivesse formado.'},
      {type: 'paragraph', content:'A moral da história? Segundo Rutger Bregman "A moral diz respeito a nós mesmos. Se pusermos a Ilha de Páscoa e o planeta Terra lado a lado, veremos alguns paralelos inquietantes. Vamos considerar: a Ilha de Páscoa é uma manchinha no vasto oceano; a Terra é uma manchinha na imensidão do cosmos. Os ilhéus não tinham barcos para fugir; nós não temos foguetes para nos levar daqui. A Ilha de Páscoa foi desmatada e superpovoada; nosso planeta está ficando poluído e superaquecido".'},
      {type: 'paragraph', content:'Será que não está na hora de mudarmos esse panorama?'},
      {type: 'link', content:'@jareddiamondofficial', ref: 'https://www.instagram.com/jareddiamondofficial/'},
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];



export function Home() {
  return (
    <main className={styles.container}>
      <Sidebar/>
      <div className={styles.containerCards}>
        {posts.map(item => (
          <Card 
          title={item.title}
          subtitle={`Por: ${item.author.name}`}
          image={item.imgCard}
          navLink={item.id}
          />
          ))}
      </div>

    </main>
  )
}