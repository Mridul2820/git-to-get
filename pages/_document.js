import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    
                // eslint-disable-next-line
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="theme-color" content="#9a65fd"/>
                    <script
                        defer
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());

                                gtag('config', '${GA_TRACKING_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>
                <body className="dark:bg-gray-800">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}