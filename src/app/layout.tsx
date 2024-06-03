
import { Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Nav from '@/components/Nav'

const montserrat = Montserrat({ subsets: ["latin"] });
const workSans = Work_Sans({ subsets: ["latin"] });


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={workSans.className}>
        <NextIntlClientProvider messages={messages}>
          <Nav />
        <main className="md:ml-64 ml-0 p-4">
          {children}
        </main>
        <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
