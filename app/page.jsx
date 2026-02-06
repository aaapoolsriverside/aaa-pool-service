export default function Page() {
  const cardStyle = {
    background: "white",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 6px 18px rgba(2,6,23,.08)",
  };

  const cardTitle = { margin: 0, fontSize: 18, fontWeight: 800 };
  const cardText = { marginTop: 10, marginBottom: 0, color: "#475569" };

  const reviews = [
    {
      name: "Maria G.",
      stars: "★★★★★",
      text:
        "Always on time and super professional. Our pool has never looked better. Great communication and fair pricing.",
    },
    {
      name: "Jose R.",
      stars: "★★★★★",
      text:
        "Fixed a leak fast and explained everything clearly. Honest work and clean results. Highly recommend.",
    },
    {
      name: "Stephanie L.",
      stars: "★★★★★",
      text:
        "Reliable weekly service and the water stays crystal clear. If something looks off, they catch it early.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(90deg,#0284c7,#1d4ed8)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <img
            src="/logo.png"
            alt="AAA Pool Service & Repair Logo"
            style={{
              width: 200,
              maxWidth: "80%",
              display: "block",
              margin: "0 auto",
              height: "auto",
            }}
          />
        </div>

        <h1 style={{ fontSize: 44, margin: 0, fontWeight: 800 }}>
          AAA Pool Service &amp; Repair
        </h1>

        <p style={{ fontSize: 18, marginTop: 14 }}>
          Reliable Pool Cleaning, Maintenance &amp; Repairs in Riverside, CA
        </p>

        <div style={{ marginTop: 22, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="tel:9513969765"
            style={{
              display: "inline-block",
              background: "white",
              color: "#0f172a",
              padding: "14px 22px",
              borderRadius: 16,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Call Now (951) 396-9765
          </a>

          <a
            href="/service-areas"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.7)",
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              background: "transparent",
            }}
          >
            View Service Areas
          </a>
        </div>

        <p style={{ marginTop: 14, opacity: 0.9 }}>
          Email:{" "}
          <a href="mailto:aaapools85@icloud.com" style={{ color: "white" }}>
            aaapools85@icloud.com
          </a>
        </p>
      </section>
{/* PROMO SECTION (Mid-page) */}
<section
  style={{
    padding: "48px 20px",
    background: "#ffffff",
  }}
>
  <div style={{ maxWidth: 1050, margin: "0 auto" }}>
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: 18,
        padding: 24,
        boxShadow: "0 10px 22px rgba(2, 132, 199, 0.08)",
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
          letterSpacing: 0.4,
          textTransform: "uppercase",
        }}
      >
        New Customer Special
      </div>

      <h2 style={{ margin: "12px 0 6px", fontSize: 30, fontWeight: 900 }}>
        FREE Pool Inspection + 2nd Month FREE
      </h2>

      <p style={{ margin: 0, fontSize: 16, color: "#475569" }}>
        Sign up for weekly pool service, pay your first month at the regular rate,
        and your <strong>second month is on us</strong>.
      </p>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 12,
        }}
      >
        {[
          "Weekly professional pool maintenance",
          "Service you can count on",
          "Serving the pool industry since 2004",
        ].map((item) => (
          <div
            key={item}
            style={{
              border: "1px solid #e2e8f0",
              borderRadius: 14,
              padding: 14,
              background: "#f8fafc",
              fontWeight: 700,
            }}
          >
            ✅ {item}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "#0284c7",
            color: "white",
            padding: "12px 16px",
            borderRadius: 14,
            fontWeight: 900,
            textDecoration: "none",
          }}
        >
          Get My Free Inspection
        </a>

        <a
          href="tel:+1XXXXXXXXXX"
          style={{
            display: "inline-block",
            border: "1px solid #cbd5e1",
            color: "#0f172a",
            padding: "12px 16px",
            borderRadius: 14,
            fontWeight: 900,
            textDecoration: "none",
            background: "#ffffff",
          }}
        >
          Call Now
        </a>
      </div>

      <p style={{ marginTop: 12, fontSize: 12, color: "#64748b" }}>
        *Valid for new residential customers only. First month must be paid in full.
        Second month of service provided at no charge. Weekly service required.
        One promotion per household. Limited availability.
      </p>
    </div>
  </div>
</section>
      {/* REVIEWS */}
      <section style={{ padding: "60px 20px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, margin: 0, fontWeight: 800, textAlign: "center" }}>
            Customer Reviews
          </h2>
          <p style={{ marginTop: 10, marginBottom: 28, color: "#475569", textAlign: "center" }}>
            Real feedback from homeowners we’ve helped in Riverside &amp; surrounding areas.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: 18,
                  boxShadow: "0 6px 18px rgba(15,23,42,0.06)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ margin: 0, fontWeight: 800 }}>{r.name}</p>
                  <p style={{ margin: 0, fontWeight: 800 }}>{r.stars}</p>
                </div>
                <p style={{ marginTop: 10, marginBottom: 0, color: "#334155", lineHeight: 1.5 }}>
                  “{r.text}”
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 28 }}>
            <a
              href="tel:9513969765"
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: 999,
                background: "#1d4ed8",
                color: "white",
                textDecoration: "none",
                fontWeight: 800,
              }}
            >
              Get a Quote (Call/Text)
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "50px 20px" }}>
        <h2 style={{ fontSize: 28, marginBottom: 18 }}>Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}
        >
          <div style={cardStyle}>
            <h3 style={cardTitle}>Weekly Pool Service</h3>
            <p style={cardText}>Skimming, vacuuming, brushing &amp; chemical balancing.</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Pool Repairs</h3>
            <p style={cardText}>Pumps, filters, valves, leaks &amp; equipment diagnostics.</p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Maintenance Plans</h3>
            <p style={cardText}>Custom schedules to keep your pool perfect year-round.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ background: "white", padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Request Service</h2>

        <form
          action="https://formspree.io/f/mzdrlgbg"
          method="POST"
          style={{ maxWidth: 520, margin: "0 auto" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            style={{ display: "block", width: "100%", marginBottom: 10, padding: 10 }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            style={{ display: "block", width: "100%", marginBottom: 10, padding: 10 }}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            style={{ display: "block", width: "100%", marginBottom: 10, padding: 10 }}
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            required
            rows={4}
            style={{ display: "block", width: "100%", marginBottom: 15, padding: 10 }}
          />

          <button
            type="submit"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 20px",
              borderRadius: 6,
              border: "none",
              fontSize: 16,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#020617",
          color: "#94a3b8",
          textAlign: "center",
          padding: 18,
        }}
      >
        © {new Date().getFullYear()} AAA Pool Service &amp; Repair · Riverside, CA · aaapools85@icloud.com
      </footer>
    </main>
  );
}

