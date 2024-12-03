import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { Anta } from "next/font/google";

const anta = Anta({
    subsets: ['latin'],
    weight: '400'
});

export default function Home() {

    const linksElement = (
        <>
            <Link href="https://www.stealthbrowser.cloud" className="text-gray-300 hover:text-white transition-colors">
                Product
            </Link>
            <Link href="https://github.com/automata-labs-team" className="text-gray-300 hover:text-white transition-colors">
                Technologies
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
            </Link>
        </>
    );
    return (
        <div className="min-h-screen bg-[#0A051F] text-white overflow-hidden">
            {/* Navigation */}
            <nav className="container mx-auto px-8 md:px-12 lg:px-16 py-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-fuchsia-600 to-orange-300 rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-300" />
                    <span className={`text-xl font-medium ${anta.className}`}>Automata Labs</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {linksElement}
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
                            {linksElement}
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>

            {/* Hero Section */}
            <main className="container mx-auto px-8 md:px-12 lg:px-16 mt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            We&apos;re building<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-600">
                                open source
                            </span><br />
                            <span>libraries to help you build</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-purple-600">
                                with AI
                            </span>
                            .
                        </h1>
                        <Link href="https://github.com/automata-labs-team">
                            <Button className="transition-all duration-500 mt-8 bg-gradient-to-r from-purple-500 via-fuchsia-600 to-orange-300 hover:from-purple-600 hover:via-fuchsia-700 hover:to-orange-400 hover:scale-105 text-white px-8 py-6 rounded-xl text-lg">
                                See our open source work
                            </Button>
                        </Link>
                    </div>

                    <div className="relative">
                        {/* Hero Image */}
                        <div className="w-full aspect-square relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-sky-300 opacity-20 blur-3xl rounded-full" />
                            <Logo className="absolute inset-0 w-full h-full object-contain hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all duration-300" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

