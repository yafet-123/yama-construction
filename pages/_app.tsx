import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME} — Heavy Equipment & Industrial Machinery Supplier Ethiopia</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:title" content={`${SITE_NAME} — Heavy Equipment & Industrial Machinery Supplier Ethiopia`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:siteName" content={SITE_NAME} />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_NAME,
              url: 'https://www.yamaconstruction.com',
              logo: 'https://www.yamaconstruction.com/logo.png',
              description: SITE_DESCRIPTION,
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Bole Road',
                addressLocality: 'Addis Ababa',
                addressCountry: 'ET',
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+251-11-550-1234',
                  contactType: 'sales',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+251-11-550-5678',
                  contactType: 'customer service',
                },
              ],
              sameAs: [
                'https://www.linkedin.com/company/yama-construction',
                'https://www.facebook.com/yamaconstruction',
              ],
            }),
          }}
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
