import Header from "@/components/Header";
import { BagProvider } from "@/components/Providers/BagProvider";
import { CategoriesProvider } from "@/components/Providers/CategoriesProvider";
import { ColorProvider } from "@/components/Providers/ColorProvider";
import { LocationProvider } from "@/components/Providers/LocationProvider";
import "@/styles/globals.css";
import Head from 'next/head';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KSLZDSQYNX" />
                <Script>
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-KSLZDSQYNX');
                    `}
                </Script>
            </Head>
            <ColorProvider>
                <BagProvider>
                    <CategoriesProvider>
                        <LocationProvider>
                            <Component {...pageProps} />
                        </LocationProvider>
                    </CategoriesProvider>
                </BagProvider>
            </ColorProvider>
        </>
    );
}
