import Link from "next/link"
import Image from "next/image"
import { Menu } from "'lucide-react'"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A051F] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-8 md:px-12 lg:px-16 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-lg" />
          <span className="text-xl font-semibold">human</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#product" className="text-gray-300 hover:text-white transition-colors">
            Product
          </Link>
          <Link href="#application" className="text-gray-300 hover:text-white transition-colors">
            Application
          </Link>
          <Link href="#technologies" className="text-gray-300 hover:text-white transition-colors">
            Technologies
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0A051F] border-gray-800">
            <div className="flex flex-col gap-4 mt-8">
              <Link href="#product" className="text-gray-300 hover:text-white transition-colors">
                Product
              </Link>
              <Link href="#application" className="text-gray-300 hover:text-white transition-colors">
                Application
              </Link>
              <Link href="#technologies" className="text-gray-300 hover:text-white transition-colors">
                Technologies
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-8 md:px-12 lg:px-16 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We're building an{""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                open resource
              </span>{""}
              library so everyone can solve problems{""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                with AI
              </span>
              .
            </h1>
            <Button className="mt-8 bg-[#5B4DC7] hover:bg-[#4B3DA7] text-white px-8 py-6 rounded-xl text-lg">
              Get started
            </Button>
          </div>
          
          <div className="relative">
            {/* Hero Image */}
            <div className="w-full aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl rounded-full" />
              <Image
                src="/logo-2.jpg"
                alt="Futuristic helmet illustration"
                width={800}
                height={800}
                priority
                className="relative z-10 w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
              {/* Floating Spheres */}
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-8 flex items-center gap-2 text-sm text-gray-400">
        <div className="w-px h-12 bg-gray-700" />
        <span className="rotate-90 origin-left transform">Scroll</span>
      </div>
    </div>
  )
}

