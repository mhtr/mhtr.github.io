import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, Bus, ZoomIn } from "lucide-react";

export function LocationSection() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <span className="text-primary/50 mx-4">✠</span>
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Локация
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Съезд состоится на территории экокурорта "8 Озер".
          </p>
        </div>
        
        {/* Кликабельная карта локации */}
        <div className="mb-12">
          <Card className="overflow-hidden border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-center text-xl text-primary flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5" />
                Карта локации
                <MapPin className="w-5 h-5" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                <DialogTrigger asChild>
                  <div className="relative cursor-pointer group">
                    <ImageWithFallback
                      src="img/map.jpg"
                      alt="Карта локации конференции в Алматы"
                      className="w-full h-80 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 border border-primary/20 group-hover:bg-primary/10 transition-all duration-300">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg backdrop-blur-sm">
                        Нажмите для увеличения
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-auto">
                  <DialogTitle className="sr-only">
                    Карта локации конференции - увеличенный вид
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Подробная карта
                  </DialogDescription>
                  <div className="relative">
                    <ImageWithFallback
                      src="img/map.jpg"
                      alt="Полная карта локации конференции"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Объединенный блок: Место проведения и интерактивная карта */}
        <div className="mb-12">
          <Card className="border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-center text-xl text-primary flex items-center justify-center gap-3">
                <span className="text-primary/70">✠</span>
                Экокурорт "8 Озер".
                <span className="text-primary/70">✠</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="w-full h-96 bg-muted rounded-lg border border-primary/10 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.77964745041!2d77.15343927646224!3d43.50693217110943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883088db1383a9d%3A0x3c2574d93e78adfe!2zUGFyayBSZXNvcnQgwqvQktC-0YHQtdC80Ywg0J7Qt9C10YDCuw!5e0!3m2!1sru!2skz!4v1754235011861!5m2!1sru!2skz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St. Nicholas Cathedral Location in Almaty"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Упрощенный блок транспортного обеспечения */}
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary flex items-center justify-center gap-3">
              <Bus className="w-6 h-6" />
              Транспортное обеспечение
              <Bus className="w-6 h-6" />
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
                <span className="text-primary text-lg">✠</span>
                <span className="font-medium text-primary">
                  Автобусы от Свято-Казанского собора города Алматы
                </span>
                <span className="text-primary text-lg">✠</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Место отправления */}
              <div className="text-center bg-background rounded-lg p-6 border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium mb-4 text-primary text-lg">Место отправления</h4>
                <div className="space-y-3">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h5 className="font-medium text-primary mb-2">Свято-Казанский собор</h5>
                    <p className="text-sm text-muted-foreground">
                      ул. Халиуллина, 45а<br />
                      г. Алматы, Казахстан
                    </p>
                  </div>
                </div>
              </div>

              {/* Важная информация */}
              <div className="text-center bg-background rounded-lg p-6 border border-primary/10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ℹ️</span>
                </div>
                <h4 className="font-medium mb-4 text-primary text-lg">Важная информация</h4>
                <div className="text-left space-y-3">
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Транспорт предоставляется бесплатно
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Ориентировочное время в пути: 1 час 20 минут
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Документ удостоверяющий личность при себе обязателен
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}