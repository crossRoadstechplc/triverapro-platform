import ScrollReveal from "./ScrollReveal";

const AboutSPX = () => (
  <section id="about" className="section-padding bg-muted">
    <div className="section-container max-w-4xl">
      <ScrollReveal>
        <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">Organization</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About SPX</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>SPX is an origin-based infrastructure and systems design firm operating at the intersection of agriculture, renewable energy, and regenerative value chains.</p>
        </div>
        <a
          href="https://www.spxafrica.com/"
          target="_blank"
          className="inline-flex mt-8 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
        >
          Visit SPX Website
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSPX;
