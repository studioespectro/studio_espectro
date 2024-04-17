import localFont from "next/font/local";

export const FilsonPro = localFont({
  src: [
    {
      path: "../../../public/fonts/FilsonProThinItalic.otf",
      weight: "100",
      style: "italic",
    },
  ],
  variable: "--filson-pro",
});

export const NewOrder = localFont({
  src: "../../../public/fonts/New_Order_Light.otf",
  variable: "--new-order",
});

export const LeagueSpartan = localFont({
  src: [
    {
      path: "../../../public/fonts/league-spartan.bold.otf",
      weight: "bold",
    },
  ],
  variable: "--league-spartan",
});

export const HeadLineA = localFont({
  src: "../../../public/fonts/HeadLineA.ttf",
  variable: "--headlinea",
});

export const YellowTail = localFont({
  src: "../../../public/fonts/Yellowtail-Regular.ttf",
  variable: "--yellow-tail",
});
