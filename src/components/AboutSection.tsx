export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            О съезде
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            По бласоловению митрополита Астанайского и Кзахстанского Александра
            состоится X съезд православной молодежи Казахстана. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fa-solid fa-cross"></i>
            </div>
            <h3 className="text-xl mb-3">Молитвенное общение</h3>
            <p className="text-muted-foreground">
              Будем совершать вместе литургию - общее дело, совместно испольнять утреннее и вечернее правило, а также,
              как кульминация - паломническая поездка - восхождение на место мученической кончины прмчч. Серафима и Феогноста в высокогорный скит.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fa-solid fa-church"></i>
            </div>
            <h3 className="text-xl mb-3">Сообщество единомышленников</h3>
            <p className="text-muted-foreground">
              Вновь собираем комьюнити молодых и "заряженных" ребят, готовых двигать вперед православное молодежное движение Казахстана и, прежде всего,
              в себе реализовывать идеи вечных ценностей. 
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fa-solid fa-book-bible"></i>
            </div>
            <h3 className="text-xl mb-3">Лекции и мастерклассы</h3>
            <p className="text-muted-foreground">
              Проведем мастерклассы по SMM, мобилографии и храмовой флористике, поговорим на различные душеспасительные темы,
              а также померимся серым веществом в интеллектуальной викторине.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}