import "./globals.css";
import {
  FilsonPro,
  NewOrder,
  LeagueSpartan,
  HeadLineA,
  YellowTail,
} from "./helpers/fonts";
import { ContextProvider } from "./hooks/Context";

export const metadata = {
  title: "Studio Espectro",
  description:
    "Studio Espectro - small trainig group | O teu studio de treino favorito!",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${FilsonPro.variable} ${LeagueSpartan.variable} ${HeadLineA.variable} ${YellowTail.variable} ${NewOrder.variable}`}
      >
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
