import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.scss";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
