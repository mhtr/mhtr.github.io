import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";

export function RulesSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Conference Guidelines
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To ensure a respectful and enriching experience for all participants, 
            please review and follow these conference guidelines.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">General Conduct</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Respectful Behavior</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Maintain reverent behavior during liturgical services</li>
                  <li>• Respect the sacred nature of the cathedral space</li>
                  <li>• Be courteous and considerate to all participants</li>
                  <li>• Engage in constructive dialogue during discussions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Dress Code</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Business casual or formal attire recommended</li>
                  <li>• Modest clothing appropriate for church setting</li>
                  <li>• Head coverings welcome during services</li>
                  <li>• Comfortable shoes for walking between venues</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Participation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Arrive on time for scheduled sessions</li>
                  <li>• Turn off or silence mobile devices during presentations</li>
                  <li>• Participate actively in discussions and workshops</li>
                  <li>• Ask questions respectfully during Q&A periods</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Policies & Procedures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Photography & Recording</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No photography during Divine Liturgy or prayers</li>
                  <li>• Conference sessions may be recorded for archives</li>
                  <li>• Respect privacy - ask before photographing individuals</li>
                  <li>• Social media sharing encouraged with #OrthodoxConf2025</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Health & Safety</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Follow all venue safety guidelines and procedures</li>
                  <li>• Report any incidents to conference organizers</li>
                  <li>• Emergency exits are clearly marked throughout venue</li>
                  <li>• First aid assistance available at registration desk</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Meals & Refreshments</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All meals provided follow Orthodox dietary guidelines</li>
                  <li>• Vegetarian and special dietary options available</li>
                  <li>• Inform organizers of allergies during registration</li>
                  <li>• No outside food or beverages in main cathedral</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Alert>
            <AlertDescription>
              <strong>Important:</strong> By attending this conference, you agree to abide by these guidelines 
              and acknowledge that failure to comply may result in removal from the event. 
              Conference organizers reserve the right to refuse entry or remove any participant 
              whose behavior is deemed inappropriate or disruptive.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}