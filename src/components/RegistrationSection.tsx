import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function RegistrationSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Registration & Information
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Conference Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Registration Fees</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>General Admission</span>
                    <span className="font-medium">$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Students & Seniors</span>
                    <span className="font-medium">$45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Clergy</span>
                    <span className="font-medium">$35</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">What's Included</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• All conference sessions and workshops</li>
                  <li>• Welcome reception and farewell lunch</li>
                  <li>• Conference materials and resources</li>
                  <li>• Coffee breaks and refreshments</li>
                  <li>• Certificate of participation</li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button className="w-full" size="lg">
                  Register Online
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Early bird discount ends February 15th
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Venue & Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>St. Nicholas Cathedral</p>
                  <p>Metropolitan Orthodox Center</p>
                  <p>1234 Faith Avenue</p>
                  <p>Chicago, IL 60601</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Accommodation</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Recommended hotels with conference rates:</p>
                  <p>• Grand Metropolitan Hotel</p>
                  <p>• Orthodox Inn & Suites</p>
                  <p>• Cathedral View Lodge</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Contact Information</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Email: info@orthodoxconference.org</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Office Hours: Mon-Fri, 9 AM - 5 PM</p>
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}