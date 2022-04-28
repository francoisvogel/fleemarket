import Head from 'next/head'
import '../styles/global.css'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Flee Market</title>
                <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}