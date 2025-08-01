import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function LocationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Conference Location
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us at the beautiful St. Nicholas Cathedral, located in the heart of the metropolitan area 
            with easy access to transportation and accommodations.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Venue Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">St. Nicholas Cathedral</h4>
                <div className="text-muted-foreground space-y-2">
                  <p>Metropolitan Orthodox Center</p>
                  <p>1234 Faith Avenue</p>
                  <p>Chicago, IL 60601</p>
                  <p>United States</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Facilities</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Main cathedral hall (capacity: 500)</li>
                  <li>• Fellowship hall for meals and breaks</li>
                  <li>• Multiple breakout rooms for workshops</li>
                  <li>• Audio/visual equipment provided</li>
                  <li>• Wheelchair accessible</li>
                  <li>• On-site parking available</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Transportation</h4>
                <div className="text-muted-foreground space-y-1">
                  <p><strong>By Metro:</strong> Blue Line to Cathedral Station (2 blocks)</p>
                  <p><strong>By Bus:</strong> Routes 15, 22, 47 stop nearby</p>
                  <p><strong>By Car:</strong> Parking garage at 1240 Faith Avenue</p>
                  <p><strong>Airport:</strong> 25 minutes from O'Hare International</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Interactive Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.1234567890!2d-87.6298!3d41.8781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUyJzQxLjIiTiA4N8KwMzcnNDcuMyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '0.5rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St. Nicholas Cathedral Location"
                ></iframe>
              </div>
              
              <div className="mt-4 space-y-3">
                <div>
                  <h4 className="font-medium mb-2">Nearby Hotels</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Grand Metropolitan Hotel (0.3 miles)</p>
                    <p>• Orthodox Inn & Suites (0.5 miles)</p>
                    <p>• Cathedral View Lodge (0.7 miles)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Local Amenities</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Orthodox bookstore across the street</p>
                    <p>• Traditional Greek restaurant (2 blocks)</p>
                    <p>• Coffee shops and cafes nearby</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}