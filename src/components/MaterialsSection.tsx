import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Download, ExternalLink, Clock, Users, Star } from "lucide-react";

const materials = [
  {
    category: "Основные тексты для изучения",
    icon: BookOpen,
    description: "",
    items: [
      {
        title: "Жизнеописание прпмчч. Серафима (Богословского), Феогноста (Пивоварова) и Анатолия (Смирнова)",
        description: "",
        link: "https://pravzhizn.com/calendar/saints/group/serafim-bogoslovskij-feognost-pivovarov#1",
        type: "Онлайн текст"
      },
      {
        title: "Священноисповедник Николай, митрополит Алма-Атинский",
        description: "",
        link: "https://mitropolia.kz/archbishop/article/1363-ego-ispovednicheskij-podvig-uchit-nas-tomu-chto-net-takoj-sily-v-mire-kotoraya-mogla-by-prevozmoch-silu-bozhiyu-k-60-letiyu-so-dnya-prestavleniya-svyashchennoispovednika-nikolaya-mitropolita-alma-atinskogo.html",
        type: "Онлайн текст"
      },
      {
        title: "Преподобный Севастиан Карагандинский",
        description: "",
        link: "https://mitropolia.kz/archbishop/article/633-k-dnyu-prestavleniya-prepodobnogo-sevastiana-karagandinskogo.html",
        type: "Онлайн текст"
      },
      {
        title: "Пимен (Белоликов) (1879 - 1918) – епископ Семиреченский и Верненский (Алма-Атинский), священномученик",
        description: "",
        link: "https://mitropolia.kz/september/492-pimen-belolikov.html",
        type: "Онлайн текст"
      },
      {
        title: "Николай (Могилевский) (1877 - 1955) – митрополит Алма-Атинский и Казахстанский, священноисповедник",
        description: "",
        link: "https://mitropolia.kz/october/519-nikolaj-mogilevskij.html",
        type: "Онлайн текст"
      },
      {
        title: "митрополит Алма-Атинский и Казахстанский Иосиф (Чернов)",
        description: "",
        link: "https://mitropolia.kz/archbishop/worship/5683-den-pamyati-ispovednika-very-i-podvizhnika-blagochestiya-mitropolita-iosifa-chernova.html",
        type: "Онлайн текст"
      },
      {
        title: "священномученик Мефодий (Красноперов) – святитель северного казахстана",
        description: "",
        link: "https://seminaria.kz/_nauka/svjashhennomuchenik-mefodij-krasnoperov-svjatitel-severnogo-kazahstana/",
        type: "Онлайн текст"
      }
    ]
  }
];

const difficultyColors = {
  "Базовый": "bg-green-100 text-green-800 border-green-200",
  "Средний": "bg-yellow-100 text-yellow-800 border-yellow-200", 
  "Продвинутый": "bg-red-100 text-red-800 border-red-200"
};

export function MaterialsSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <span className="text-primary/50 mx-4">✛</span>
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Материалы для подготовки к викторине
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Рекомендованные источники для углубленного изучения в рамках подготовки к викторине.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {materials.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card key={categoryIndex} className="border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-primary">{category.category}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 bg-muted/30 rounded-lg border border-primary/5 hover:bg-muted/50 transition-all duration-200">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h4 className="font-medium text-sm text-primary leading-tight">{item.title}</h4>
                        <div className="flex gap-2 flex-shrink-0">
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded">
                          {item.type}
                        </span>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors group"
                        >
                          <span>Перейти</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
