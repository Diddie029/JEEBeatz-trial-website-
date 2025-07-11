import { useState, useEffect } from "react";
import { Play, Download, Instagram, Music, Zap, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";

const Index = () => {
  const [currentBeat, setCurrentBeat] = useState(0);
  
  // Featured beats carousel
  const featuredBeats = [
    { id: 1, title: "Cyber Dreams", genre: "Trap", bpm: 140, mood: "Dark" },
    { id: 2, title: "Neon Nights", genre: "Hip-Hop", bpm: 85, mood: "Chill" },
    { id: 3, title: "Electric Pulse", genre: "Electronic", bpm: 128, mood: "Energetic" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBeat((prev) => (prev + 1) % featuredBeats.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Music, label: "Beats Created", value: "500+" },
    { icon: Users, label: "Happy Clients", value: "250+" },
    { icon: Star, label: "5-Star Reviews", value: "98%" },
    { icon: Zap, label: "Years Experience", value: "8+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg-hero opacity-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 gradient-bg-primary rounded-full neon-glow-blue animate-pulse opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 gradient-bg-secondary rounded-full neon-glow-pink animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 gradient-bg-primary rounded-full neon-glow-purple animate-pulse opacity-20"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="font-orbitron text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">JEE BEATZ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Producer • Beatmaker • Sound Designer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting the future sound with cutting-edge beats, neon-infused melodies, and cyberpunk vibes that elevate your music to the next dimension.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="neon-button text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Explore Beats
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/30 hover-glow-pink">
              <Download className="mr-2 h-5 w-5" />
              Free Samples
            </Button>
          </div>

          {/* Featured Beat Preview */}
          <Card className="max-w-md mx-auto cyber-border p-6 bg-card/50 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Now Playing</p>
              <h3 className="font-orbitron text-xl font-bold gradient-text mb-2">
                {featuredBeats[currentBeat].title}
              </h3>
              <div className="flex justify-center space-x-4 text-sm text-muted-foreground mb-4">
                <span>{featuredBeats[currentBeat].genre}</span>
                <span>•</span>
                <span>{featuredBeats[currentBeat].bpm} BPM</span>
                <span>•</span>
                <span>{featuredBeats[currentBeat].mood}</span>
              </div>
              <div className="flex justify-center space-x-2 mb-4">
                {featuredBeats.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentBeat ? "bg-primary neon-glow-blue" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button size="sm" className="neon-button">
                <Play className="mr-2 h-4 w-4" />
                Play Preview
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold gradient-text mb-4">
              The Numbers Speak
            </h2>
            <p className="text-lg text-muted-foreground">
              Building the future of music, one beat at a time
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="beat-card text-center">
                <div className="p-6">
                  <div className="w-16 h-16 gradient-bg-primary rounded-full flex items-center justify-center mx-auto mb-4 neon-glow-blue">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold gradient-text mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold gradient-text mb-4">
              Ready to Create?
            </h2>
            <p className="text-lg text-muted-foreground">
              Dive into the JEE BEATZ universe
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="beat-card group cursor-pointer">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-blue group-hover:scale-110 transition-transform duration-300">
                  <Music className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4">Browse Beats</h3>
                <p className="text-muted-foreground mb-6">
                  Discover hundreds of premium beats across all genres
                </p>
                <Button className="neon-button w-full">
                  Explore Now
                </Button>
              </div>
            </Card>

            <Card className="beat-card group cursor-pointer">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-pink group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4">About Me</h3>
                <p className="text-muted-foreground mb-6">
                  Learn about my journey and musical style
                </p>
                <Button variant="outline" className="w-full hover-glow-pink">
                  View Portfolio
                </Button>
              </div>
            </Card>

            <Card className="beat-card group cursor-pointer">
              <div className="p-8 text-center">
                <div className="w-20 h-20 gradient-bg-primary rounded-full flex items-center justify-center mx-auto mb-6 neon-glow-purple group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-orbitron text-xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with me for collaborations and custom work
                </p>
                <Button variant="outline" className="w-full hover-glow-purple">
                  Contact Me
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 gradient-bg-primary rounded-lg flex items-center justify-center neon-glow-blue">
              <Music className="w-4 h-4 text-white" />
            </div>
            <span className="font-orbitron text-lg font-bold gradient-text">
              JEE BEATZ
            </span>
          </div>
          <p className="text-muted-foreground mb-4">
            © 2024 JEE BEATZ. All rights reserved. Crafting the future sound.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with 🎵 and cutting-edge technology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
