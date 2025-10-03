import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To revolutionize education by creating innovative technology solutions that make learning accessible, engaging, and effective for all.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in education technology, transforming how knowledge is shared and acquired in the digital age.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Innovation, integrity, inclusivity, and impact drive everything we do. We believe in technology that serves humanity.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About EduTech Innovations
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2015, EduTech Innovations Pvt Ltd has been at the forefront of the education technology revolution. 
            We are a team of passionate educators, technologists, and innovators committed to transforming learning experiences worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-hero mb-6">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-medium p-8 md:p-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              EduTech Innovations was born from a simple belief: that technology could democratize education and 
              create opportunities for learners everywhere. What started as a small team of five visionaries has 
              grown into a thriving organization serving millions of users globally.
            </p>
            <p>
              Today, we partner with educational institutions, corporations, and governments to deliver world-class 
              learning solutions. Our platform combines cutting-edge artificial intelligence, intuitive design, and 
              proven pedagogical principles to create transformative educational experiences.
            </p>
            <p>
              As a Private Limited company, we balance innovation with responsibility, ensuring that every decision 
              we make serves our mission to make quality education accessible to all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
