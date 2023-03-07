import Document, { Html, Head, Main, NextScript } from 'next/document';
class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx);
        const keyword = await fetch('/api');

        return { ...props,keyword };
    }
    render() {
        return (
            <Html>
                <Head>
                    <title>{this.props.keyword}</title>
                    <style>
                        {
                            `
                            *{
                                padding:0;
                                margin:0;
                            }
                            `
                        }
                    </style>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default CustomDocument;