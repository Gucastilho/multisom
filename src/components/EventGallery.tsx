import { useState } from "react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EventCategory {
  id: string;
  name: string;
  images: string[];
}

const eventCategories: EventCategory[] = [
  {
    id: "weddings",
    name: "Weddings",
    images: [
      "https://images.unsplash.com/photo-1757283585436-24172bf34d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwREolMjBkYW5jZSUyMGZsb29yfGVufDF8fHx8MTc1NzYwOTk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ]
  },
  {
    id: "graduations",
    name: "Graduations",
    images: [
      "https://images.unsplash.com/photo-1594520769784-39f1846bcb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwcGFydHklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NTc2MDk5NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ]
  },
  {
    id: "sweet15",
    name: "Sweet 15",
    images: [
      "https://images.unsplash.com/photo-1755207299205-45605720ce1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhJUMzJUIxZXJhJTIwcGFydHklMjBzd2VldCUyMDE1fGVufDF8fHx8MTc1NzYwOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ]
  },
  {
    id: "birthdays",
    name: "Birthdays",
    images: [
      "https://images.unsplash.com/photo-1686477014401-3f0b3164db49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwbGlnaHRzJTIwbXVzaWN8ZW58MXx8fHwxNzU3NjA5OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ]
  },
  {
    id: "anniversaries",
    name: "Anniversaries",
    images: [
      "https://images.unsplash.com/photo-1633102467628-6511a5129a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5pdmVyc2FyeSUyMGNlbGVicmF0aW9uJTIwY291cGxlfGVufDF8fHx8MTc1NzYwOTk0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ]
  }
];

export function EventGallery() {
  const [activeCategory, setActiveCategory] = useState("weddings");

  const activeEvents = eventCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="events" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring the perfect soundtrack to your special moments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {eventCategories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? "default" : "secondary"}
              className={`cursor-pointer px-6 py-2 text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Event Images */}
        {activeEvents && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeEvents.images.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-gray-900 border-gray-800 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`${activeEvents.name} event ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}