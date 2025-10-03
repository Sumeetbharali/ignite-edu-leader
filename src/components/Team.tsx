import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import ceóImage from "@/assets/team-ceo.jpg";
import ctoImage from "@/assets/team-cto.jpg";
import cooImage from "@/assets/team-coo.jpg";

const Team = () => {
  const leaders = [
    {
      name: "Rajesh Kumar",
      role: "Chief Executive Officer & Co-Founder",
      image: ceóImage,
      bio: "With over 20 years in educational technology, Rajesh leads our vision to democratize learning globally. Previously led product at a Fortune 500 EdTech company.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer & Co-Founder",
      image: ctoImage,
      bio: "PhD in Computer Science from MIT. Former senior engineer at Google. Priya architects our platform's innovative AI-driven learning systems.",
    },
    {
      name: "Vikram Patel",
      role: "Chief Operating Officer",
      image: cooImage,
      bio: "15+ years scaling EdTech operations across Asia-Pacific. Former COO at a leading online education platform serving millions of students.",
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Leadership Team
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionaries driving innovation in education technology and leading our mission to transform learning worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-20 transition-smooth" />
              </div>
              <CardContent className="pt-6 pb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{leader.name}</h3>
                <p className="text-accent font-medium mb-4">{leader.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{leader.bio}</p>
                <div className="flex gap-3">
                  <button className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth group/btn">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover/btn:text-accent-foreground transition-smooth" />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary hover:bg-accent transition-smooth group/btn">
                    <Mail className="h-4 w-4 text-muted-foreground group-hover/btn:text-accent-foreground transition-smooth" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
