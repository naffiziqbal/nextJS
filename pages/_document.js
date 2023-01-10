import { Html, Head, Main, NextScript } from 'next/document'
import Header from '/Components/Header'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='mx-auto container'>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
