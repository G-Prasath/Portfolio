import { Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold">
          <span className="text-accent">V.</span> Prasath
        </div>
        <div className="font-sans text-xs opacity-35 text-center">
          © 2025 V. Prasath · guruprasathmsc@gmail.com · +91 80155 44372
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-sans text-xs opacity-35">
            <span>Built with</span>
            <Heart size={11} className="text-red-400" fill="currentColor" />
            <span>in Tamil Nadu</span>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/40 hover:text-accent transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
