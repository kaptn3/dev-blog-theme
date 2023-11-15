import "../assets/css/globals.css"
import React from "react";
import {Metadata} from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Kapiko блог',
  description: 'Блог-заметки веб-разработки',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body suppressHydrationWarning={true} className="h-full flex justify-center bg-zinc-50 lg:px-8">
        <div className="w-full max-w-7xl lg:px-8 bg-white ring-1 ring-zinc-100">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
