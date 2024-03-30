import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <StoreProvider>
          <Header />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
