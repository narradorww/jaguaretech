import { Oxanium, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: "Jaguaretech | Mobile e IA para produtos vivos",
  description:
    "Estudio de desenvolvimento focado em mobile e inteligencia artificial. Criamos apps e sistemas inteligentes sob medida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${oxanium.variable}`}>
        {children}
      </body>
    </html>
  );
}
