import "../globals.css";
import { Slide, ToastContainer } from "react-toastify";
import Footer from "../components/layout/Footer";
import "react-toastify/dist/ReactToastify.css";
// import ProgressBar from "@/components/ProgressBar";
import { StateContext } from "@/context/StateContext";
import Navbar from "@/components/layout/Navbar";
import { EB_Garamond } from "next/font/google";
import { META_TAGS, OWNER, SHOP_DESC, BRAND, SITE_LINK } from "@/data/shopdata";
// import { getUser } from "@/server/user/profile";
// import { getCart } from "@/server/user/cart";
// import Script from "next/script";

const font = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: BRAND,
  description: SHOP_DESC,
  canonical: SITE_LINK,
  keywords: META_TAGS,
  author: {
    title: OWNER.name,
    email: OWNER.email,
  },
  url: SITE_LINK,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: BRAND,
    description: SHOP_DESC,
    canonical: SITE_LINK,
    keywords: META_TAGS,
    author: {
      title: OWNER.name,
      email: OWNER.email,
    },
    url: SITE_LINK,
    site_name: BRAND,
    images: [
      {
        url: "/BRAND.png",
        width: 800,
        height: 600,
        alt: BRAND,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  category: META_TAGS,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }) {
  const user = {};
  const cart = {};

  return (
    <>
      <html lang="en">
        <body className={`${font.className} bg-primary-clr text-primary-clr`}>
          <StateContext>
            {/* <ProgressBar /> */}

            <ToastContainer
              position="bottom-center"
              autoClose={1500}
              transition={Slide}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              limit={3}
              stacked
              pauseOnHover
              theme="dark"
            />

            <Navbar user={user} cart={cart} />

            <main className="min-h-screen">{children}</main>

            <Footer user={user} />
          </StateContext>
        </body>
      </html>

      {/* Google tag (gtag.js) */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="ga-tag" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
          `,
        }}
      /> */}
    </>
  );
}
