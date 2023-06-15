import "./globals.scss";

export const metadata = {
  title: "Alexander Sommer's Portfolio",
  description:
    "Hurr durr - ping pong, bing bong - this is a hurr durr Portfolio description - PagChomp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
