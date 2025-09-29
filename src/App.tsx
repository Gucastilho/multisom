import { Navigation } from "./components/Navigation";
import { EventGallery } from "./components/EventGallery";
import { EquipmentShowcase } from "./components/EquipmentShowcase";
import { ContactSection } from "./components/ContactSection";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Play, Music, Star, Users, Calendar, Award } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Events Completed" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "Average Rating" },
    { icon: <Calendar className="w-6 h-6" />, number: "8+", label: "Years Experience" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Happy Couples" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white dark">
      <Navigation />
      <Toaster />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660211934853-e33d8a02201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBESiUyMHR1cm50YWJsZXMlMjBtaXhpbmd8ZW58MXx8fHwxNzU3NjA5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="DJ mixing music"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
              <Music className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            DJ BEATS
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creating unforgettable moments through the power of music. Professional DJ services for all your special occasions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
              onClick={() => scrollToSection('#contact')}
            >
              Book Your Event
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={() => scrollToSection('#about')}
            >
              <Play className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-400 mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">About DJ BEATS</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With over 8 years of experience in the music industry, DJ BEATS has become a trusted name for 
                exceptional DJ services. Specializing in weddings, corporate events, and private celebrations, 
                we bring energy, professionalism, and an extensive music library to every occasion.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our passion for music drives us to create personalized playlists that reflect your unique style 
                and preferences. From the latest hits to timeless classics, we ensure your guests stay on the 
                dance floor all night long.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-gray-400">Events</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1636293875439-b3125c0f1fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBESiUyMHBvcnRyYWl0JTIwc3R1ZGlvfGVufDF8fHx8MTc1NzYwOTk0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional DJ"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <EventGallery />

      {/* Equipment Showcase */}
      <EquipmentShowcase />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                DJ<span className="text-purple-400">BEATS</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional DJ services bringing the perfect soundtrack to your special moments.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('#events')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Our Events
                </button>
                <button 
                  onClick={() => scrollToSection('#equipment')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Equipment
                </button>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>djbeats@example.com</p>
                <p>(555) 123-4567</p>
                <p>Available Nationwide</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DJ BEATS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}