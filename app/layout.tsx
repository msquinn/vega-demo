import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sankey Diagram",
  description: "Created by Matt Quinn. A Sankey Diagram to visualize the flow of data.",
  creator: "Matt Quinn",
  keywords: ["Sankey", "Diagram", "Vega", "Vega Lite", "Next.js", "React"],
  metadataBase: new URL("https://vega-demo.netlify.app"),
  openGraph:{
    images: '/opengraph-image.png',
  },
  twitter: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" title="Sankey Diagram">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
