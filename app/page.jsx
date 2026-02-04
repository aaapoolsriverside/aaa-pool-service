<img
  src="/logo.png"
  alt="AAA Pool Service & Repair"<section style={{ padding: "60px 20px", background: "#ffffff" }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <h2 style={{ fontSize: 32, margin: 0, fontWeight: 800, textAlign: "center" }}>
      Customer Reviews
    </h2>
    <p style={{ marginTop: 10, marginBottom: 28, color: "#475569", textAlign: "center" }}>
      Real feedback from homeowners we’ve helped in Riverside & surrounding areas.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: 16,
      }}
    >
      {[
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
      ].map((r, i) => (
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

  style={{
    width: "180px",
    margin: "0 auto 20px",
    display: "block"
  }}
/>
export default function Page() {
  const cardStyle = {
    background: "white",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 6px 18px rgba(2,6,23,.08)",
  };

  const cardTitle = { margin: 0, fontSize: 18, fontWeight: 800 };
  const cardText = { marginTop: 10, marginBottom: 0, color: "#475569" };

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      <section
        style={{
          background: "linear-gradient(90deg,#0284c7,#1d4ed8)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
       <div style={{ textAlign: "center", marginBottom: 32 }}>
  <img
    src="/logo.png"
    alt="AAA Pool Service & Repair Logo"
    style={{
      width: "200px",
      maxWidth: "80%",
    }}
  />
</div>

        <h1 style={{ fontSize: 44, margin: 0, fontWeight: 800 }}>
          AAA Pool Service &amp; Repair
        </h1>

        <p style={{ fontSize: 18, marginTop: 14 }}>
          Reliable Pool Cleaning, Maintenance &amp; Repairs in Riverside, CA
        </p>

        <a
          href="tel:9513969765"
          style={{
            display: "inline-block",
            marginTop: 22,
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

        <p style={{ marginTop: 12, opacity: 0.9 }}>
          Email:{" "}
          <a href="mailto:aaapools85@icloud.com" style={{ color: "white" }}>
            aaapools85@icloud.com
          </a>
        </p>

        <a
          href="/service-areas"
          style={{
            display: "inline-block",
            marginTop: 14,
            padding: "10px 18px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.65)",
            color: "white",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          View Service Areas
        </a>
      </section>

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
            <p style={cardText}>
              Skimming, vacuuming, brushing &amp; chemical balancing.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Pool Repairs</h3>
            <p style={cardText}>
              Pumps, filters, valves, leaks &amp; equipment diagnostics.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitle}>Maintenance Plans</h3>
            <p style={cardText}>
              Custom schedules to keep your pool perfect year-round.
            </p>
          </div>
        </div>
      </section>

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
            rows="4"
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
