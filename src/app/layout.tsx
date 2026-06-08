import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-next-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-next-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

import { ModalProvider } from "@/context/ModalContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PageLoader from "@/components/LoadingSystem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import MobileConversionBar from "@/components/MobileConversionBar";
import Modal from "@/components/Modal";
import SchemaMarkup from "@/components/SchemaMarkup";
import Analytics from "@/components/Analytics";
import { seoMetadata } from "@/data/metadata";

export const metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary-800 focus:px-4 focus:py-2 focus:rounded-xl focus:border focus:border-primary-500 focus:shadow-lg focus:outline-none font-sans text-xs font-bold"
        >
          Skip to Main Content
        </a>
        <Analytics />
        <SchemaMarkup />
        <ModalProvider>
          <SmoothScrollProvider>
            <PageLoader />
            <Header />
            <div className="flex-1 flex flex-col">
              {children}
            </div>
            <Footer />
            <FloatingCTAs />
            <MobileConversionBar />
            <Modal />
          </SmoothScrollProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
