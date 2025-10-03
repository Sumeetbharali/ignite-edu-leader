import { Building2, Users, Handshake, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Corporate = () => {
  const corporateInfo = [
    {
      icon: Building2,
      title: "Company Registration",
      details: [
        "Registered as Private Limited Company",
        "CIN: U72900DL2015PTC123456",
        "Incorporated: January 2015",
        "Registered Office: New Delhi, India",
      ],
    },
    {
      icon: Users,
      title: "Investors & Partners",
      details: [
        "Series A: Sequoia Capital India",
        "Series B: Accel Partners",
        "Strategic Partners: Microsoft, AWS",
        "Banking Partner: HDFC Bank",
      ],
    },
    {
      icon: Handshake,
      title: "Governance",
      details: [
        "Independent Board of Directors",
        "Regular Financial Audits",
        "ISO 27001 Certified",
        "GDPR & SOC 2 Compliant",
      ],
    },
    {
      icon: HeartHandshake,
      title: "CSR Initiatives",
      details: [
        "Free education for 10,000+ underprivileged students",
        "Teacher training programs in rural areas",
        "Digital literacy campaigns",
        "Environmental sustainability projects",
      ],
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Corporate Information
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparency and accountability are at the core of our operations. Learn more about our corporate structure and commitments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {corporateInfo.map((info, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                      <info.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                    <ul className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Our Commitment to Social Responsibility</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center mb-8">
            At EduTech Innovations, we believe that with great success comes great responsibility. We are committed 
            to using our platform and resources to create positive social impact. Our CSR initiatives focus on 
            making quality education accessible to underserved communities and promoting environmental sustainability.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <p className="text-sm text-muted-foreground">Students Impacted</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm text-muted-foreground">Teachers Trained</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Rural Schools Connected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corporate;
