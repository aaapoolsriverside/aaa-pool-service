export const metadata = {
  title: "AAA Pool Service",
  description: "Pool service in Jurupa Valley and surrounding areas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
