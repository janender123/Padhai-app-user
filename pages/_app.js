/* eslint-disable @next/next/no-sync-scripts */
// import node module libraries
import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import SSRProvider from "react-bootstrap/SSRProvider";

// import provider and store from redux state management.
import { Provider } from "react-redux";
import { store } from "store/store";

// import theme style scss file
import "styles/theme.scss";

// import default layouts
import DefaultMarketingLayout from "layouts/marketing/DefaultLayout";
import DefaultDashboardLayout from "layouts/dashboard/DashboardIndex";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "Padhae - Learning starts here 🚀 ";
  const description = "Padhae - Make learning easy and fun!";
  const keywords =
    " Padhai , padhae, learning, education, upsc, jee, jee advanced, courses, Course, landing, Marketing, admin themes, Nextjs admin, Nextjs dashboard, ui kit, web app, multipurpose";

  // Identify the layout, which will be applied conditionally
  const Layout =
    Component.Layout ||
    (router.pathname.includes("dashboard")
      ? router.pathname.includes("instructor") ||
        router.pathname.includes("student")
        ? DefaultMarketingLayout
        : DefaultDashboardLayout
      : DefaultMarketingLayout);

  return (
    <SSRProvider>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link
          rel="shortcut icon"
          href="/images/brand/logo/logo-padhae-1.png"
          type="image/x-icon"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.siteName,
          images: [
            {
              url: "/images/brand/logo/logo-padhae-1.png",
              width: 1200,
              height: 630,
              alt: "Padhae-Learning starts here 🚀",
            },
          ],
        }}
      />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SSRProvider>
  );
}

export default MyApp;
