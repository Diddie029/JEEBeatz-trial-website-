import { Instagram, Twitter, MessageCircle, ExternalLink, Play, Award, Users, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";

export default function Portfolio() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@jeebeatz",
      url: "https://instagram.com/jeebeatz",
      followers: "25.2K",
      color: "bg-gradient-to-r from-purple-600 to-pink-600"
    },
    {
      name: "TikTok",
      icon: Music,
      handle: "@jeebeatz",
      url: "https://tiktok.com/@jeebeatz",
      followers: "18.7K",
      color: "bg-gradient-to-r from-black to-red-600"
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      handle: "@jeebeatz",
      url: "https://twitter.com/jeebeatz",
      followers: "12.4K",
      color: "bg-gradient-to-r from-blue-600 to-blue-400"
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      handle: "Business",
      url: "https://wa.me/1234567890",
      followers: "Direct",
      color: "bg-gradient-to-r from-green-600 to-green-400"
    }
  ];

  const projects = [
    {
      title: "Midnight Vibes EP",
      artist: "Artist Name",
      type: "Production",
      year: "2024",
      streams: "2.1M",
      image: "🎵"
    },
    {
      title: "Summer Anthems",
      artist: "Various Artists",
      type: "Beat Pack",
      year: "2024",
      streams: "850K",
      image: "🌅"
    },
    {
      title: "Trap Kings",
      artist: "MC Flow",
      type: "Album Production",
      year: "2023",
      streams: "1.8M",
      image: "👑"
    },
    {
      title: "Chill Beats Vol. 3",
      artist: "JEE BEATZ",
      type: "Solo Project",
      year: "2023",
      streams: "3.2M",
      image: "🎧"
    }
  ];

  const achievements = [
    { icon: Play, label: "Total Streams", value: "15M+" },
    { icon: Users, label: "Artists Worked With", value: "200+" },
    { icon: Award, label: "Charts Entered", value: "25+" },
    { icon: Music, label: "Beats Produced", value: "500+" }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-16 w-40 h-40 gradient-bg-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 gradient-bg-secondary rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 gradient-bg-accent rounded-full blur-2xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 gradient-bg-primary rounded-full blur-xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="relative pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Hero Section */}
          <section className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto gradient-bg-primary rounded-full neon-glow-blue flex items-center justify-center text-6xl mb-6">
                🎵
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 gradient-bg-secondary rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-orbitron font-bold gradient-text">
                JEE BEATZ
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Producer | Beat Maker | Sound Engineer
              </p>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Crafting chart-topping beats and bringing musical visions to life. 
                With over 5 years in the industry, I specialize in creating unique soundscapes 
                that blend modern production techniques with timeless musicality.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {achievements.map((achievement) => (
                <Card key={achievement.label} className="neon-glow-blue border-primary/20 bg-card/50 backdrop-blur-lg hover-scale">
                  <CardContent className="p-6 text-center">
                    <achievement.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {achievement.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Media Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-4">
                Connect With Me
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow my journey and stay updated with the latest beats, collaborations, and behind-the-scenes content
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((social) => (
                <Card key={social.name} className="neon-glow-blue border-primary/20 bg-card/50 backdrop-blur-lg hover-scale group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg ${social.color} flex items-center justify-center neon-glow-blue group-hover:scale-110 transition-transform duration-300`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{social.name}</h3>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">{social.followers}</span>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary/20 hover-glow-blue"
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Follow
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my recent collaborations and solo projects that have made waves in the music industry
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="neon-glow-blue border-primary/20 bg-card/50 backdrop-blur-lg hover-scale group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 gradient-bg-primary rounded-lg flex items-center justify-center text-2xl neon-glow-blue group-hover:scale-110 transition-transform duration-300">
                        {project.image}
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                          <p className="text-muted-foreground">{project.artist}</p>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {project.type}
                          </Badge>
                          <Badge variant="outline" className="border-primary/20">
                            {project.year}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {project.streams} streams
                          </span>
                          <Button size="sm" variant="outline" className="border-primary/20 hover-glow-blue">
                            <Play className="w-3 h-3 mr-1" />
                            Listen
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-6 py-16">
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Whether you're looking for custom beats, full production services, or collaborative opportunities, 
              I'm here to bring your musical vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="neon-button text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover-glow-blue text-lg px-8 py-6">
                <Music className="w-5 h-5 mr-2" />
                Browse Beats
              </Button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}