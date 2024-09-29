import { Sora } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Jenifar Jui",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-900 ">
      <body className={`${sora.className }  bg-[#0f172a]`}>
        {children}
        <ToastContainer />
        </body>
    </html>
  );
}
