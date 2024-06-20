
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children
  ,
  left,right,
  auth
}: Readonly<{
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  auth: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=s174x3EzyYNtTFi8M6XWwHFldGBYPpLo"></script>
      </head>
      <body className={inter.className}>

        <div className="bg-emerald-500">
                  {/* ---{left}{right} */}
          <div>
            <Link href="/test/test1" >goto test1---</Link>
            <Link href="/test/test2" >goto test2</Link>
            <Link href="/login" passHref >goto login </Link>
          </div>
          <hr />
          <br />
        </div>
        {children}
        {auth}
        <div id="modal-root" />
        </body>
    </html>
  );
}
