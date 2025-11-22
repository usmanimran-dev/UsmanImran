import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule a Call",
      description: "Book a free 30-minute consultation",
      action: "Book Now",
      href: "https://cal.com/muhammad-osman-rbpokc/30min",
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Me",
      description: "Get in touch directly",
      action: "Send Email",
      href: "mailto:osmanmuhammad465@gmail.com",
      primary: false
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Quick Chat",
      description: "Let's discuss your project",
      action: "Start Chat",
      href: "https://wa.me/923259283582",
      primary: false
    }
  ];

  const availability = [
    { day: "Mon - Fri", hours: "9:00 AM - 6:00 PM EST", available: true },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST", available: true },
    { day: "Sunday", hours: "Emergency Only", available: false }
  ];

  const quickStats = [
    { label: "Response Time", value: "< 2 hours", emoji: "⚡" },
    { label: "Project Success", value: "100%", emoji: "🎯" },
    { label: "Client Satisfaction", value: "5.0/5.0", emoji: "⭐" },
    { label: "On-Time Delivery", value: "100%", emoji: "⏰" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            📅 <span className="text-gradient-hero">Let's Build Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into powerful digital solutions?
            Let's discuss your project and explore how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-8">🚀 Get In Touch</h3>

            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.title}
                  className={`p-6 transition-all duration-300 hover:shadow-card hover:scale-[1.02] cursor-pointer ${method.primary
                      ? "bg-gradient-primary text-primary-foreground border-primary"
                      : "project-card"
                    }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-lg ${method.primary
                        ? "bg-white/20"
                        : "bg-primary/10 text-primary"
                      }`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{method.title}</h4>
                      <p className={`mb-4 ${method.primary
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                        }`}>
                        {method.description}
                      </p>
                      <a href={method.href} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={method.primary ? "secondary" : "default"}
                          className={method.primary ? "" : "hero-button"}
                        >
                          {method.action}
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-6">⚡ Quick Stats</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="experience-card p-4 text-center"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl mb-2">{stat.emoji}</div>
                    <div className="text-lg font-bold text-gradient-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Availability */}
            <Card className="p-6 experience-card">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Availability
              </h4>
              <div className="space-y-4">
                {availability.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{schedule.day}</div>
                      <div className="text-sm text-muted-foreground">{schedule.hours}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${schedule.available ? "bg-accent" : "bg-muted"
                      }`}></div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6 experience-card">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location
              </h4>
              <div className="space-y-2">
                <div className="font-medium">📍 Karachi, Pakistan</div>
                <div className="text-sm text-muted-foreground">
                  Available for remote work worldwide
                </div>
                <div className="text-sm text-muted-foreground">
                  PKT Timezone (UTC+5)
                </div>
              </div>
            </Card>

            {/* Education */}
            <Card className="p-6 experience-card">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🎓 Education
              </h4>
              <div className="space-y-2">
                <div className="font-medium">National College</div>
                <div className="text-sm text-muted-foreground">
                  Bachelor of Science in Computer Science
                </div>
                <div className="text-sm mt-3">
                  <div className="font-medium text-foreground mb-1">Relevant Coursework:</div>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Software Development</li>
                    <li>Database Systems</li>
                    <li>Web Technologies</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            ❓ <span className="text-gradient-primary">Frequently Asked</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="experience-card p-6">
              <h4 className="font-semibold mb-3">What's your typical project timeline?</h4>
              <p className="text-muted-foreground text-sm">
                Most projects range from 2-8 weeks depending on complexity. I provide detailed
                timelines during our initial consultation.
              </p>
            </div>
            <div className="experience-card p-6">
              <h4 className="font-semibold mb-3">Do you work with teams or solo?</h4>
              <p className="text-muted-foreground text-sm">
                Both! I can integrate seamlessly with your existing team or handle projects
                independently from start to finish.
              </p>
            </div>
            <div className="experience-card p-6">
              <h4 className="font-semibold mb-3">What technologies do you specialize in?</h4>
              <p className="text-muted-foreground text-sm">
                AI integration, Next.js/React, Python, and no-code platforms
                like Bubble.io for rapid prototyping and automation.
              </p>
            </div>
            <div className="experience-card p-6">
              <h4 className="font-semibold mb-3">How do you handle project communication?</h4>
              <p className="text-muted-foreground text-sm">
                Regular updates via your preferred channel, weekly progress calls, and
                transparent project management tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;