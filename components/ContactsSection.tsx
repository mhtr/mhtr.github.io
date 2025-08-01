import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export function ContactsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions about the conference? Need assistance with registration or accommodations? 
            Our team is here to help you prepare for this spiritual gathering.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Conference Organizers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">General Information</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: info@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Fax: (555) 123-4568</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Registration Support</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: registration@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4569</p>
                  <p>Available: Mon-Fri, 9 AM - 6 PM CST</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Emergency Contact</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>During conference dates only:</p>
                  <p>Emergency: (555) 999-0000</p>
                  <p>Available 24/7 during event</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Venue & Logistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">St. Nicholas Cathedral</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>1234 Faith Avenue</p>
                  <p>Chicago, IL 60601</p>
                  <p>Phone: (555) 234-5678</p>
                  <p>Email: cathedral@stnicholaschicago.org</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Accommodations</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Hotel Coordinator:</p>
                  <p>Email: hotels@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4570</p>
                  <p>Group rates available until Feb 15</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Transportation</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Airport shuttle coordination:</p>
                  <p>Email: transport@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4571</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Spiritual & Academic</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Conference Director</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Archbishop Michael Konstantinos</p>
                  <p>Email: director@orthodoxconference.org</p>
                  <p>Office: (555) 123-4572</p>
                  <p>Secretary: Sr. Maria (555) 123-4573</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Academic Program</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Dr. Maria Theodoros, Program Chair</p>
                  <p>Email: academic@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4574</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Spiritual Formation</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Father John Stavros, Spiritual Director</p>
                  <p>Email: spiritual@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4575</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Office Hours & Response Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Regular Office Hours</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM CST</p>
                    <p>Saturday: 10:00 AM - 2:00 PM CST</p>
                    <p>Sunday: Closed</p>
                    <p>Conference dates: Extended hours</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Response Times</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Email: Within 24 hours (business days)</p>
                    <p>Phone: Immediate during office hours</p>
                    <p>Urgent matters: Same day response</p>
                    <p>Conference week: Within 2 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  We look forward to welcoming you to the conference
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}