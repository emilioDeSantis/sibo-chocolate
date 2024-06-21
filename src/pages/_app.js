import Header from "@/components/Header";
import { BagProvider } from "@/components/Providers/BagProvider";
import { CategoriesProvider } from "@/components/Providers/CategoriesProvider";
import { ColorProvider } from "@/components/Providers/ColorProvider";
import { LocationProvider } from "@/components/Providers/LocationProvider";
import "@/styles/globals.css";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { pageview } from "@/gtm";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <ColorProvider>
            <BagProvider>
                <CategoriesProvider>
                    <LocationProvider>
                        <Header />
                        <Component {...pageProps} />
                    </LocationProvider>
                </CategoriesProvider>
            </BagProvider>
        </ColorProvider>
    );
}
