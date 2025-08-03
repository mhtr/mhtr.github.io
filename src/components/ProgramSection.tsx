import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const scheduleData = {
  "day1": {
    title: "Friday, March 15",
    sessions: [
      { time: "9:00 AM", title: "Registration & Welcome Coffee", speaker: "", type: "break" },
      { time: "10:00 AM", title: "Opening Ceremony & Divine Liturgy", speaker: "Archbishop Michael", type: "main" },
      { time: "12:00 PM", title: "Lunch Break", speaker: "", type: "break" },
      { time: "1:30 PM", title: "The Foundations of Orthodox Faith", speaker: "Dr. Maria Theodoros", type: "session" },
      { time: "3:00 PM", title: "Coffee Break", speaker: "", type: "break" },
      { time: "3:30 PM", title: "Prayer and Contemplation Workshop", speaker: "Father John Stavros", type: "workshop" },
      { time: "5:00 PM", title: "Welcome Reception", speaker: "", type: "break" }
    ]
  },
  "day2": {
    title: "Saturday, March 16",
    sessions: [
      { time: "9:00 AM", title: "Morning Prayer", speaker: "", type: "prayer" },
      { time: "9:30 AM", title: "Orthodox Theology in Modern Context", speaker: "Dr. Elena Christou", type: "main" },
      { time: "11:00 AM", title: "Coffee Break", speaker: "", type: "break" },
      { time: "11:30 AM", title: "Panel: Living Orthodox Faith Today", speaker: "All Speakers", type: "panel" },
      { time: "12:30 PM", title: "Lunch Break", speaker: "", type: "break" },
      { time: "2:00 PM", title: "Byzantine Music Workshop", speaker: "Choir Director", type: "workshop" },
      { time: "3:30 PM", title: "Icons and Spirituality", speaker: "Icon Artist", type: "session" },
      { time: "5:00 PM", title: "Vespers Service", speaker: "", type: "prayer" }
    ]
  },
  "day3": {
    title: "Sunday, March 17",
    sessions: [
      { time: "9:00 AM", title: "Divine Liturgy", speaker: "Archbishop Michael", type: "prayer" },
      { time: "11:00 AM", title: "Coffee Fellowship", speaker: "", type: "break" },
      { time: "11:30 AM", title: "The Future of Orthodox Christianity", speaker: "Panel Discussion", type: "panel" },
      { time: "12:30 PM", title: "Closing Remarks & Blessing", speaker: "Archbishop Michael", type: "main" },
      { time: "1:00 PM", title: "Farewell Lunch", speaker: "", type: "break" }
    ]
  }
};

const dayLabels = {
  "day1": "Day 1",
  "day2": "Day 2", 
  "day3": "Day 3"
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
            Conference Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three days of enriching sessions, workshops, and spiritual activities designed to 
            deepen your Orthodox faith and connect with fellow believers.
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
                left: activeDay === "day1" ? "0.25rem" : activeDay === "day2" ? "33.33%" : "66.67%",
                width: "calc(33.33% - 0.25rem)"
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
                                session.type === 'main' ? 'bg-primary/10 text-primary border border-primary/20' :
                                session.type === 'session' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                session.type === 'workshop' ? 'bg-green-50 text-green-700 border border-green-200' :
                                session.type === 'panel' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                                session.type === 'prayer' ? 'bg-orange-50 text-orange-700 border border-orange-200' :
                                'bg-muted text-muted-foreground border border-border'
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