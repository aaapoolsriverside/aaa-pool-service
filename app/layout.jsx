export const metadata = {
  title: "AAA Pool Service & Repair | Jurupa Valley & Riverside CA",
  description:
    "Professional pool cleaning, maintenance, and repair services in Jurupa Valley, Riverside, and surrounding areas. Weekly service, pool repairs, and free estimates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <bodyexport const metadata = {
  title: "AAA Pool Service & Repair | Jurupa Valley & Riverside CA",
  description:
    "Professional pool cleaning, maintenance, and repair services in Jurupa Valley, Riverside, and surrounding areas. Weekly service, pool repairs, and free estimates.",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AAA Pool Service & Repair",
    url: "https://jurupapoolrepair.com",
    telephone: "+19513969765",
    email: "aaapools85@icloud.com",
    areaServed: ["Jurupa Valley, CA", "Riverside, CA", "Eastvale, CA", "Ontario, CA"],
    image: "https://jurupapoolrepair.com/logo.png",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
>{children}</body>
    </html>
  );
}
