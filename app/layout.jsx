
<section
  style={{
    padding: "48px 20px",
    background: "#ffffff",
  }}
>
  <div style={{ maxWidth: 1050, margin: "0 auto" }}>
    <div
      style={{
@@ -29,10 +34,6 @@
        FREE Pool Inspection + 2nd Month FREE
     </h2>

      <p style={{ margin: "4px 0 10px", fontWeight: 700, color: "#0284c7" }}>
        Limited-time offer — routes fill quickly
      </p>

      <p style={{ margin: 0, fontSize: 16, color: "#475569" }}>
        Sign up for weekly pool service, pay your first month at the regular rate,
        and your <strong>second month is on us</strong>.
@@ -49,4 +50,62 @@
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
