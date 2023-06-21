import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../components/server/Navbar";
import Footer from "../../components/server/Footer";
import PagePadding from "../../components/server/PagePadding";
import PageSizer from "../../components/server/PageSizer";
import CartContext from "../../components/client/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sticker Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageSizer>
          <CartContext>
            <Navbar></Navbar>
            <PagePadding>
              {children}
              <Footer></Footer>
            </PagePadding>
          </CartContext>
        </PageSizer>
      </body>
    </html>
  );
}
