import React from 'react'
import Header from '../Header/Header'
import chats from '../../assets/data.js'
import './chatsPasados.css'
const chatsPasados = () => {
  return (
    <>
        <Header/>
        <div id="chats-container">
            <ul>
                {
                    chats.map( (chat) => {
                        return <>
                        <li key={chat.id}>Chat N° {chat.id}</li>
                        <p>Fecha de creación: {chat.date}</p>
                        </>
                    })
                }
            </ul>
        </div>
    </>
  )
}

export default chatsPasados