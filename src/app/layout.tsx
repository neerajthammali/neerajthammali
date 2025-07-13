import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "NEERAJ THAMMALI | Civil Engineer & Tech Innovator",
  description: "Expert in portfolio and resume building, bridging civil engineering with cutting-edge tech solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnnouncementBar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
