import "./globals.css";

export const metadata = {
  title: "Grace Johnson Portfolio",
  description: "My portfolio site built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">{children}</body>
    </html>
  );
}
