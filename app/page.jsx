export default function HomePage() {
  const services = [
    "Weekly Pool Service",
    "Green to Clean",
    "Filter Cleans",
    "Pool Equipment Repair",
    "Variable Speed Pump Installs",
    "Heater & Electrical Repairs",
  ];

  const areas = [
    "Jurupa Valley",
    "Riverside",
    "Rialto",
    "Bloomington",
    "Moreno Valley",
    "Norco",
  ];

  const reasons = [
    "Serving the pool industry since 2004",
    "Reliable weekly service and repairs",
    "Fast response for equipment problems",
    "Clear pricing and professional communication",
  ];

  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#0f172a", background: "#f8fafc" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #0ea5e9 100%)",
          color: "#ffffff",
          padding: "72px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "8px 12px",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: 0.5,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              AAA Pool Service & Repair
            </div>

            <h1
              style={{
                fontSize: "clamp(36px, 6vw, 58px)",
                lineHeight: 1.05,
                margin: "0 0 16px",
                fontWeight: 900,
              }}
            >
              Pool Service & Repair in Jurupa Valley and Riverside
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.7,
                margin: "0 0 24px",
                color: "rgba(255,255,255,0.92)",
                maxWidth: 650,
              }}
            >
              Professional pool cleaning, maintenance, equipment repair, green-to-clean
              treatments, and start-ups. Reliable local service built to keep your pool
              clean, safe, and running right.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
              <a
                href="tel:+19513969765"
                style={{
                  background: "#ffffff",
                  color: "#0f172a",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: 14,
                  fontWeight: 900,
                  boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
                }}
              >
                Call Now
              </a>

              <a
                href="sms:+19513969765"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: 14,
                  fontWeight: 900,
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                Text for a Quote
              </a>

              <a
                href="#contact"
                style={{
                  background: "#22c55e",
                  color: "#052e16",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: 14,
                  fontWeight: 900,
                }}
              >
                Free Inspection
              </a>
            </div>

            <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.82)" }}>
              Weekly service plans available • Repairs • Equipment installs • Limited route availability
            </p>
          </div>

          <div>
            <div
              style={{
                background: "#ffffff",
                color: "#0f172a",
                borderRadius: 22,
                padding: 24,
                boxShadow: "0 20px 50px rgba(2, 6, 23, 0.28)",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#e0f2fe",
                  color: "#075985",
                  fontWeight: 800,
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                New Customer Special
              </div>

              <h2 style={{ margin: "0 0 8px", fontSize: 30, fontWeight: 900 }}>
                Free Pool Inspection + 2nd Month Free
              </h2>

              <p style={{ margin: "0 0 16px", color: "#475569", lineHeight: 1.6 }}>
                Sign up for weekly pool service, pay your first month at the regular rate,
                and your second month is on us.
              </p>

              <div
                style={{
                  display: "grid",
                  gap: 10,
                }}
              >
                {[
                  "Weekly professional pool maintenance",
                  "Dependable local service",
                  "Experienced repair and equipment support",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: 14,
                      fontWeight: 700,
                    }}
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 14, fontSize: 12, color: "#64748b", lineHeight: 1.5 }}>
                Valid for new residential customers only. Weekly service required. First month
                due at sign-up. One promotion per household. Limited availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, margin: "0 0 10px", fontWeight: 900, textAlign: "center" }}>
            Pool Services We Offer
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#475569",
              margin: "0 auto 28px",
              maxWidth: 780,
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            From weekly maintenance to equipment installs and green-to-clean treatments,
            we help homeowners keep their pools clean, clear, and ready to use.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  padding: 22,
                  boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
                  fontWeight: 800,
                  fontSize: 18,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 20px", background: "#eff6ff" }}>
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 900 }}>Why Homeowners Choose Us</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {reasons.map((reason) => (
                <div
                  key={reason}
                  style={{
                    border: "1px solid #dbeafe",
                    background: "#f8fafc",
                    borderRadius: 14,
                    padding: 14,
                    fontWeight: 700,
                  }}
                >
                  ✓ {reason}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: 24,
              boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: 28, fontWeight: 900 }}>Service Areas</h3>
            <p style={{ color: "#475569", lineHeight: 1.7 }}>
              We proudly serve homeowners in the Inland Empire and surrounding areas.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0,1fr))", gap: 12 }}>
              {areas.map((area) => (
                <div
                  key={area}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: 14,
                    fontWeight: 800,
                  }}
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <h2 style={{ fontSize: 34, margin: "0 0 24px", fontWeight: 900, textAlign: "center" }}>
            Customer Reviews
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                name: "Riverside Homeowner",
                text: "Very professional, showed up on time, explained everything clearly, and got our pool looking great again.",
              },
              {
                name: "Jurupa Valley Customer",
                text: "Fast response and honest service. Helped with equipment issues and now handles our weekly maintenance.",
              },
              {
                name: "Local Pool Owner",
                text: "Reliable and knowledgeable. Easy to communicate with and takes pride in the work.",
              },
            ].map((review) => (
              <div
                key={review.name}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 18,
                  padding: 22,
                  boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
                }}
              >
                <div style={{ fontSize: 18, marginBottom: 10 }}>★★★★★</div>
                <p style={{ margin: "0 0 14px", lineHeight: 1.7, color: "#334155" }}>{review.text}</p>
                <div style={{ fontWeight: 900 }}>{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        style={{
          padding: "64px 20px",
          background: "linear-gradient(135deg, #082f49 0%, #0f172a 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          <div>
            <h2 style={{ fontSize: 36, margin: "0 0 14px", fontWeight: 900 }}>
              Ready for Better Pool Service?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.88)" }}>
              Call or text now for weekly service, repair work, equipment installs, or a free inspection.
            </p>
            <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
              <a
                href="tel:+19513969765"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  background: "#ffffff",
                  color: "#0f172a",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontWeight: 900,
                  width: "fit-content",
                }}
              >
                Call 951-396-9765
              </a>
              <a
                href="sms:+19513969765"
                style={{
                  display: "inline-block",
                  textDecoration: "none",
                  background: "#22c55e",
                  color: "#052e16",
                  borderRadius: 14,
                  padding: "14px 18px",
                  fontWeight: 900,
                  width: "fit-content",
                }}
              >
                Text for a Fast Quote
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 20,
              padding: 24,
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: 26, fontWeight: 900 }}>What to Send Us</h3>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Your name",
                "Service address",
                "What you need help with",
                "A few pool or equipment photos",
                "Best phone number to reach you",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 14,
                    padding: 14,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
