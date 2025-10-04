import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Users, BarChart, Lock } from "lucide-react";
import platformImage from "@/assets/platform-preview.jpg";

const Platform = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Learning",
      description: "Adaptive content that personalizes to each learner's pace and style",
    },
    {
      icon: Users,
      title: "Collaborative Tools",
      description: "Foster engagement with real-time interaction and group activities",
    },
    {
      icon: BarChart,
      title: "Analytics Dashboard",
      description: "Track progress with comprehensive insights and reporting",
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global standards",
    },
  ];

  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our EdTech Platform
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Introducing CLASSWiX - our flagship learning management system trusted by over 500 institutions worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Experience the Future of Learning
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              CLASSWiX is more than just a platform—it's a complete ecosystem designed to facilitate 
              seamless learning experiences. Built with the latest technology and informed by educational 
              best practices, it empowers educators to create engaging content and enables learners to 
              achieve their full potential.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg" className="group">
              Visit CLASSWiX
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-medium hover:shadow-soft transition-smooth">
              <img
                src={platformImage}
                alt="CLASSWiX Platform Interface"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 gradient-hero opacity-0 hover:opacity-10 transition-smooth" />
            </div>
          </div>
        </div>

        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="font-semibold text-foreground">Used by 500+ institutions</span> • 
            <span className="font-semibold text-foreground ml-2">2M+ active learners</span> • 
            <span className="font-semibold text-foreground ml-2">50+ countries</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platform;
