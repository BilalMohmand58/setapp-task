import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-setapp-dark py-12 md:py-20 border-t border-white/5">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
              Setapp
            </h3>
            <p className="text-white/60 mb-6 max-w-sm">
              The best apps for Mac and iOS in one suite.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Apps</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">For Teams</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Setapp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
