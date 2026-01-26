app/page.jsx
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, Droplets, Wrench, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function PoolServiceWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            AAA Pool Service & Repair
          </motion.h1>
          <p className="text-lg md:text-xl mb-8">
            Reliable Pool Cleaning, Maintenance & Repairs in Riverside, CA · aaapools85@icloud.com
          </p>
          <Button className="text-lg px-8 py-6 rounded-2xl shadow-lg">
            Call Now (951) 396-9765 396-9765 396-9766 396‑9765
          </Button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <Droplets className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Weekly Pool Service</h3>
            <p>Skimming, vacuuming, brushing & chemical balancing.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <Wrench className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Pool Repairs</h3>
            <p>Pumps, filters, valves, leaks & equipment diagnostics.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 text-center">
            <Calendar className="mx-auto mb-4" size={40} />
            <h3 className="text-xl font-semibold mb-2">Maintenance Plans</h3>
            <p>Custom schedules to keep your pool perfect year‑round.</p>
          </CardContent>
        </Card>
      </section>

      {/* ABOUT */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Local. Reliable. Professional.</h2>
          <p className="text-lg text-slate-600">
            AAA Pool Service & Repair proudly serves Riverside and surrounding areas.
            We focus on honest pricing, fast response times, and quality workmanship
            you can trust.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Pool Service Today?</h2>
          <p className="mb-8">Call or text us for fast, reliable service.</p>
          <Button variant="secondary" className="text-lg px-8 py-6 rounded-2xl">
            <Phone className="mr-2" /> (951) 396-9765 396‑9765
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-center py-6">
        © {new Date().getFullYear()} AAA Pool Service & Repair · Riverside, CA
      </footer>
    </div>
  );
