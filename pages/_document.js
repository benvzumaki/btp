import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="light">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Philosopher&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-my-black text-my-black dark:text-white transition-all duration-300 ease-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
