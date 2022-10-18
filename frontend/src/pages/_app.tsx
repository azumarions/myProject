import { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { AuthContextProvider } from 'contexts/AuthContext'
import type { ApiContext } from 'types'
import { fetcher } from 'utils'

const context: ApiContext = {
  apiRootUrl: process.env.NEXT_PUBLIC_API_BASE_PATH || '/api/proxy',
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        {/* <title key="title">{SITE_TITLE}</title>
        <meta name="title" content={SITE_TITLE} key="meta:title" />
        <meta name="description" content={SITE_DESCRIPTION} key="meta:description" />
        <meta property="og:title" content={SITE_TITLE} key="meta:og:title" />
        <meta property="og:description" content={SITE_DESCRIPTION} key="meta:og:description" />
        <meta property="og:image" content={`${publicRuntimeConfig.domainUrl}/static/images/icon/icon-512.png`} key="meta:og:image" />
        <meta property="og:site_name" content={SITE_NAME} /> */}
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        {/* <meta property="fb:app_id" content="556485011968079" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@truck2hand" /> */}
      </Head>
        <SWRConfig
          value={{
            shouldRetryOnError: false,
            fetcher,
          }}
        >
          <AuthContextProvider context={context}>
            <Component {...pageProps} />
          </AuthContextProvider>
        </SWRConfig>
    </>
  )
}

export default MyApp