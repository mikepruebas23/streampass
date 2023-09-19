import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import AppBarComponent from './AppBar';


export default function Layout({children, title}){
  return (
    <>
      <Head>
        <title>{title || 'StreamPass'}</title>
        <meta name="author" content="Miguel Amrneta"/>
        <meta name="description" content={`Información sobre el pokémon ${title}`}/>
        <meta name="keywords" content={`${title}, smashbros, retos twitch`}/>
      </Head>
      <AppBarComponent />
      <main style={{
          padding: '20px 20px',
          background: '#e3e6e6'
      }}>
          {children}
      </main>
    </>
  )
}
