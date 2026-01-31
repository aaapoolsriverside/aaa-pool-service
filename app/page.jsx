export default function Page() {
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
          Email: <a href="mailto:aaapools85@icloud.com" style={{ color: "white" }}>aaapools85@icloud.com</a>
        </p>
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

      <section style={{ background: "white", padding: "50px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, marginBottom: 12 }}>Local. Reliable. Professional.</h2>
        <p style={{ maxWidth: 760, margin: "0 auto", color: "#475569", fontSize: 16 }}>
          AAA Pool Service &amp; Repair proudly serves Riverside and surrounding areas.
          Honest pricing, fast response times, and quality workmanship you can trust.
        </p>
      </section>

      <footer style={{ background: "#020617", color: "#94a3b8", textAlign: "center", padding: 18 }}>
        © {new Date().getFullYear()} AAA Pool Service &amp; Repair · Riverside, CA · aaapools85@icloud.com
      </footer>
    </main>
  );
}

const cardStyle = {
  background: "white",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 6px 18px rgba(2,6,23,.08)",
};


<section style={{ padding: "40px", background: "#f5f7fa" }}>
  <h2>Request Service</h2>

  <form action="https://formspree.io/f/mzdrlgbg" method="POST">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      required
      style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      style={{ display: "block", width: "100%", marginBottom: "10px", padding: "10px" }}
    />

    <textarea
      name="message"
      placeholder="How can we help you?"
      required
      rows="4"
      style={{ display: "block", width: "100%", marginBottom: "15px", padding: "10px" }}
    />

    <button
      type="submit"
      style={{
        background: "#2563eb",
        color: "white",
        padding: "12px 20px",
        borderRadius: "6px",
        border: "none",
        fontSize: "16px",
        cursor: "pointer"
      }}
    >
      Send Request
    </button>
  </form>
</section>
<a href="/service-areas" style={{ display: "inline-block", marginTop: "12px", fontWeight: "700" }}>
  Service Areas
</a>
