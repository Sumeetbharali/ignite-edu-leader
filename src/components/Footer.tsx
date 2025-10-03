import { Linkedin, Twitter, Facebook, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Leadership", href: "#team" },
      { name: "Careers", href: "#contact" },
    ],
    platform: [
      { name: "LearnHub Pro", href: "#platform" },
      { name: "Features", href: "#platform" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg gradient-accent flex items-center justify-center font-bold text-xl text-accent-foreground">
                BE
              </div>
              <span className="font-semibold text-lg">Bipransh EdTech Pvt Ltd</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Driving innovation in education technology. Empowering educators and learners worldwide since 2015.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-smooth group"
                >
                  <social.icon className="h-4 w-4 text-primary-foreground group-hover:text-accent-foreground transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-primary-foreground/70 text-center md:text-left">
              <p>© {currentYear} Bipransh EdTech Pvt Ltd. All rights reserved.</p>
              <p className="mt-1">CIN: U72900DL2015PTC123456 | Registered in New Delhi, India</p>
            </div>
            <div className="flex gap-6 text-sm">
              <span className="text-primary-foreground/70">ISO 27001 Certified</span>
              <span className="text-primary-foreground/70">GDPR Compliant</span>
              <span className="text-primary-foreground/70">SOC 2 Type II</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
