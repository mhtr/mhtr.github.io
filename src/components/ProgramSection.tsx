import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const scheduleData = {
  "day1": {
    title: "Пятница, 8 августа",
    sessions: [
      { time: "13:00", title: "Заезд на локацию", speaker: "" },
      { time: "17:15", title: "Молебен на открытие съезда", speaker: ""},
      { time: "17:30", title: "обращение главы митрополичьего округа Русской Православной Церкви в Республике Казахстан", speaker: "митрополит Астанайский и Казахстанский Александр"},
      { time: "18:30", title: "Ужин", speaker: "" },
      { time: "19:30", title: "Послание председателя синодального отдела по делам молодежи преосвященного Серафима, епископа Истринского", speaker: "диакон Евгений Есауленко" },
      { time: "19:40", title: "Вступительное слово председателя коммиссии по делам молодежи Казахстанского митрополичьего округа", speaker: "иерей Георгий Рублинский" },
      { time: "20:00", title: "Презентация команд", speaker: "" },
      { time: "22:00", title: "Вечерняя молитва", speaker: "" },
      { time: "23:00", title: "Отбой", speaker: "" }
    ]
  },
  "day2": {
    title: "Суббота, 9 августа",
    sessions: [
      { time: "8:00", title: "Подъем", speaker: "" },
      { time: "8:30", title: "Утренняя молитва", speaker: "" },
      { time: "9:00", title: "Завтрак", speaker: "" },
      { time: "10:00", title: "Церковь и здравый смысл. Диалог, критика, перемены", speaker: "Серафим Сашлиев" },
      { time: "12:00", title: "Разработка проектов молодежного служения, работа в командах", speaker: "" },
      { time: "13:00", title: "Обед", speaker: "" },
      { time: "14:00", title: "Мастеркласс по продвижению в социальных соцсетях", speaker: "Досаев Рафаиль" },
      { time: "14:40", title: "Мастеркласс по мобилографии", speaker: "Елисеев Владимир" },
      { time: "15:30", title: "Мастеркласс по храмовой флористике", speaker: "Иван Тихомиров" },
      { time: "16:30", title: "Игротека", speaker: "" },
      { time: "18:30", title: "Ужин", speaker: "" },
      { time: "19:30", title: "Викторина, посвященная новомученникам и исповедникам в земле Казахстанской просиявших", speaker: "Максим Сафин" },
      { time: "20:30", title: "Рок. Рэп. Христианство", speaker: "диакон Евгений Есауленко" },
      { time: "21:00", title: "Вечерняя молитва, исповедь, подготовка ко Причастию", speaker: "" },
      { time: "23:00", title: "Отбой", speaker: "" }
    ]
  },
  "day3": {
    title: "Воскресенье, 10 августа",
    sessions: [
      { time: "7:30", title: "Подъем", speaker: "" },
      { time: "8:30", title: "Выезд в храм на Божественную Литургию", speaker: "" },
      { time: "10:00", title: "Божественная Литургия в Свято-Казанском соборе г. Алматы", speaker: "" },
      { time: "12:00", title: "Обед", speaker: "" },
      { time: "13:00", title: "Возвращение на локацию", speaker: "" },
      { time: "15:00", title: "Слово о прмчч. Серафиме и Феогносте", speaker: "иерей Георгий Рублинский" },
      { time: "16:00", title: "Беседа о христианстве в средней Азии по книге митрополита Александра", speaker: "иерей Олег Лисин" },
      { time: "16:30", title: "Обращение проректора семинарии", speaker: "иерей Иоанн Левинский" },
      { time: "16:45", title: "Итоги, закрытие", speaker: "" },
      { time: "18:00", title: "Ужин", speaker: "" },
      { time: "19:00", title: "Кино, концерт", speaker: "" },
      { time: "20:00", title: "Вечерняя молитва, исповедь, подготовка ко Причастию", speaker: "" },
      { time: "21:00", title: "Отбой", speaker: "" }
    ]
  },
  "day4": {
    title: "Понедельник, 11 августа",
    sessions: [
      { time: "3:00", title: "Подъем, выезд", speaker: "" },
      { time: "5:00", title: "Начало шествия к месту мученической кончины прмчч. Серафима и Феогноста ", speaker: "" },
      { time: "9:00", title: "Божественная Литургия, возглавляемая преосвященным Вениамином, епископом Талгарским", speaker: "" },
      { time: "11:00", title: "Обед", speaker: "" },
      { time: "12:00", title: "Начало спуска", speaker: "" },
      { time: "14:00", title: "Прибытие в епархию", speaker: "" }
    ]
  }
};

const dayLabels = {
  "day1": "Day 1",
  "day2": "Day 2", 
  "day3": "Day 3",
  "day4": "Day 4"
};

export function ProgramSection() {
  const [activeDay, setActiveDay] = useState("day1");

  const handleDayChange = (day: string) => {
    setActiveDay(day);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Программа съезда
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Четыре дня интереснейших лекций, командной работы, совместной молитвы и других активностей.
          </p>
        </div>
        
        {/* Custom Day Selector with Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative bg-muted rounded-xl p-1 inline-flex">
            {/* Animated background indicator */}
            <motion.div
              className="absolute top-1 bottom-1 bg-background rounded-lg shadow-sm border border-primary/10"
              layout
              initial={false}
              animate={{
                left: activeDay === "day1" ? "0.25rem" : activeDay === "day2" ? "25%" : activeDay === "day3" ? "50%" : "75%",
                width: "calc(25% - 0.25rem)"
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            />
            
            {/* Day buttons */}
            {Object.keys(scheduleData).map((day) => (
              <motion.button
                key={day}
                onClick={() => handleDayChange(day)}
                className={`relative z-10 px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  activeDay === day
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {dayLabels[day as keyof typeof dayLabels]}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Animated Content Area */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0.0, 0.2, 1]
              }}
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-primary/5 border-b border-primary/10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <CardTitle className="text-center text-2xl text-primary flex items-center justify-center gap-3">
                      <span className="text-primary/50">✛</span>
                      {scheduleData[activeDay as keyof typeof scheduleData].title}
                      <span className="text-primary/50">✛</span>
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {scheduleData[activeDay as keyof typeof scheduleData].sessions.map((session, index) => (
                      <motion.div
                        key={`${activeDay}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 + (index * 0.05),
                          duration: 0.3,
                          ease: "easeOut"
                        }}
                        className="group"
                      >
                        <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-card hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 hover:shadow-sm">
                          <div className="w-20 text-sm text-muted-foreground font-medium bg-muted/50 rounded px-2 py-1 text-center">
                            {session.time}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium group-hover:text-primary transition-colors duration-200">
                              {session.title}
                            </h4>
                            {session.speaker && (
                              <p className="text-sm text-muted-foreground mt-1">
                                <span className="text-primary/70">✛</span> {session.speaker}
                              </p>
                            )}
                          </div>
                          <div className="hidden sm:block">
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                session.type === 'main' ? 'text-primary' :
                                session.type === 'session' ? 'text-blue-700' :
                                session.type === 'workshop' ? 'text-green-700' :
                                session.type === 'panel' ? 'text-purple-700' :
                                session.type === 'prayer' ? 'text-orange-700' :
                                'text-muted-foreground'
                              }`}
                            >
                              {session.type === 'break' ? 'Break' : 
                               session.type === 'main' ? 'Keynote' : 
                               session.type === 'session' ? 'Session' :
                               session.type === 'workshop' ? 'Workshop' :
                               session.type === 'panel' ? 'Panel' :
                               session.type === 'prayer' ? 'Liturgy' : ''}
                            </motion.span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}