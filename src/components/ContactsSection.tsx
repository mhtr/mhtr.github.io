import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";


export function ContactsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Следите за обновлениями в наших социальных сетях.
          </p>
        </div>
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">Мы в соцсетях</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <a
                  href="https://www.instagram.com/alfa_omega_kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
                >
                  <i className="fab fa-instagram text-3xl mb-2"></i>
                  Instagram
                </a>
                <a
                  href="https://t.me/teatimesunday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
                >
                  <i className="fab fa-telegram text-3xl mb-2"></i>
                  Telegram
                </a>
                <a
                  href="https://vk.com/pmd_kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
                >
                  <i className="fab fa-vk text-3xl mb-2"></i>
                  VK
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}