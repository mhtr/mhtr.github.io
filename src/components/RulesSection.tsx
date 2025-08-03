import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription } from "./ui/alert";

export function RulesSection() {
  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
          Правила
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Для комфортного пребывания на локации просим ознакомиться с правилами.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Общие правила</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2"><a href="docs/rules.pdf" target="_blank">Открыть документ</a></h4>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8">
          <Alert>
            <AlertDescription>
              <strong>Важно:</strong> Принимая участие в этой конференции, вы соглашаетесь соблюдать эти правила
и признаете, что несоблюдение правил может привести к удалению с мероприятия.
Организаторы конференции оставляют за собой право отказать во входе или удалить любого участника,
поведение которого будет сочтено ненадлежащим или нарушающим порядок.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}