import "@/app/globals.css";
import ToastProvider from "@/components/toastProvider/ToastProvider";
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
