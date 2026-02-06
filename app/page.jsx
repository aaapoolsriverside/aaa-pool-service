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

