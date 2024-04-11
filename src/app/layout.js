import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
