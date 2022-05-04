import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../../ui'

interface LayoutProps {
  title?: string
  children: JSX.Element
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'YelpNextApp'}</title>
        <meta name="author" content="Leonardo Omaña" />
        <meta name="description" content={`Yelp next App Info: ${title}`} />
        <meta name="keywords" content={`${title}, yelp, next`} />
        <meta property="og:title" content={`Info about: ${title}`} />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/images/yelp.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 20px'
        }}
      >
        {children}
      </main>
    </>
  )
}
