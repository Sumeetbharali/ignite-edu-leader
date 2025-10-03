import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Gurugram, India",
      type: "Full-time",
      description: "Lead development of scalable educational technology solutions using modern web technologies.",
    },
    {
      title: "Product Manager - EdTech",
      department: "Product",
      location: "Gurugram, India",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our innovative learning platform.",
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for educational platforms.",
    },
    {
      title: "Content Strategist",
      department: "Content",
      location: "Gurugram, India",
      type: "Full-time",
      description: "Develop and manage educational content strategy across our platform.",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Gurugram, India",
      type: "Full-time",
      description: "Build and maintain robust infrastructure for our growing platform.",
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Multiple Locations",
      type: "Full-time",
      description: "Expand our reach and build partnerships with educational institutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 gradient-hero">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground mb-6 transition-smooth">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Be part of a team that's transforming education through technology. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-soft border-border">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-12 h-12 rounded-xl gradient-accent mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Impactful Work</h3>
                  <p className="text-muted-foreground">Make a real difference in education and touch millions of lives.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-border">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-12 h-12 rounded-xl gradient-accent mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Growth Opportunities</h3>
                  <p className="text-muted-foreground">Continuous learning and career development programs.</p>
                </CardContent>
              </Card>
              <Card className="shadow-soft border-border">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="w-12 h-12 rounded-xl gradient-accent mx-auto mb-4 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Great Culture</h3>
                  <p className="text-muted-foreground">Collaborative environment with work-life balance.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Open Positions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">{position.title}</h3>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="h-3 w-3" />
                            {position.department}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {position.location}
                          </Badge>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="accent">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
