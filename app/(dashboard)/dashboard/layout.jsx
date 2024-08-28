import { Outfit } from "next/font/google";
import "../../../app/globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Header from "@components/Header";
import { Provider } from "@app/contextProvider/Provider";
import Image from "next/image";

const outfit = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "Top Taste",
  description: "Have food & share love ",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={cn("bg-background antialiased", outfit.className)}>
        <Image
          src="/assets/hero.svg"
          width={658}
          height={500}
          className="absolute top-0 right-0 w-full md:w-[60%] -z-10"
          alt="hero-img"
        ></Image>
        <div className="max-container  h-full ">
          <Provider>
            <Header admin={true}></Header>

            {children}
          </Provider>
          <Toaster></Toaster>
        </div>
      </body>
    </html>
  );
}
