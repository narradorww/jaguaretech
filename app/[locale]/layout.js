import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Oxanium, Space_Grotesk } from "next/font/google";
import "../globals.css";

const oxanium = Oxanium({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://jaguaretech.com.br"),
  title: "Jaguaretech | Mobile e IA para produtos vivos",
  description:
    "Estudio de desenvolvimento focado em mobile e inteligencia artificial. Criamos apps e sistemas inteligentes sob medida.",
  openGraph: {
    title: "Jaguaretech | Mobile e IA para produtos vivos",
    description: "Estudio de desenvolvimento focado em mobile e inteligencia artificial. Criamos apps e sistemas inteligentes sob medida.",
    url: "https://jaguaretech.com.br",
    siteName: "Jaguaretech",
    images: [
      {
        url: "/hero-jaguaretch.png",
        width: 1200,
        height: 630,
        alt: "Jaguaretech Hero Image",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaguaretech | Mobile e IA para produtos vivos",
    description: "Estudio de desenvolvimento focado em mobile e inteligencia artificial. Criamos apps e sistemas inteligentes sob medida.",
    images: ["/hero-jaguaretch.png"],
  },
  alternates: {
    canonical: "https://jaguaretech.com.br",
    languages: {
      'pt': '/pt',
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
    },
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${spaceGrotesk.variable} ${oxanium.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
