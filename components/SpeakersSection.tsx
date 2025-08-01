import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const speakers = [
  {
    name: "Archbishop Michael Konstantinos",
    title: "Metropolitan of the Greek Orthodox Archdiocese",
    bio: "Leading scholar in patristic theology with over 30 years of pastoral experience.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Maria Theodoros",
    title: "Professor of Byzantine History",
    bio: "Renowned expert in Orthodox liturgical traditions and early church history.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Father John Stavros",
    title: "Spiritual Director",
    bio: "Devoted to Orthodox spirituality and monastic traditions with focus on prayer life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },
  {
    name: "Dr. Elena Christou",
    title: "Theologian and Author",
    bio: "Author of several books on Orthodox theology and contemporary Christian living.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
  }
];

export function SpeakersSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Featured Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from distinguished Orthodox theologians, clergy, and scholars who will share 
            their wisdom and insights throughout the conference.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-lg mb-2">{speaker.name}</h3>
                <p className="text-sm text-primary mb-3">{speaker.title}</p>
                <p className="text-sm text-muted-foreground">{speaker.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}