import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", organization: "", email: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Inquiry submitted", description: "We will be in touch shortly." });
    setForm({ name: "", organization: "", email: "", country: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container max-w-2xl">
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Contact</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {(["name", "organization", "email", "country"] as const).map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-foreground mb-1.5 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required={field !== "organization"}
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                  placeholder={field === "email" ? "you@organization.com" : ""}
                />
              </div>
            ))}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
