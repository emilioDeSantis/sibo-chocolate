import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta property="og:title" content="Sibö Chocolate Costa Rica" />
                <meta
                    property="og:description"
                    content="Chocolate Fresh from the Source"
                />
                <meta
                    property="og:image"
                    content="https://sibo-chocolate.vercel.app/_next/image?url=%2Fhero.png&w=3840&q=75"
                />
                <meta property="og:url" content="https://sibochocolate.com" />
                <meta property="og:type" content="website" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
