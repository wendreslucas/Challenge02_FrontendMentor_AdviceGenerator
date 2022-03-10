import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <meta
          name="description"
          content="QR Code - Frontend Mentor | Challenge 01 |"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
