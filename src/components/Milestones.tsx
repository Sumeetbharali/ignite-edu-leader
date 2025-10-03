import { Award, TrendingUp, Globe, Users2 } from "lucide-react";

const Milestones = () => {
  const stats = [
    {
      icon: Users2,
      number: "2M+",
      label: "Active Users",
      color: "text-accent",
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      number: "500+",
      label: "Institutions",
      color: "text-accent",
    },
    {
      icon: Award,
      number: "25+",
      label: "Industry Awards",
      color: "text-primary",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Five passionate educators and technologists come together with a vision",
    },
    {
      year: "2017",
      title: "Series A Funding",
      description: "Secured $10M in funding from leading venture capital firms",
    },
    {
      year: "2019",
      title: "Platform Launch",
      description: "LearnHub Pro officially launched, serving first 50 institutions",
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Expanded operations to 30 countries across Asia, Europe, and Americas",
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Launched advanced AI-powered personalized learning features",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as top 3 EdTech platform globally with 2M+ users",
    },
  ];

  return (
    <section id="milestones" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Milestones & Achievements
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A decade of innovation, growth, and impact in transforming education through technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-smooth text-center border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-hero mb-4">
                <stat.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-8 group">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold shadow-medium z-10">
                    {item.year.slice(2)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth border border-border">
                    <div className="text-sm text-accent font-semibold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20 bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Recent Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <Award className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Best EdTech Platform 2024</h4>
              <p className="text-sm text-muted-foreground">EdTech Excellence Awards</p>
            </div>
            <div className="p-4">
              <Award className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Innovation Leader 2024</h4>
              <p className="text-sm text-muted-foreground">Global Tech Summit</p>
            </div>
            <div className="p-4">
              <Award className="h-10 w-10 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Top 50 Startups</h4>
              <p className="text-sm text-muted-foreground">Forbes Asia 2023</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
