import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import {createGlobalStyle} from 'styled-components'//グローバルなスタイルを定義するためのヘルパー関数

//グローバルなスタイル
const GlobalStyle = createGlobalStyle`
html,
body,
textarea{
    padding:0;
    margin:0;
}
*{
  box-sizing:border-box
}
a{
  cursor:pointer;
  txt-decoration:none;
  transiton:.25s;
  color:#000
  
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <meta key="charaset" name="charaset" content="utf-8" />
      <meta
        key="viewpoint"
        name="viewpoint"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,maximum-scale=5"
      />
      <meta property="og:local" content="ja_JP"/>
      <meta property="og:type" content="website"/>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
    </>

  )
}

export default MyApp
