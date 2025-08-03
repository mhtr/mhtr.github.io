

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/5 to-background py-24 px-4 overflow-hidden">
      {/* Decorative Orthodox pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl text-primary">✛</div>
        <div className="absolute top-20 right-20 text-4xl text-primary">✛</div>
        <div className="absolute bottom-20 left-20 text-5xl text-primary">✛</div>
        <div className="absolute bottom-10 right-10 text-3xl text-primary">✛</div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Orthodox cross centerpiece */}
        <div className="mb-8">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <span className="text-primary text-3xl"><img src="logo/logoconf-2.svg" alt="logo" class="max-w-full h-auto" /></span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl mb-6 text-primary">
          X СЪЕЗД ПРАВОСЛАВНОЙ МОЛОДЁЖИ КАЗАХСТАНА
        </h1>
        
        {/* Decorative separator */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
          <span className="text-primary/50 mx-4">✛</span>
          <div className="h-px bg-primary/30 flex-1 max-w-20"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Много сердец - одна вера.
        </p>
        
        <div className="space-y-4 mb-12 bg-primary/5 rounded-lg p-6 border border-primary/10">
          <p className="text-lg">
            <span className="font-medium text-primary">8-11 августа 2025 года</span>
          </p>
          <p className="text-lg">
            <span className="font-medium text-primary">8 ОЗЕР</span>
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground italic">
            "ВЫ - СВЕТ МИРА" (МФ 5:14)
          </p>
        </div>
      </div>
    </section>
  );
}