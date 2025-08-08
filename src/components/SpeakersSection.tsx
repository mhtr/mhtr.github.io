import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
const speakers = [
  {
    name: "митрополит Александр",
    title: "предстоятель Православной Церкви Казахстана",
    bio: "",
    image: "photos/ma.jpg"
  },
  {
    name: "иерей Георгий Рублинский",
    title: "председатель комиссии по делам молодежи Казахстанского митрополичьего округа",
    bio: "",
    image: "photos/gr.jpeg"
  },
  {
    name: "иерей Иоанн Левинский",
    title: "проректор по воспитательной работе Алматинской православной духовной семинарии",
    bio: "",
    image: "photos/il.jpg"
  },
  {
    name: "иерей Олег Лисин",
    title: "заведующий Библейско-богословской кафедрой Алматинской православной духовной семинарии",
    bio: "",
    image: "photos/ol.webp"
  },
  {
    name: "диакон Евгений Есауленко",
    title: "сотрудник Синодального отдела по делам молодёжи, ответственный за сектор взаимодействия с зарубежными епархиями",
    bio: "",
    image: "photos/yes.jpg"
  },
  {
    name: "Серафим Сашлиев",
    title: "автор и ведущий youtube-канала \"Серафим\"",
    bio: "",
    image: "photos/ss.jpg"
  }
];
// Custom arrow components for the slider
function CustomPrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full p-2 sm:p-3 shadow-lg hover:bg-primary/10 transition-all duration-200 hover:scale-110"
      aria-label="Previous speaker"
    >
      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
    </button>
  );
}

function CustomNextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-background/90 backdrop-blur-sm border border-primary/20 rounded-full p-2 sm:p-3 shadow-lg hover:bg-primary/10 transition-all duration-200 hover:scale-110"
      aria-label="Next speaker"
    >
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
    </button>
  );
}

export function SpeakersSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    customPaging: () => (
      <div className="w-3 h-3 bg-primary/30 rounded-full transition-all duration-200 hover:bg-primary/60" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    )
  };

  return (
    <section className="py-20 px-2 sm:px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
            <span className="text-primary/50 mx-4">✠</span>
            <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          </div>
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            Featured Speakers
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from distinguished Orthodox theologians, clergy, and scholars who will share 
            their wisdom and insights throughout the conference.
          </p>
        </div>
        
        {/* Show slider only if more than 4 speakers */}
        {speakers.length > 4 ? (
          <div className="relative px-2 sm:px-6 md:px-12">
            <style>{`
              .slick-dots li.slick-active div {
                background-color: var(--primary) !important;
                transform: scale(1.2);
              }
              .slick-track {
                display: flex;
                align-items: stretch;
              }
              .slick-slide > div {
                height: 100%;
              }
              .slick-slide > div > div {
                height: 100%;
              }
              @media (max-width: 360px) {
                .slick-prev,
                .slick-next {
                  display: none !important;
                }
              }
              .slick-slider {
                overflow: hidden;
              }
              .slick-list {
                overflow: hidden;
                margin: 0 -1px;
              }
            `}</style>
            <Slider ref={sliderRef} {...settings}>
              {speakers.map((speaker, index) => (
                <div key={index} className="px-1 sm:px-2 md:px-3">
                  <Card className="text-center h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-background/80 backdrop-blur-sm">
                    <CardContent className="p-3 sm:p-4 md:p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <div className="relative inline-block">
                          <ImageWithFallback
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto object-cover border-2 border-primary/20"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-xs text-primary">✠</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm sm:text-base md:text-lg mb-1 sm:mb-2 text-primary">{speaker.name}</h3>
                          <p className="text-xs sm:text-sm text-primary/70 mb-2 sm:mb-3 font-medium">{speaker.title}</p>
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 sm:line-clamp-none">{speaker.bio}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          // Fallback to grid layout if 4 or fewer speakers
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="text-center border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-primary/20"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-xs text-primary">✠</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 text-primary">{speaker.name}</h3>
                  <p className="text-sm text-primary/70 mb-3 font-medium">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}