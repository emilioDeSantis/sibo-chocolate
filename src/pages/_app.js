import Header from "@/components/Header";
import { BagProvider } from "@/components/Providers/BagProvider";
import { CategoriesProvider } from "@/components/Providers/CategoriesProvider";
import { ColorProvider } from "@/components/Providers/ColorProvider";
import { LocationProvider } from "@/components/Providers/LocationProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ColorProvider>
            <BagProvider>
                <CategoriesProvider>
                    <LocationProvider>
                        <Component {...pageProps} />
                    </LocationProvider>
                </CategoriesProvider>
            </BagProvider>
        </ColorProvider>
    );
}
