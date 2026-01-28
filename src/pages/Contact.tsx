import { Layout } from "@/components/Layout";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  Facebook,
  Instagram,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const socialLinks = [
  { icon: Facebook, name: "Facebook", handle: "@ritfoundationgh", link: "https://facebook.com/ritfoundationgh" },
  { icon: Instagram, name: "Instagram", handle: "@ritskillsgh", link: "https://instagram.com/ritskillsgh" },
];

const faqs = [
  {
    question: "What programs does RIT Foundation Ghana offer?",
    answer: "We offer the Teens in Tech Initiative (fashion design, ICT, life skills), Digital Skills Development, Entrepreneurship Training, Zero-Waste Training, and Short-Term Workshops in beadwork, resin earring design, craftworks, and makeup artistry.",
  },
  {
    question: "Who can participate in your programs?",
    answer: "Our programs primarily target girls and youth aged 9–15 in rural communities, particularly in the Volta Region of Ghana. However, some programs like short-term workshops are open to the general public.",
  },
  {
    question: "How can I partner with RIT Foundation Ghana?",
    answer: "We welcome partnerships from corporate organizations, foundations, government agencies, and NGOs. You can support us through program funding, technical expertise, equipment donations, or joint implementation. Please reach out via email or phone to discuss partnership opportunities.",
  },
  {
    question: "Is RIT Foundation Ghana a registered organization?",
    answer: "Yes, RIT Foundation Ghana is a registered non-governmental organization under the Companies Act, 2019 (Act 992) with registration number CG173310421.",
  },
  {
    question: "Where are your programs implemented?",
    answer: "Our programs are currently implemented in Kpotame and Sogakope in the Volta Region of Ghana. We plan to expand to additional rural communities in the future.",
  },
  {
    question: "How can I support RIT Foundation Ghana?",
    answer: "You can support us through partnerships, donations, volunteering your expertise, or spreading awareness about our work. Contact us to learn more about how you can contribute to empowering girls and youth in Ghana.",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="max-w-3xl">
            <span className="section-label mb-4 block text-primary">Get in Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              We welcome inquiries, partnership discussions, and questions about our work. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization */}
            <div className="p-8 bg-muted border-l-4 border-primary">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Organization</h3>
              <p className="text-foreground font-medium">RIT Foundation Ghana LBG</p>
              <p className="text-sm text-muted-foreground mt-2">Registered NGO</p>
              <p className="text-sm text-muted-foreground">Reg. No: CG173310421</p>
            </div>

            {/* Email */}
            <div className="p-8 bg-muted border-l-4 border-primary">
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:ritfoundationofficial@gmail.com"
                className="text-foreground font-medium hover:text-primary transition-colors break-all"
              >
                ritfoundationofficial@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-2">We respond within 48 hours</p>
            </div>

            {/* Phone */}
            <div className="p-8 bg-muted border-l-4 border-primary">
              <Phone className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-foreground font-medium">+233 55 494 2195</p>
              <p className="text-foreground font-medium">+233 24 251 5127</p>
              <p className="text-sm text-muted-foreground mt-2">Mon - Fri, 9am - 5pm GMT</p>
            </div>

            {/* Address */}
            <div className="p-8 bg-muted border-l-4 border-primary">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Address</h3>
              <p className="text-foreground font-medium">P.O. Box SG 90</p>
              <p className="text-foreground font-medium">Sogasco Street, Sogakope</p>
              <p className="text-sm text-muted-foreground mt-2">Volta Region, Ghana</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label mb-4 block">Connect With Us</span>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Follow Us on Social Media</h2>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-background border border-border hover:border-primary transition-colors group"
                >
                  <social.icon className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">{social.name}</p>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Help Center</span>
              <h2 className="font-display text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mt-4">
                Find answers to common questions about our programs and organization.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border bg-muted px-6"
                >
                  <AccordionTrigger className="text-left font-display text-lg font-medium text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-4 block">Location</span>
            <h2 className="font-display text-3xl font-bold text-foreground">Find Us</h2>
            <p className="text-muted-foreground mt-2">Sogakope, Volta Region, Ghana</p>
          </div>
          <div className="max-w-4xl mx-auto aspect-video border border-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31775.89834927839!2d0.5937!3d6.0062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020a9e2c8b7b7b9%3A0x8c7b8c7b8c7b8c7b!2sSogakope%2C%20Ghana!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RIT Foundation Ghana location"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
