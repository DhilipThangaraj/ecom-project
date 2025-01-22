import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/global.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "@/react-query/query-client-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Life Store`,
    default: `${APP_NAME}`,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
};

//Main Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ReactQueryProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
