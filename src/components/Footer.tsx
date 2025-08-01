export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg mb-2">Orthodox Faith Conference 2025</h3>
            <p className="text-sm text-primary-foreground/80">
              Strengthening Faith, Building Community, Preserving Tradition
            </p>
          </div>
          
          <div className="text-sm text-primary-foreground/80">
            <p>March 15-17, 2025 • St. Nicholas Cathedral, Chicago</p>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-4 text-xs text-primary-foreground/60">
            <p>© 2025 Orthodox Faith Conference. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}