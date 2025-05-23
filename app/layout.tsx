import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/components/modal-provider";
import { UserDetailsProvider } from "@/providers/modal-provider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "RW Guru Fintech",
  description: "Developed by AZSH Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
return (
<ClerkProvider>
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <Toaster/>
        {children}
        <ModalProvider />
        <UserDetailsProvider />
      </body>
    </html>
</ClerkProvider>
  );
}
