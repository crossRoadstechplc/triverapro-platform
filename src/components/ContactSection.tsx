import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          source:"TriveraPro",
          to_email: import.meta.env.VITE_RECIPIENT_EMAIL
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({ 
        title: "Message sent successfully!", 
        description: "We'll get back to you soon." 
      });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({ 
        title: "Failed to send message", 
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-foreground mb-1.5 capitalize">{field}</label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={form[field as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition"
                  placeholder={field === "email" ? "you@organization.com" : "Your name"}
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
              disabled={isSubmitting}
              className="w-full px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
