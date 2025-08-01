export function AboutSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary">
            About the Conference
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for three transformative days of spiritual growth, theological discourse, 
            and fellowship as we explore the depths of Orthodox Christian faith and tradition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">✠</span>
            </div>
            <h3 className="text-xl mb-3">Spiritual Growth</h3>
            <p className="text-muted-foreground">
              Deepen your understanding of Orthodox theology and strengthen your spiritual journey 
              through guided discussions and prayer.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">👥</span>
            </div>
            <h3 className="text-xl mb-3">Community Building</h3>
            <p className="text-muted-foreground">
              Connect with fellow Orthodox Christians from around the world and build lasting 
              relationships within our faith community.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-2xl">📚</span>
            </div>
            <h3 className="text-xl mb-3">Traditional Learning</h3>
            <p className="text-muted-foreground">
              Explore the rich heritage of Orthodox Christianity through traditional teachings, 
              liturgy, and centuries-old wisdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}