import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          {/* ------------------------------------REMOVE META ON PRODUCTION------------------------------------ */}
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <body className="min-h-screen bg-gray-50 overflow-x-hidden">
          <Main />
          <NextScript />
          <script
            src="https://kit.fontawesome.com/ede2fe071e.js"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
