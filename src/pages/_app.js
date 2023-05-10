import Header from "@/components/Header";
import { ColorProvider } from "@/components/Providers/ColorProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <ColorProvider>
            <Component
                {...pageProps}
            />
        </ColorProvider>
    );
}
