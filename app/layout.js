import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "tunedown | Harmonize your Heartbeat",
  description: "Harmonize your Heartbeat",
};

if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
