import "@/app/globals.css";

export const metadata = {
  title: "tunedown | Harmonize your Heartbeat",
  description: "Harmonize your Heartbeat",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
