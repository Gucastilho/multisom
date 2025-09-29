import { Card, CardContent } from "./ui/card";
import { Volume2, Mic, Radio, Headphones, Zap, Music } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const equipment = [
  {
    icon: <Volume2 className="w-8 h-8" />,
    title: "Professional Sound Systems",
    description: "High-quality speakers and amplifiers that deliver crystal clear audio for any venue size",
    image: "https://images.unsplash.com/photo-1645536729519-134e3b7e9e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMGVxdWlwbWVudCUyMHNwZWFrZXJzJTIwdHVybnRhYmxlc3xlbnwxfHx8fDE3NTc2MDk5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "Professional DJ Turntables",
    description: "Industry-standard turntables and mixers for seamless music transitions and professional mixing",
    image: "https://images.unsplash.com/photo-1660211934853-e33d8a02201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBESiUyMHR1cm50YWJsZXMlMjBtaXhpbmd8ZW58MXx8fHwxNzU3NjA5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Wireless Microphones",
    description: "Multiple wireless microphone systems for speeches, announcements, and live vocals",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "LED Lighting Systems",
    description: "Dynamic lighting effects and mood lighting to create the perfect atmosphere for your event",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Professional Monitoring",
    description: "High-end headphones and monitoring systems for precise sound control and mixing",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: "Digital Music Library",
    description: "Extensive digital music collection spanning all genres and decades, updated regularly",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
  }
];

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Equipment</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            State-of-the-art equipment ensuring exceptional sound quality and unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-purple-400">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}