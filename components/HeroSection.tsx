

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-24 px-4 overflow-hidden">
      {/* Decorative Orthodox pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-primary">✠</div>
        <div className="absolute top-20 right-20 text-4xl text-primary">✠</div>
        <div className="absolute bottom-20 left-20 text-5xl text-primary">✠</div>
        <div className="absolute bottom-10 right-10 text-3xl text-primary">✠</div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Orthodox cross centerpiece */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/20">
            <span className="text-primary text-3xl">✠</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl mb-6 text-primary">
          Orthodox Faith Conference 2025
        </h1>
        
        {/* Decorative separator */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          <span className="text-primary/50 mx-4">✠</span>
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Strengthening Faith, Building Community, Preserving Tradition
        </p>
        
        <div className="space-y-4 mb-12 bg-primary/5 rounded-lg p-6 border border-primary/10">
          <p className="text-lg">
            <span className="font-medium text-primary">March 15-17, 2025</span>
          </p>
          <p className="text-lg">
            <span className="font-medium text-primary">St. Nicholas Cathedral, Metropolitan Center</span>
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground italic">
            "Come and see the works of the Lord" - Psalm 46:8
          </p>
        </div>
      </div>
    </section>
  );
}