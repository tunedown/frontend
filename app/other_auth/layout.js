import "@/app/globals.css";

if (typeof window === "undefined") {
  console.log("Oops, `window` is not defined");
}
export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
