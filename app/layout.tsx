"use client";

import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import { Help, Home } from "@mui/icons-material";
import { Card, CardBody, Link } from "@nextui-org/react";
import clsx from "clsx";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const list = [
    {
      title: "Home",
      icon: <Home />,
      route: "/",
    },
    {
      title: "Feedback",
      icon: <Help />,
      route: "/feedback",
    },
  ];
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        style={{ background: "url(/bg.svg)" }}
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          {/* <section className="h-[calc(100vh_-_64px)] 2xl:h-[calc(84vh_-_64px)] overflow-hidden  grid  sm:grid-cols-2">
            <Card className="w-40  h-screen text-white ">
              {list.map((item, index) => (
                <Card
                  className="w-20 h-40  "
                  shadow="sm"
                  key={index}
                  isPressable
                >
                  <CardBody className=" overflow-visible p-0 justify-center items-center">
                    {item.icon}

                    <h1>{item.title}</h1>
                  </CardBody>
                </Card>
              ))}
              {/* </div> */}
          {/* </Card>
            <Card className="w-auto bg-cyan-200"></Card>
            {children}
          </section> */}
          <div className="flex h-screen">
            <div className="px-4 gap-4 w-64 flex-none text-center flex flex-col justify-center">
              {list.map((item, index) => (
                <Link href={item.route} key={index}>
                  <Card
                    className="w-60 h-40 border-2 border-green-500"
                    shadow="sm"
                    key={index}
                    isPressable
                  >
                    <CardBody className=" overflow-visible p-0 justify-center items-center">
                      {item.icon}

                      <h1>{item.title}</h1>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>

            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
